<?php

namespace App\Console\Commands;

use Amp\Loop;
use Amp\Websocket;
use App\Jobs\Ethereum\EthereumBlockJob;
use App\Services\Logger\Logger;
use Illuminate\Console\Command;

class EthereumWebSocket extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ethereum:websocket';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ethereum websocket';

    public function handle()
    {
        $this->info('Ethereum websocket started.');
        Loop::run(function () {
            $connection = yield Websocket\Client\connect(settings('ethereum_websocket_url'));
            yield $connection->send('{"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["newHeads"]}');
            Logger::error('sent', "[FAILED][ProcessLimitOrderService][process]");
            while ($message = yield $connection->receive()) {
                Logger::error('Received', "[FAILED][ProcessLimitOrderService][process]");
                $payload = yield $message->buffer();
                $response = json_decode($payload, true);

                if (isset($response['params']['result']['hash'])) {
                    EthereumBlockJob::dispatch($response['params']['result']['hash']);
                }
            }
        });
        $this->info('Ethereum websocket stopped.');
    }
}
