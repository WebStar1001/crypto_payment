<?php

namespace App\Jobs\ERC20;

use App\Models\Coin\Coin;
use App\Override\Api\EthereumClient;
use App\Override\Logger;
use App\Services\Ethereum\Util;
use Brick\Math\BigInteger;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class ProcessERC20Transaction implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, EthereumClient;

    private Coin $coin;
    private Collection $transactions;
    private $api;

    /**
     * Create a new job instance.
     *
     * @param Coin $coin
     * @param Collection $transactions
     */
    public function __construct(Coin $coin, Collection $transactions)
    {
        $this->coin = $coin;
        $this->transactions = $transactions;
        $this->api = app("ERC20Api", [$coin->symbol]);
    }


    public function handle()
    {
        foreach ($this->transactions as $transaction) {
            try {
                $response = $this->api->getTransaction($transaction['hash']);
                if ($response['error'] != 'ok') {
                    continue;
                }

                $status = $this->api->getTransactionStatus($transaction['hash']);
                if (!$status) {
                    continue;
                }

                $result = Util::decodeInput($response['result']['input'], $this->coin->decimal_place);
                if (empty($result)) {
                    continue;
                }

                $gas = hexdec($response['result']['gas']);
                $gasPrice = hexdec($response['result']['gasPrice']);

                $result['txn_id'] = $transaction['hash'];
                $result['status'] = $status;
                $result['contract_address'] = $response['result']['to'];
                $result['from'] = $response['result']['from'];
                $result['network_fee'] = Util::fromWei(
                    BigInteger::of($gas)->multipliedBy($gasPrice)->__toString(),
                    $this->coin->decimal_place
                );

                if ($result['method'] === "approve" && $result['status']) {
                    ERC20ApprovalProcess::dispatch($this->coin, $result);
                } else if (in_array($result['method'], ["transfer", "transferFrom"]) && $result['status']) {
                    ERC20TransactionProcess::dispatch($this->coin, $result);
                }
            } catch (Exception $exception) {
                Logger::error($exception, "[FAILED][ProcessERC20Transaction]");
            }
        }
    }
}
