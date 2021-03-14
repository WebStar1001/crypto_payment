<?php


namespace App\Services\Ethereum;


use App\Models\Ethereum\EthereumDeposit;
use App\Models\Wallet\Wallet;
use App\Services\Deposit\DepositService;
use App\Services\Logger\Logger;
use Exception;
use Illuminate\Support\Facades\DB;

class EthereumDepositService
{
    private DepositService $depositService;

    public function __construct(DepositService $depositService)
    {
        $this->depositService = $depositService;
    }

    public function confirmed(Wallet $wallet, array $transaction)
    {
        $ethereumDeposit = EthereumDeposit::where('txn_id_2', $transaction['hash'])->first();
        if (empty($ethereumDeposit) || $ethereumDeposit->status != STATUS_PENDING) {
            return;
        }

        DB::beginTransaction();
        try {

            $ethereumDeposit->update(['status' => STATUS_COMPLETED]);

            $params = [
                'symbol' => $wallet->symbol,
                'amount' => Util::fromWei($transaction['value']),
                'address' => $ethereumDeposit->receiver_address,
                'txn_id' => $ethereumDeposit->txn_id_1,
                'type' => TRANSACTION_DEPOSIT,
                'api' => API_ETHEREUM,
                'status' => STATUS_COMPLETED,
            ];

            $this->depositService->deposit($params);

        } catch (Exception $exception) {
            DB::rollBack();
            Logger::error($exception, "[FAILED][EthereumDepositService][confirmed]");
        }

        DB::commit();
    }

    public function sendToSystemWallet(Wallet $wallet, array $transaction)
    {
        $systemWallet = Wallet::where('symbol', $wallet->symbol)->systemWallet()->first();

        if (empty($systemWallet)) {
            return;
        }

        $ethereumDeposit = EthereumDeposit::where('txn_id_1', $transaction['hash'])->exists();

        if ($ethereumDeposit) {
            return;
        }

        $api = app(API_ETHEREUM, [$wallet->symbol]);
        $response = $api->gasPrice();

        if ($response['error'] != 'ok') {
            return;
        }

        $gasPrice = hexdec($response['result']);
        $networkFee = bcmul($gasPrice, $api->gasLimit(), 0);
        $amountToBeSend = Util::fromWei(bcsub(hexdec($transaction['value']), $networkFee, 0));

        if (bccomp($amountToBeSend, '0') < 0) {
            return;
        }

        $response = $api->sendToAddress($systemWallet->address, $amountToBeSend, $wallet->address, $wallet->passphrase, $gasPrice, $api->gasLimit());

        $status = STATUS_PENDING;
        $txnId2 = null;

        if ($response[RESPONSE_STATUS_KEY]) {
            $status = $response[RESPONSE_DATA]['status'];
            $txnId2 = $response[RESPONSE_DATA]['txn_id'];
        }

        DB::beginTransaction();
        try {
            EthereumDeposit::create([
                'user_id' => $wallet->user_id,
                'symbol' => $wallet->symbol,
                'receiver_address' => $transaction['to'],
                'sender_address' => $transaction['from'],
                'system_address' => $systemWallet->address,
                'txn_id_1' => $transaction['hash'],
                'txn_id_2' => $txnId2,
                'received' => Util::fromWei($transaction['value']),
                'sent' => $amountToBeSend,
                'network_fee' => Util::fromWei($networkFee),
                'status' => $status,
            ]);

            $params = [
                'symbol' => $wallet->symbol,
                'amount' => $amountToBeSend,
                'address' => $transaction['to'],
                'txn_id' => $transaction['hash'],
                'type' => TRANSACTION_DEPOSIT,
                'api' => API_ETHEREUM,
                'status' => STATUS_PENDING,
            ];

            $this->depositService->deposit($params);

        } catch (Exception $exception) {
            DB::rollBack();
            Logger::error($exception, "[FAILED][EthereumDepositService][sendToSystemWallet]");
        }
        DB::commit();
    }
}
