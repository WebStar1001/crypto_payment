<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\UserRequest;
use App\Models\BankAccount\BankAccount;
use App\Models\Order\Order;
use App\Models\Wallet\Wallet;
use App\Services\Core\ProfileService;
use App\Services\Wallet\GenerateWalletAddressImage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Services\Core\UserActivityService;
use Illuminate\View\View;

class TransferController extends Controller
{
    private $service;

    public function __construct(ProfileService $service)
    {
        $this->service = $service;
    }

    public function send(): View
    {
        $wallets = Wallet::whereHas('coin', function ($query) {
            $query->where('type', 'crypto');
        })->where('user_id', Auth::id())
            ->orderBy('primary_balance', 'desc')->get();

        $data = $this->service->profile();
        $data['title'] = __('Send & receive coin');
        $data['wallets'] = $wallets;
        return view('wallets.user.send', $data);
    }

    public function receive(Wallet $wallet)
    {
        $data = $this->service->profile();
        $data['wallet'] = $wallet;
        $data['title'] = __('Deposit :coin', ['coin' => $wallet->symbol]);
        $wallets = Wallet::whereHas('coin', function ($query) {
            $query->where('type', 'crypto');
        })->where('user_id', Auth::id())
            ->orderBy('primary_balance', 'desc')->get();
        $data['wallets'] = $wallets;

        if (in_array($wallet->coin->type, [COIN_TYPE_CRYPTO, COIN_TYPE_ERC20])) {
            $api = $wallet->coin->getAssociatedApi();
            if ($wallet->address) {
                $data['walletAddress'] = $wallet->address;
            } else {
                if (is_null($api)) {
                    $data['walletAddress'] = __('Unable to generate address.');
                } else {
                    $response = $api->generateAddress();
                    if ($response['error'] === 'ok') {
                        $params = ['address' => $response['result']['address']];
                        if (isset($response['result']['passphrase'])) {
                            $params['passphrase'] = $response['result']['passphrase'];
                        }
                        $wallet->update($params);
                        $data['walletAddress'] = $response['result']['address'];
                    } else {
                        $data['walletAddress'] = $response['error'];
                    }
                }
            }
            $data['addressSvg'] = app(GenerateWalletAddressImage::class)->generateSvg($data['walletAddress']);
            return view('wallets.user.receive', $data);
        }

        return view('errors.404', $data);
    }

    public function update(UserRequest $request): RedirectResponse
    {
        print_r($request->all());
        exit;
    }
}
