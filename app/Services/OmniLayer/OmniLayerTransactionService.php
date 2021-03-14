<?php

namespace App\Services\OmniLayer;

use App\Models\Deposit\WalletDeposit;
use App\Models\Ethereum\EthereumDeposit;
use App\Override\Logger;
use App\Services\Deposit\DepositService;
use Exception;
use Illuminate\Support\Facades\DB;

class OmniLayerTransactionService
{
    private DepositService $depositService;

    public function __construct(DepositService $depositService)
    {
        $this->depositService = $depositService;
    }

    public function deposit($wallet, array $transaction)
    {
        $depositData = [
            'wallet_id' => $wallet->id,
            'address' => $transaction['referenceaddress'],
            'amount' => sprintf('%.8f', $transaction['amount']),
            'txn_id' => $transaction['txid'],
            'symbol' => $wallet->symbol,
            'status' => STATUS_PENDING,
            'type' => TRANSACTION_DEPOSIT,
            'api' => API_OMNI_LAYER,
        ];

        try {
            DB::beginTransaction();
            $this->depositService->deposit($depositData);
            $response = app(API_OMNI_LAYER, [$wallet->symbol])->sendFromAddress(
                $transaction['referenceaddress'],
                $transaction['amount'],
            );
            if (!$response[RESPONSE_STATUS_KEY]) {
                throw new Exception("Failed to transfer amount from user address to system address.");
            }

            EthereumDeposit::create([
                'user_id' => $wallet->user_id,
                'symbol' => $wallet->symbol,
                'receiver_address' => $transaction['referenceaddress'],
                'sender_address' => $transaction['sendingaddress'],
                'system_address' => $wallet->coin->systemWallet->address,
                'txn_id_1' => $transaction['txid'],
                'txn_id_2' => $response[RESPONSE_DATA]['txn_id'],
                'received' => $transaction['amount'],
                'sent' => $transaction['amount'],
                'status' => STATUS_PENDING,
            ]);
            DB::commit();
        } catch (Exception $exception) {
            Logger::error($exception, "[FAILED][OmniLayerTransactionService][deposit]");
            DB::rollBack();
        }
    }

    public function depositConfirm($systemDeposit, array $transaction)
    {
        $deposit = WalletDeposit::query()
            ->where('txn_id', $systemDeposit->txn_id_1)
            ->where('status', STATUS_PENDING)
            ->first();

        if (!empty($deposit)) {
            $depositData = [
                'id' => $deposit->id,
                'wallet_id' => $deposit->wallet_id,
                'address' => $deposit->address,
                'amount' => sprintf('%.8f', $transaction['amount']),
                'txn_id' => $deposit->txn_id,
                'symbol' => $deposit->symbol,
                'status' => STATUS_COMPLETED,
                'type' => TRANSACTION_DEPOSIT,
                'api' => API_OMNI_LAYER,
            ];

            $this->depositService->deposit($depositData);
            $systemDeposit->update(['status' => STATUS_COMPLETED]);
        }
    }
}
