<?php

namespace App\Override\Api;

use App\Models\Coin\Coin;
use App\Override\Logger;
use App\Services\Ethereum\Util;
use Brick\Math\BigInteger;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ERC20Api
{
    use EthereumClient;

    const GAS_LIMIT = 50000;
    const methodSignatures = [
        "allowance" => "dd62ed3e",
        "approve" => "095ea7b3",
        "transfer" => "a9059cbb",
        "transferFrom" => "23b872dd",
        "balanceOf" => "70a08231",
    ];
    private $currency;
    private $url;
    private $coin;

    public function __construct($currency)
    {
        $this->currency = $currency;
        $this->loadConfiguration();
    }

    private function loadConfiguration(): void
    {
        $this->url = settings("ethereum_server_url") ?? "";
        $this->coin = Coin::where('symbol', $this->currency)->with('systemWallet')->first();
        if (empty($this->coin)) {
            throw new Exception('Coin not found!');
        }
    }

    public function generateAddress(string $passphrase = ""): array
    {
        if (!$passphrase) {
            $passphrase = Str::random(16);
        }
        try {
            $response = $this->call("personal_newAccount", [$passphrase]);
            $response->throw();
            if ($response->successful()) {
                return [
                    'error' => 'ok',
                    'result' => [
                        'address' => $response['result'],
                        'passphrase' => $passphrase
                    ],
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][generateAddress]");
        }
        return ['error' => 'Failed to generate address.'];
    }

    public function approve(float $amount, string $owner, string $passphrase): bool
    {
        $spender = $this->coin->systemWallet->address;
        $params = [
            [
                "to" => $this->coin->contract_address,
                "from" => $owner,
                "data" => sprintf("0x%s%s%s",
                    self::methodSignatures["approve"],
                    Str::of($spender)->replaceFirst("0x", "")->padLeft(64, "0"),
                    Str::of(BigInteger::of(
                        Util::toWei($amount, $this->coin->decimal_place)
                    )->toBase(16))->padLeft(64, "0")
                )
            ],
            $passphrase
        ];

        try {
            $response = $this->call("personal_sendTransaction", $params);
            $response->throw();
            if ($response->successful()) {
                return !isset($response['error']) && $response['result'];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][approve]");
        }
        return false;
    }

    public function sendToAddress(string $to, float $amount, $gasPrice = null, $gasLimit = null): array
    {
        $params = [
            [
                "to" => $this->coin->contract_address,
                "from" => $this->coin->systemWallet->address,
                "data" => sprintf("0x%s%s%s",
                    self::methodSignatures["transfer"],
                    Str::of($to)->replaceFirst("0x", "")->padLeft(64, "0"),
                    Str::of(BigInteger::of(
                        Util::toWei($amount, $this->coin->decimal_place)
                    )->toBase(16))->padLeft(64, "0")
                ),
            ],
            $this->coin->systemWallet->passphrase
        ];

        try {
            if (bccomp($this->getBalance($params[0]['from']), $amount) < 0) {
                throw new Exception('System wallet doesn\'t have enough balance');
            }
            $response = $this->call("personal_sendTransaction", $params);

            $response->throw();
            if ($response->successful()) {
                return [
                    RESPONSE_STATUS_KEY => true,
                    RESPONSE_DATA => [
                        'status' => STATUS_PENDING,
                        'txn_id' => $response['result'],
                    ]
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][sendToAddress]");
        }
        return [
            RESPONSE_STATUS_KEY => false
        ];
    }

    public function getBalance(string $address): float
    {
        $params = [
            [
                "to" => $this->coin->contract_address,
                "data" => sprintf("0x%s%s",
                    self::methodSignatures["balanceOf"],
                    Str::of($address)->replaceFirst("0x", "")->padLeft(64, "0"),
                )
            ],
            "latest"
        ];
        try {
            $response = $this->call("eth_call", $params);
            $response->throw();
            if ($response->successful()) {
                return Util::fromWei($response['result'], $this->coin->decimal_place);
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][getBalance]");
        }
        return 0;
    }

    public function sendETHToAddress(string $to, float $amount, $gasPrice = null, $gasLimit = null): array
    {
        $params = [
            "from" => $this->coin->systemWallet->address,
            "to" => $to,
            "value" => '0x' . dechex(Util::toWei($amount, $this->coin->decimal_place)),
        ];

        if ($gasPrice) {
            $params['gasPrice'] = '0x' . dechex($gasPrice);
        }

        if ($gasLimit) {
            $params['gas'] = '0x' . dechex($gasLimit);
        }

        try {
            if (bccomp($this->getETHBalance($params['from']), $amount) < 0) {
                throw new Exception('System wallet doesn\'t have enough ETH for gas price');
            }
            $response = $this->call("personal_sendTransaction", [
                $params,
                $this->coin->systemWallet->passphrase
            ]);

            $response->throw();
            if ($response->successful()) {
                return [
                    RESPONSE_STATUS_KEY => true,
                    RESPONSE_DATA => [
                        'status' => STATUS_PENDING,
                        'txn_id' => $response['result'],
                    ]
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20][sendETHToAddress]");
        }
        return [
            RESPONSE_STATUS_KEY => false
        ];
    }

    public function getETHBalance(string $wallet = ""): float
    {
        try {
            $response = $this->call("eth_getBalance", [$wallet, 'latest']);
            $response->throw();
            if ($response->successful()) {
                return Util::fromWei($response['result'], $this->coin->decimal_place);
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][getETHBalance]");
        }
        return 0;
    }

    public function sendFromAddress(string $to, float $amount, string $form, $gasPrice = null, $gasLimit = null): array
    {
        $params = [
            [
                "to" => $this->coin->contract_address,
                "from" => $this->coin->systemWallet->address,
                "data" => sprintf("0x%s%s%s%s",
                    self::methodSignatures["transferFrom"],
                    Str::of($form)->replaceFirst("0x", "")->padLeft(64, "0"),
                    Str::of($to)->replaceFirst("0x", "")->padLeft(64, "0"),
                    Str::of(BigInteger::of(
                        Util::toWei($amount, $this->coin->decimal_place)
                    )->toBase(16))->padLeft(64, "0")
                ),
            ],
            $this->coin->systemWallet->passphrase
        ];

        try {
            if (bccomp($this->allowance($form), $amount) < 0) {
                throw new Exception('System wallet doesn\'t have enough allowance');
            }
            $response = $this->call("personal_sendTransaction", $params);

            $response->throw();
            if ($response->successful()) {
                return [
                    RESPONSE_STATUS_KEY => true,
                    RESPONSE_DATA => [
                        'status' => STATUS_PENDING,
                        'txn_id' => $response['result'],
                    ]
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][sendToAddress]");
        }
        return [
            RESPONSE_STATUS_KEY => false
        ];
    }

    public function allowance(string $owner): float
    {
        $spender = $this->coin->systemWallet->address;

        $params = [
            [
                "to" => $this->coin->contract_address,
                "data" => sprintf("0x%s%s%s",
                    self::methodSignatures["allowance"],
                    Str::of($owner)->replaceFirst("0x", "")->padLeft(64, "0"),
                    Str::of($spender)->replaceFirst("0x", "")->padLeft(64, "0")
                )
            ],
            "latest"
        ];

        try {
            $response = $this->call("eth_call", $params);
            $response->throw();
            if ($response->successful()) {
                return Util::fromWei($response['result'], $this->coin->decimal_place);
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][sendToAddress]");
        }
        return 0;
    }

    public function validateAddress(string $address): bool
    {
        try {
            return Util::isAddress($address);
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][validateAddress]");
        }
        return false;
    }

    public function validateIpn(Request $request): bool
    {
        return true;
    }

    public function getTransaction(string $txnId): array
    {
        try {
            $response = $this->call("eth_getTransactionByHash", [$txnId]);
            $response->throw();
            if ($response->successful()) {
                return [
                    'error' => 'ok',
                    'result' => $response['result']
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][getTransaction]");
        }
        return ['error' => 'No transactions found.'];
    }

    public function getTransactionStatus(string $txnId): bool
    {
        try {
            $response = $this->call("eth_getTransactionReceipt", [$txnId]);
            $response->throw();
            if ($response->successful()) {
                return boolval(hexdec($response['result']['status']));
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][getTransaction]");
        }
        return false;
    }

    public function gasPrice(): array
    {
        try {
            $response = $this->call("eth_gasPrice");
            $response->throw();
            if ($response->successful()) {
                return [
                    'error' => 'ok',
                    'result' => hexdec($response['result'])
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][ERC20Api][gasPrice]");
        }
        return ['error' => 'Error while getting gas price.'];
    }

    public function gasLimit(): int
    {
        return self::GAS_LIMIT;

    }
}
