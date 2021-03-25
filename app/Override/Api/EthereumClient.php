<?php


namespace App\Override\Api;


use App\Override\Logger;
use Exception;
use GuzzleHttp\Psr7\Response as GuzzleResponse;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

trait EthereumClient
{
    private function call(string $method, array $params = []): Response
    {
        try {
            $response = Http::timeout(10)
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

    public function getStatus(): array
    {
        try {
            $response = $this->call("web3_clientVersion");
            $response->throw();
            if ($response->successful()) {
                $result =  [
                    'status' => isset($response['result']),
                    'version' => $response['result']
                ];
            }

            $response = $this->call("net_version");
            $response->throw();
            if ($response->successful() && isset($response['result'])) {
                $result['network'] = $response['result'] == '1' ? 'Mainnet' : 'Testnet';
            }

            return  $result;

        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][CoinpaymentsApi][getStatus]");
        }
        return [
            'status' => false,
            'version' => '',
            'network' => ''
        ];
    }

    private function getUrl(): string
    {
        $url = parse_url($this->url);
        if (!isset($url['scheme'])) {
            $this->url = 'http://' . $this->url;
        }
        return $this->url;
    }
}
