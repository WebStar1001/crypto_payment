<?php

namespace App\Jobs\OmniLayer;

use App\Models\Deposit\WalletDeposit;
use App\Models\Ethereum\EthereumDeposit;
use App\Models\Wallet\Wallet;
use App\Models\Withdrawal\WalletWithdrawal;
use App\Services\OmniLayer\OmniLayerTransactionService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class OmniLayerTransactionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private array $transaction;

    public function __construct(array $transaction)
    {
        $this->transaction = $transaction;
    }


    public function handle(OmniLayerTransactionService $omniLayerTransactionService)
    {
        $wallet = Wallet::query()
            ->where('address', $this->transaction['referenceaddress'])
            ->first();

        if (empty($wallet)) {
            $withdrawal = WalletWithdrawal::query()
                ->where('address', $this->transaction['referenceaddress'])
                ->where('txn_id', $this->transaction['txid'])
                ->where('api', API_OMNI_LAYER)
                ->where('status', STATUS_PENDING)
                ->first();

            if (!empty($withdrawal) && $this->transaction['confirmations'] > 0) {
                $withdrawal->update(['status' => STATUS_COMPLETED]);
            }
        } elseif ($wallet->is_system_wallet) {
            $systemDeposit = EthereumDeposit::query()
                ->where('receiver_address', $this->transaction['sendingaddress'])
                ->where('txn_id_2', $this->transaction['txid'])
                ->where('status', STATUS_PENDING)
                ->first();
            if (!empty($systemDeposit) && $this->transaction['confirmations'] > 0) {
                $omniLayerTransactionService->depositConfirm($systemDeposit, $this->transaction);
            }
        } else {
            $deposit = WalletDeposit::query()
                ->where('txn_id', $this->transaction['txid'])
                ->where('api', API_OMNI_LAYER)
                ->first();

            if (empty($deposit) && $this->transaction['confirmations'] > 0) {
                $omniLayerTransactionService->deposit($wallet, $this->transaction);
            }
        }
    }
}
