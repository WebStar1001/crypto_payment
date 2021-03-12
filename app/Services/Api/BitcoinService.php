<?php

namespace App\Services\Api;

use App\Models\Wallet\Wallet;
use App\Override\Api\BitcoinForkedApi;

class BitcoinService
{
    protected $client;
    protected $wallet;

    public function __construct(BitcoinForkedApi $client, Wallet $wallet)
    {
        $this->wallet = $wallet;
        $this->client = $client;
    }

    public function generateAddress()
    {
        if (is_null($this->wallet->address)) {
            $response = $this->client->generateAddress();

            if ($response['error'] === 'ok') {
                $this->wallet->update(['address' => $response['result']['address']]);
            }
        } else {
            $response = [
                'error' => 'ok',
                'result' => [
                    'address' => $this->wallet->address
                ]
            ];
        }
        return $response;
    }

    public function validateAddress(string $address): bool
    {
        return $this->client->validateAddress($address);
    }

    public function withdraw($withdrawal)
    {
        return $this->client->sendToAddress($withdrawal->address, $withdrawal->amount);
    }
}
