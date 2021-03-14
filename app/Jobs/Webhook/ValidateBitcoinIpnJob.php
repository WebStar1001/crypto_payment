<?php

namespace App\Jobs\Webhook;

use App\Jobs\Deposit\DepositProcessJob;
use App\Jobs\OmniLayer\OmniLayerTransactionJob;
use App\Models\Coin\Coin;
use App\Override\Logger;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ValidateBitcoinIpnJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $data;
    public $currency;

    public function __construct(string $currency, array $data)
    {
        $this->data = $data;
        $this->currency = $currency;
    }

    public function handle()
    {

        $coin = Coin::query()
            ->where('symbol', $this->currency)
            ->first();

        if (empty($coin)) {
            return;
        }
        //Get API
        $api = $coin->getAssociatedApi();
        $transactions = $api->validateIpn($this->data['txn_id']);

        if (!$transactions) {
            return;
        }
        //Validate IPN and process deposit one by one in queue
        if ($coin->api['selected_apis'] === API_BITCOIN) {

            $status = $transactions['confirmations'] ? STATUS_COMPLETED : STATUS_PENDING;

            foreach ($transactions['details'] as $transaction) {
                if ($transaction['category'] === 'receive') {
                    $depositData = [
                        'address' => $transaction['address'],
                        'amount' => sprintf('%.8f', $transaction['amount']),
                        'txn_id' => $transactions['txid'],
                        'symbol' => $this->currency,
                        'status' => $status,
                        'type' => TRANSACTION_DEPOSIT,
                        'api' => API_BITCOIN,
                    ];

                    DepositProcessJob::dispatch($depositData);
                }
            }
        } else if ($coin->api['selected_apis'] === API_OMNI_LAYER) {
            OmniLayerTransactionJob::dispatch($transactions);
        }
    }

    public function failed(Exception $exception)
    {
        Logger::error($exception, "[FAILED][ValidateBitcoinIpnJob]");
    }
}


