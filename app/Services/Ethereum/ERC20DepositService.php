<?php

namespace App\Services\Ethereum;

use App\Models\Coin\Coin;
use App\Models\Ethereum\EthereumDeposit;
use App\Services\Deposit\DepositService;

class ERC20DepositService
{
    private DepositService $depositService;

    public function __construct(DepositService $depositService)
    {
        $this->depositService = $depositService;
    }

    public function sendToSystemWallet(Coin $coin, $wallet, array $transaction)
    {
        $api = app("ERC20Api", [$coin->symbol]);

        $response = $api->sendFromAddress(
            $coin->systemWallet->address,
            $transaction['amount'],
            $transaction['recipient'],
        );

        if ($response[RESPONSE_STATUS_KEY]) {
            EthereumDeposit::create([
                'user_id' => $wallet->user_id,
                'symbol' => $coin->symbol,
                'receiver_address' => $transaction['recipient'],
                'sender_address' => '',
                'system_address' => $coin->systemWallet->address,
                'txn_id_1' => $transaction['txn_id'],
                'txn_id_2' => $response[RESPONSE_DATA]['txn_id'],
                'received' => $transaction['amount'],
                'sent' => $transaction['amount'],
                'status' => STATUS_PENDING,
            ]);
        }
    }
}
