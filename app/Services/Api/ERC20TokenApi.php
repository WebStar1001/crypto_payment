<?php

namespace App\Services\Api;

use App\Repositories\User\Admin\Interfaces\StockItemInterface;
use App\Repositories\User\Trader\Eloquent\WalletRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Larathereum\Facades\Util;
use Larathereum\Types\Address;
use Larathereum\Types\Transaction;

class ERC20TokenApi extends EthereumApi
{
    protected $systemEthereum;

    public function __construct()
    {
        @parent::__construct();
        $this->systemEthereum = app(StockItemInterface::class)->getSystemEthereum();
    }

    public function sendToAddress($address, $amount)
    {
        try {
            if (empty($this->systemEthereum)) {
                throw new Exception('Ethereum coin could not found in this system.');
            }

            if (empty($this->stockItem)) {
                throw new Exception('Set stock item before call this method.');
            }

            if (empty($this->stockItem->token)) {
                throw new Exception('Stock item token_id cannot be null.');
            }

            $token = $this->stockItem->token;
            $networkFee = $this->stockItem->delegate_fee;
            $transferAmount = bcsub($amount, $networkFee);

            $networkFee = Util::toWei($networkFee, 'ether');
            $transferAmount = Util::toWei($transferAmount, 'ether');

            $contract = $response2 = $this->client->contract()->abi($token->abi)->at($token->contract_address);
            $nonce = $contract->call('getNextNonce', $this->stockItem->systemWallet->address)->toString();
            $hash = $contract->call('signedTransferHash', $this->stockItem->systemWallet->address, $address, $transferAmount, $networkFee, $nonce);
            $sig = $this->client->personal()->sign($hash, new Address($this->stockItem->systemWallet->address), $this->stockItem->systemWallet->passphrase);
            $transaction = new Transaction(
                new Address($this->systemEthereum->systemWallet->address),
                null,
                null,
                $this->stockItem->minimum_gas_limit
            );

            $response = $contract->send('signedTransfer', $this->stockItem->systemWallet->address, $address, $transferAmount, $networkFee, $nonce, $sig, $this->stockItem->systemWallet->address, $transaction, $this->systemEthereum->systemWallet->passphrase);

            if ($response) {
                return [
                    'error' => 'ok',
                    'result' => [
                        'txn_id' => $response->toString(),
                        'network_fee' => $this->stockItem->delegate_fee
                    ],
                ];
            }

        } catch (Exception $exception) {
            return ['error' => $exception->getMessage()];
        }

        return ['error' => 'Failed to send.'];
    }

    public function moveToSystemAddress($address, $amount, $networkFee, $passphrase)
    {
        try {
            if (empty($this->systemEthereum)) {
                throw new Exception('Ethereum coin could not found in this system.');
            }

            if (empty($this->stockItem)) {
                throw new Exception('Set stock item before call this method.');
            }

            if (empty($this->stockItem->token)) {
                throw new Exception('Stock item token_id cannot be null.');
            }

            $token = $this->stockItem->token;
            $fee = Util::toWei($networkFee, 'ether');
            $transferAmount = Util::toWei($amount, 'ether');
            $contract = $response2 = $this->client->contract()->abi($token->abi)->at($token->contract_address);
            $nonce = $contract->call('getNextNonce', $address)->toString();
            $hash = $contract->call('signedTransferHash', $address, $this->stockItem->systemWallet->address, $transferAmount, $fee, $nonce);
            $sig = $this->client->personal()->sign($hash, new Address($address), $passphrase);
            $transaction = new Transaction(
                new Address($this->systemEthereum->systemWallet->address),
                null,
                null,
                $this->stockItem->minimum_gas_limit
            );

            $response = $contract->send('signedTransfer', $address, $this->stockItem->systemWallet->address, $transferAmount, $fee, $nonce, $sig, $this->stockItem->systemWallet->address, $transaction, $this->systemEthereum->systemWallet->passphrase);
            if (!empty($response)) {
                return ['tx_id' => $response->toString()];
            }
        } catch (Exception $exception) {
            return ['error' => $exception->getMessage()];
        }

        return ['error' => 'Failed to send.'];
    }
}