<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Models\Order\Order;
use App\Models\Wallet\Wallet;
use App\Services\Core\DataTableService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class UserWalletController extends Controller
{

    public function index(): View
    {
        $searchFields = [
            ['symbol', __('Wallet'),],
            ['name', __('Wallet Name'), 'coin'],
        ];

        $orderFields = [
            ['symbol', __('Wallet')],
            ['name', __('Wallet Name'), 'coin'],
            ['primary_balance', __('Primary Balance')],
        ];

        $filterFields = [
            ['primary_balance', __('Balance'), 'preset', null,
                [
                    [__('Hide 0(zero) balance'), '>', 0],
                ]
            ],
        ];


        $queryBuilder = Wallet::with('coin:symbol,name,icon')
            ->withOnOrderBalance()
            ->where('user_id', Auth::id())
            ->withoutSystemWallet()
            ->orderBy('primary_balance', 'desc');

        $data['dataTable'] = app(DataTableService::class)
            ->setSearchFields($searchFields)
            ->setOrderFields($orderFields)
            ->setFilterFields($filterFields)
            ->create($queryBuilder);

        $data['title'] = __('My Wallet');
        return view('wallets.user.index', $data);
    }
    public function withdraw_deposit_history(Wallet $wallet): View
    {
        $searchFields1 = [
            ['id', __('Reference ID')],
            ['amount', __('Amount')],
            ['address', __('Address')],
            ['bank_name', __('Bank'), 'bankAccount'],
            ['txn_id', __('Transaction ID')],
            ['symbol', __('Wallet')],
        ];

        $orderFields1 = [
            ['amount', __('Amount')],
            ['address', __('Address')],
            ['symbol', __('Wallet')],
            ['created_at', __('Date')],
        ];

        $filterFields1 = [
            ['status', __('Status'), transaction_status()],
        ];

        $queryBuilder1 = $wallet->deposits()
            ->with("bankAccount")
            ->orderBy('created_at', 'desc');

        $data['dataTable1'] = app(DataTableService::class)
            ->setSearchFields($searchFields1)
            ->setOrderFields($orderFields1)
            ->setFilterFields($filterFields1)
            ->create($queryBuilder1);

        $data['title'] = __("Deposit & Withdraw History");

        $searchFields2 = [
            ['id', __('Reference ID')],
            ['amount', __('Amount')],
            ['address', __('Address')],
            ['bank_name', __('Bank'), 'bankAccount'],
            ['txn_id', __('Transaction ID')],
            ['symbol', __('Wallet')],
        ];

        $orderFields2 = [
            ['id', __('Reference ID')],
            ['created_at', __('Date')],
        ];

        $filterFields2 = [
            ['status', __('Status'), transaction_status()],
        ];

        $queryBuilder2 = $wallet->withdrawals()
            ->with("bankAccount")
            ->orderBy('created_at', 'desc');

        $data['dataTable2'] = app(DataTableService::class)
            ->setSearchFields($searchFields2)
            ->setOrderFields($orderFields2)
            ->setFilterFields($filterFields2)
            ->create($queryBuilder2);

        $data['wallet'] = $wallet;

        return view('wallets.user.deposit_withdraw', $data);
    }
}
