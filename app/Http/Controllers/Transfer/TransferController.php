<?php

namespace App\Http\Controllers\Transfer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\UserRequest;
use App\Http\Requests\Withdrawal\WithdrawalRequest;
use App\Models\BankAccount\BankAccount;
use App\Models\Order\Order;
use App\Models\Wallet\Wallet;
use App\Models\Core\User;
use App\Models\Transfer\WalletTransfer;
use App\Override\Logger;
use App\Services\Core\ProfileService;
use App\Services\Wallet\GenerateWalletAddressImage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Services\Core\UserActivityService;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Maatwebsite\Excel\Concerns\WithLimit;

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
            ->where('is_system_wallet', 0)
            ->orderBy('primary_balance', 'desc')->get();

        $data = $this->service->profile();
        $data['title'] = __('Send & receive coin');
        $data['wallets'] = $wallets;
        return view('transfer.user.send', $data);
    }

    public function receive(Wallet $wallet)
    {
        $data = $this->service->profile();
        $data['wallet'] = $wallet;
        $data['title'] = __('Deposit :coin', ['coin' => $wallet->symbol]);
        $wallets = Wallet::whereHas('coin', function ($query) {
            $query->where('type', 'crypto');
        })->where('user_id', Auth::id())
            ->where('is_system_wallet', 0)
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
            return view('transfer.user.receive', $data);
        }

        return view('errors.404', $data);
    }

    public function sendBalance(Request $request)
    {
        $address = $request->get('address');
        $wallet_id = $request->get('wallet_id');
        $amount = $request->get('amount');

        $wallet = Wallet::find($wallet_id);
        if (bccomp($amount, $wallet->primary_balance) > 0) {
            return redirect()
                ->back()
                ->withInput()
                ->with(RESPONSE_TYPE_ERROR, __("You don't have enough balance to send!. Your current balance is :amount", [
                        'amount' => $wallet->primary_balance,
                    ])
                );
        }
        $receiverWalletId = $address;
        if (!filter_var($address, FILTER_VALIDATE_EMAIL)) {

            $receiverWallet = Wallet::where('address', $address)->first();

            if (!$receiverWallet) {
                return redirect()
                    ->back()
                    ->withInput()
                    ->with(RESPONSE_TYPE_ERROR, __("Invalid given address."));
            }
            $receiverWalletId = $receiverWallet->id;
            $receiver_id = $receiverWallet->user_id;
        } else {
            $receiver = User::where('email', $address)->first();

            if (!$receiver) {
                return redirect()
                    ->back()
                    ->withInput()
                    ->with(RESPONSE_TYPE_ERROR, __("None User Email Address."));
            } else {
                $receiverWallet = Wallet::where('user_id', $receiver->id)
                    ->where('symbol', $wallet->symbol)->first();
                if (!$receiverWallet) {
                    return redirect()
                        ->back()
                        ->withInput()
                        ->with(RESPONSE_TYPE_ERROR, __("None Wallet For Receiver."));
                }
                $receiverWalletId = $receiverWallet->id;
                $receiver_id = $receiverWallet->user_id;
            }
        }

        $params = [
            'id' => Str::uuid()->toString(),
            'user_id' => Auth::id(),
            'wallet_id' => $wallet->id,
            'symbol' => $wallet->symbol,
            'receiver_id' => $receiver_id,
            'receiver_wallet_id' => $receiverWalletId,
            'amount' => $request->get('amount'),
            'system_fee' => 0,
            'status' => STATUS_PENDING,
        ];

        DB::beginTransaction();
        try {
            if (!$wallet->decrement('primary_balance', $request->get('amount'))) {
                throw new Exception(__('Failed to update wallet.'));
            }

            if (!$receiverWallet->increment('primary_balance', $request->get('amount'))) {
                throw new Exception(__('Failed to update wallet.'));
            }

            $withdrawal = WalletTransfer::create($params);

            if (empty($withdrawal)) {
                throw new Exception(__('Failed to create withdrawal.'));
            }
        } catch (Exception $exception) {
            DB::rollBack();
            Logger::error($exception, "[FAILED][Transfer][send]");
            return redirect()
                ->back()
                ->withInput()
                ->with(RESPONSE_TYPE_ERROR, __("Unable to transfer amount."));
        }

        DB::commit();

        return redirect()
            ->route('transfer.user.send')
            ->with(RESPONSE_TYPE_SUCCESS, __("Your Transfer has been placed successfully."));
    }
}
