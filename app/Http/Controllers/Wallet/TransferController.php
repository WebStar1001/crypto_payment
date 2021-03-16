<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\UserRequest;
use App\Models\Order\Order;
use App\Models\Wallet\Wallet;
use App\Services\Core\ProfileService;
use Illuminate\Http\RedirectResponse;
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

    public function index(): View
    {
        $wallets = Wallet::with('coin:symbol,name,icon')
            ->withOnOrderBalance()
            ->where('user_id', Auth::id())
            ->withoutSystemWallet()
            ->orderBy('primary_balance', 'desc')->get();

        $data = $this->service->profile();
        $data['title'] = __('Send & receive coin');
        $data['wallets'] = $wallets;
        return view('wallets.user.transfer', $data);
    }

    public function update(UserRequest $request): RedirectResponse
    {
        print_r($request->all());
    }
}
