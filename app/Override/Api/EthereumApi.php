<?php

namespace App\Override\Api;

use App\Models\Coin\Coin;
use App\Override\Logger;
use App\Services\Ethereum\Util;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EthereumApi
{
    use EthereumClient;

    const GAS_LIMIT = 21000;
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
            Logger::error($exception, "[FAILED][EthereumApi][generateAddress]");
        }
        return ['error' => 'Failed to generate address.'];
    }

    public function sendToAddress(string $to, float $amount, string $from = '', string $password = '', $gasPrice = null, $gasLimit = null): array
    {
        $params = [
            "from" => $from ?: $this->coin->systemWallet->address,
            "to" => $to,
            "value" => '0x' . dechex(Util::toWei($amount)),
        ];

        if ($gasPrice) {
            $params['gasPrice'] = '0x' . dechex($gasPrice);
        }

        if ($gasLimit) {
            $params['gas'] = '0x' . dechex($gasLimit);
        }
        try {
            if (bccomp($this->getBalance($params['from']), $amount) < 0) {
                throw new Exception('System wallet doesn\'t have enough balance');
            }
            $response = $this->call("personal_sendTransaction", [
                $params,
                $password ?: $this->coin->systemWallet->passphrase
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
            Logger::error($exception, "[FAILED][EthereumApi][sendToAddress]");
        }
        return [
            RESPONSE_STATUS_KEY => false
        ];
    }

    public function getBalance(string $wallet = ""): float
    {
        try {
            $response = $this->call("eth_getBalance", [$wallet, 'latest']);
            $response->throw();
            if ($response->successful()) {
                return Util::fromWei($response['result']);
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][EthereumApi][getBalance]");
        }
        return 0;
    }

    public function validateAddress(string $address): bool
    {
        try {
            return Util::isAddress($address);
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][EthereumApi][validateAddress]");
        }
        return false;
    }

    public function validateIpn(Request $request)
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
            Logger::error($exception, "[FAILED][EthereumApi][getTransaction]");
        }
        return ['error' => 'No transactions found.'];
    }

    public function gasPrice()
    {
        try {
            $response = $this->call("eth_gasPrice");
            $response->throw();
            if ($response->successful()) {
                return [
                    'error' => 'ok',
                    'result' => $response['result']
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][EthereumApi][gasPrice]");
        }
        return ['error' => 'No transactions found.'];
    }

    public function gasLimit()
    {
        return self::GAS_LIMIT;
    }
}
