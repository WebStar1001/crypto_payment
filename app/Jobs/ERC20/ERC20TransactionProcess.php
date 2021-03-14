<?php

namespace App\Jobs\ERC20;

use App\Models\Coin\Coin;
use App\Models\Deposit\WalletDeposit;
use App\Models\Ethereum\EthereumDeposit;
use App\Models\Wallet\Wallet;
use App\Models\Withdrawal\WalletWithdrawal;
use App\Services\Deposit\DepositService;
use App\Services\Ethereum\ERC20DepositService;
use App\Services\Ethereum\Util;
use Brick\Math\BigInteger;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ERC20TransactionProcess implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Coin $coin;
    private array $transaction;
    private $api;

    public function __construct(Coin $coin, array $transaction)
    {
        $this->coin = $coin;
        $this->transaction = $transaction;
        $this->api = app("ERC20Api", [$coin->symbol]);
    }

    public function handle(DepositService $depositService)
    {
        $wallet = Wallet::query()
            ->where('address', $this->transaction['recipient'])
            ->where('is_system_wallet', INACTIVE)
            ->first();

        if (empty($wallet)) {
            $wallet = Wallet::query()
                ->where('address', $this->transaction['from'])
                ->where('is_system_wallet', ACTIVE)
                ->first();
            if (empty($wallet)) {
                return;
            }

            if ($this->transaction['method'] === "transfer") {
                $withdrawal = WalletWithdrawal::query()
                    ->where('txn_id', $this->transaction['txn_id'])
                    ->where('api', API_ERC20)
                    ->where('status', STATUS_PENDING)
                    ->first();

                if (!empty($withdrawal)) {
                    $withdrawal->update(['status' => STATUS_COMPLETED]);
                }
            } else {
                $deposit = WalletDeposit::query()
                    ->where('address', $this->transaction['sender'])
                    ->where('api', API_ERC20)
                    ->where('status', STATUS_PENDING)
                    ->first();

                if (!empty($deposit)) {
                    $depositData = [
                        'id' => $deposit->id,
                        'wallet_id' => $deposit->wallet_id,
                        'symbol' => $deposit->symbol,
                        'address' => $deposit->address,
                        'txn_id' => $deposit->txn_id,
                        'amount' => $this->transaction['amount'],
                        'type' => TRANSACTION_DEPOSIT,
                        'status' => STATUS_COMPLETED,
                        'api' => API_ERC20,
                    ];
                    $depositService->deposit($depositData);

                    $ethereumDeposit = EthereumDeposit::query()
                        ->where('txn_id_1', $deposit->txn_id)
                        ->where('status', STATUS_PENDING)
                        ->first();

                    if (!empty($ethereumDeposit)) {
                        $ethereumDeposit->update([
                            'status' => STATUS_COMPLETED,
                            'network_fee' => $this->transaction['network_fee']
                        ]);
                    }
                }
            }

        } else {
            $deposit = WalletDeposit::query()
                ->where('txn_id', $this->transaction['txn_id'])
                ->where('api', API_ERC20)
                ->first();

            if (empty($deposit)) {
                $depositData = [
                    'wallet_id' => $wallet->id,
                    'symbol' => $wallet->symbol,
                    'address' => $this->transaction['recipient'],
                    'amount' => $this->transaction['amount'],
                    'txn_id' => $this->transaction['txn_id'],
                    'type' => TRANSACTION_DEPOSIT,
                    'status' => STATUS_WAITING,
                    'api' => API_ERC20,
                ];
                $depositService->deposit($depositData);
                $this->sendToSystemWallet($wallet);
            } else {
                $ethereumDeposit = EthereumDeposit::query()
                    ->where('txn_id_1', $this->transaction['txn_id'])
                    ->where('status', STATUS_PENDING)
                    ->first();

                if (empty($ethereumDeposit)) {
                    $this->sendToSystemWallet($wallet);
                }
            }
        }
    }

    private function sendToSystemWallet($wallet)
    {
        $allowance = $this->api->allowance($this->transaction['recipient']);

        if (bccomp($allowance, $this->transaction['amount']) < 0) {
            $balance = $this->api->getETHBalance($wallet->address);
            $response = $this->api->gasPrice();
            if ($response['error'] === 'ok') {
                $gasLimit = $this->api->gasLimit();
                $gasPrice = $response['result'];
                $networkFee = Util::fromWei(
                    BigInteger::of($gasPrice)->multipliedBy($gasLimit)->__toString(),
                    $this->coin->decimal_place
                );

                if (bccomp($balance, $networkFee) < 0) {
                    $this->api->sendETHToAddress($wallet->address, $networkFee);
                } else {
                    $this->api->approve(bcpow(10, 12), $wallet->address, $wallet->passphrase);
                }
            }
        } else {
            $ERC20DepositService = app(ERC20DepositService::class);
            $ERC20DepositService->sendToSystemWallet($this->coin, $wallet, $this->transaction);
        }
    }
}
