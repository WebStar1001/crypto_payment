<?php

namespace App\Services\Api;

use Exception;
use GuzzleHttp\Client;


class EthereumApi
{
    public $client;
    public $stockItem;

    public function __construct()
    {
        $url = settings('eth_url', true);
        $url = $url ? : '127.0.0.1:8545';
        $this->client = new Ethereum($url);
    }

    public function setStockItem(StockItem $stockItem)
    {
        $this->stockItem = $stockItem;
        return $this;
    }


    public function generateAddress()
    {
        try {
            $passphrase = random_string(6);
            $address = $this->client->personal()->newAccount($passphrase);
            if ($address) {
                return [
                    'error' => 'ok',
                    'result' => [
                        'address' => $address->toString(),
                        'passphrase' => $passphrase
                    ],
                ];
            }
        } catch (Exception $exception) {
            logs()->error($exception->getMessage());
        }
        return ['error' => 'Failed to generate address.'];
    }

    public function getTransactionDetailsByHash($txid)
    {
        $response = [];
        $currentBlockNumber = $this->getBlockNumber();
        $transaction = $this->getTxnInfoByTxnId($txid);
        $status = $this->getTransactionStatusByHash($txid);

        if (!empty($transaction)) {
            $amount = $transaction->value()->amount();
            $receipt = $this->getTransactionReceiptByTxnId($txid);
            $response = [
                'sender_address' => $transaction->from()->toString(),
                'receiver_address' => $transaction->to()->toString(),
                'contract_address' => $transaction->contractAddress() ? $transaction->contractAddress()->toString() : null,
                'transaction_hash' => $txid,
                'block_number' => $transaction->blockNumber(),
                'confirmation' => (int)($currentBlockNumber - $transaction->blockNumber()),
                'value' => Util::toEther($amount),
                'status' => (int)$status
            ];
        }

        return $response;
    }

    public function getBlockNumber()
    {
        return $this->client->eth()->blockNumber();
    }

    public function getTxnInfoByTxnId($txid)
    {
        return $this->client->eth()->getTransactionByHash(new TransactionHash($txid));
    }

    public function getTransactionStatusByHash($txnid)
    {
        $params = [
            'query' => [
                'module' => 'transactions',
                'action' => 'getstatus',
                'txhash' => $txnid,
                'apikey' => settings('etherscan_api_key')
            ]
        ];
        $client = new Client();
        $response = $client->request('GET', get_etherscan_api_url(settings('etherscan_network')), $params);

        $response = json_decode($response->getBody()->getContents());
        if ($response->status && !$response->result->isError) {
            return true;
        }
        return false;
    }

    public function getTransactionReceiptByTxnId($txid)
    {
        return $this->client->eth()->getTransactionReceipt(new TransactionHash($txid));
    }

    public function getTxnList($limit)
    {
        return null;
    }

    public function sendToAddress($address, $amount)
    {
        try {
            if (empty($this->stockItem)) {
                throw new Exception('Set stock item before call this method.');
            }
            $nodeBalance = $this->client->eth()->getBalance(new Address($this->stockItem->systemWallet->address), new BlockNumber())->toEther();

            if (bccomp($nodeBalance, $amount) < 0) {
                throw new Exception('Insufficient balance to send.');
            }

            if ($this->stockItem->systemWallet->address && $this->stockItem->systemWallet->passphrase) {
                $gasPrice = $this->client->eth()->gasPrice()->amount();
                $networkFee = Util::toEther(bcmul($this->stockItem->minimum_gas_limit, $gasPrice, 0), 18);
                $transferAmount = bcsub($amount, $networkFee);

                $transaction = new Transaction(
                    new Address($this->stockItem->systemWallet->address),
                    new Address($address),
                    null,
                    $this->stockItem->minimum_gas_limit,
                    $gasPrice,
                    Util::toWei($transferAmount, 'ether')
                );
                $response = $this->client->personal()->sendTransaction($transaction, $this->stockItem->systemWallet->passphrase);

                if ($response) {
                    return [
                        'error' => 'ok',
                        'result' => [
                            'txn_id' => $response->toString(),
                            'network_fee' => $networkFee
                        ],
                    ];
                }
            }
        } catch (Exception $exception) {
            return ['error' => $exception->getMessage()];
        }
        return ['error' => 'Failed to send.'];

    }

    public function validateIPN($post_data, $server_data)
    {
        return null;
    }

    public function getBlockByNumber($number)
    {
        return $this->client->eth()->getBlockByNumber(new BlockNumber($number), true);
    }

    public function getGasPrice()
    {
        return $this->client->eth()->gasPrice()->amount();
    }

    public function moveToSystemAddress($address, $amount, $networkFee, $passphrase)
    {
        if (empty($this->stockItem)) {
            return ['error' => 'Set stock item before call this method.'];
        }

        $transaction = new Transaction(
            new Address($address),
            new Address($this->stockItem->systemWallet->address),
            null,
            $this->stockItem->minimum_gas_limit,
            null,
            Util::toWei($amount, 'ether')
        );

        $response = $this->client->personal()->sendTransaction($transaction, $passphrase);

        if (!empty($response)) {
            return ['tx_id' => $response->toString()];
        }

        return ['error' => 'Failed to send.'];
    }

    public function getTxnInfoByAddress($address)
    {
        return null;
    }
}
