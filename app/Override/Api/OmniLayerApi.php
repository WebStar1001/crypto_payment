<?php

namespace App\Override\Api;

use App\Models\Coin\Coin;
use App\Override\Logger;
use Exception;
use GuzzleHttp\Psr7\Response as GuzzleResponse;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

class OmniLayerApi
{
    private $currency;
    private $scheme;
    private $host;
    private $port;
    private $user;
    private $password;
    private Coin $coin;

    public function __construct($currency)
    {
        $this->currency = $currency;
        $this->loadConfiguration();
    }

    private function loadConfiguration(): void
    {
        $currency = strtolower($this->currency);
        $this->scheme = settings("{$currency}_api_scheme") ?? "";
        $this->host = settings("{$currency}_api_host") ?? "";
        $this->port = settings("{$currency}_api_port") ?? "";
        $this->user = settings("{$currency}_api_rpc_user") ?? "";
        $this->password = settings("{$currency}_api_rpc_password") ?? "";

        $this->coin = Coin::where('symbol', $this->currency)->with('systemWallet')->first();
        if (empty($this->coin)) {
            throw new Exception('Coin not found!');
        }
    }

    public function generateAddress(string $label = ""): array
    {
        try {
            $response = $this->call("getnewaddress", [$label]);
            $response->throw();
            if ($response->successful()) {
                return [
                    'error' => 'ok',
                    'result' => [
                        'address' => $response['result']
                    ],
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][generateAddress]");
        }
        return ['error' => 'Failed to generate address.'];
    }

    private function call(string $method, array $params = []): Response
    {
        try {
            $response = Http::timeout(10)
                ->withBasicAuth($this->user, $this->password)
                ->accept('application/json')
                ->contentType('application/json-rpc')
                ->post($this->getUrl(), [
                    'id' => 1,
                    'jsonrpc' => '2.0',
                    'method' => $method,
                    'params' => $params
                ]);
        } catch (Exception $exception) {
            return new Response(new GuzzleResponse($exception->getCode()));
        }
        return $response;
    }

    private function getUrl(): string
    {
        return $this->scheme . "://" . $this->host . ":" . $this->port;
    }

    public function sendToAddress(string $address, float $amount): array
    {
        try {
            $response = $this->call("omni_send", [
                $this->coin->systemWallet->address,
                $address,
                $this->coin->property_id,
                sprintf("%.8f", $amount),
            ]);
            $response->throw();
            if ($response->successful()) {
                return [
                    RESPONSE_STATUS_KEY => true,
                    RESPONSE_DATA => [
                        'status' => STATUS_COMPLETED,
                        'txn_id' => $response['result'],
                    ]
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][sendToAddress]");
        }
        return [
            RESPONSE_STATUS_KEY => false
        ];
    }

    public function sendFromAddress(string $address, float $amount): array
    {
        try {
            $response = $this->call("omni_funded_send", [
                $address,
                $this->coin->systemWallet->address,
                $this->coin->property_id,
                sprintf("%.8f", $amount),
                $this->coin->systemWallet->address
            ]);
            $response->throw();
            if ($response->successful()) {
                return [
                    RESPONSE_STATUS_KEY => true,
                    RESPONSE_DATA => [
                        'status' => STATUS_COMPLETED,
                        'txn_id' => $response['result'],
                    ]
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][sendFromAddress]");
        }
        return [
            RESPONSE_STATUS_KEY => false
        ];
    }

    public function getBalance(string $wallet = ""): float
    {
        if (empty($wallet)) {
            $wallet = $this->coin->systemWallet->address;
        }
        try {
            $response = $this->call("omni_getbalance", [$wallet, $this->coin->property_id]);
            $response->throw();
            if ($response->successful()) {
                return $response['result']['balance'];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][getBalance]");
        }
        return 0;
    }

    public function validateAddress(string $address): bool
    {
        try {
            $response = $this->call("validateaddress", [$address]);
            $response->throw();
            if ($response->successful()) {
                return $response['result']['isvalid'];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][validateAddress]");
        }
        return false;
    }

    public function validateIpn(string $txnId)
    {
        $response = $this->getTransaction($txnId);
        if ($response['error'] === 'ok') {
            return $response['result'];
        }
        return false;
    }

    public function getTransaction(string $txnId): array
    {
        try {
            $response = $this->call("omni_gettransaction", [$txnId]);
            $response->throw();
            if ($response->successful()) {
                return [
                    'error' => 'ok',
                    'result' => $response['result']
                ];
            }
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][getTransaction]");
        }
        return ['error' => 'No transactions found.'];
    }

    public function getStatus()
    {
        try {
            $response = $this->call("getnetworkinfo");
            $response->throw();
            if ($response->successful()) {
                $result = [
                    'status' => is_null($response['error']),
                    'version' => $response['result']['version']
                ];
            }

            $response = $this->call("getblockchaininfo");
            $response->throw();
            if ($response->successful() && isset($response['result']['chain'])) {
                $result['network'] = ucfirst($response['result']['chain']);
            }
            return $result;

        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerApi][getStatus]");
        }
        return [
            'status' => false,
            'version' => '',
            'network' => '',
        ];
    }
}
