<?php

namespace App\Http\Controllers\Deposit;

use App\Http\Controllers\Controller;
use App\Models\Deposit\WalletDeposit;
use App\Models\Ethereum\EthereumDeposit;
use App\Models\Wallet\Wallet;
use App\Services\Core\DataTableService;
use Illuminate\Support\Facades\Auth;

class AdminEthereumDepositHistoryController extends Controller
{
    public function index()
    {
        $data['title'] = __('Ethereum Deposit Histories');

        $data['userId'] = Auth::id();

        $searchFields = [
            ['email', __('Email'), 'user'],
            ['symbol', __('Wallet')],
            ['receiver_address', __('Address')],
            ['txn_id_1', __('Txn ID')],
        ];

        $orderFields = [
            ['symbol', __('Wallet')],
            ['received', __('Amount')],
            ['created_at', __('Date')],
        ];

        $filterFields = [
            ['status', __("Status"), ethereum_deposit_status()],
        ];

        $downloadableHeadings = [
            ['created_at', __("Date")],
            ['email', __("Email"), 'user'],
            ['symbol', __("Wallet")],
            ['receiver_address', __("Receiver Address")],
            ['sender_address', __("Sender Address")],
            ['system_address', __("System Address")],
            ['txn_id_1', __("Transaction ID 1")],
            ['txn_id_2', __("Transaction ID 2")],
            ['received', __("Received Amount")],
            ['sent', __("Receivable Amount")],
            ['system_fee', __("Fee")],
            ['status', __("Status")],
        ];


        $queryBuilder = EthereumDeposit::with("user")
            ->orderBy('created_at');

        $data['dataTable'] = app(DataTableService::class)
            ->setSearchFields($searchFields)
            ->setOrderFields($orderFields)
            ->setFilterFields($filterFields)
            ->downloadable($downloadableHeadings)
            ->create($queryBuilder);

        return view('deposit.admin.ethereum-history.index', $data);
    }

    public function show(EthereumDeposit $ethereumDeposit)
    {
        $data['wallet'] = Wallet::query()
            ->where('symbol', $ethereumDeposit->symbol)
            ->where('user_id', $ethereumDeposit->user_id)
            ->withoutSystemWallet()
            ->firstOrFail();

        $data['deposit'] = WalletDeposit::query()
            ->where('user_id', $ethereumDeposit->user_id)
            ->where('symbol', $ethereumDeposit->symbol)
            ->where('address', $ethereumDeposit->receiver_address)
            ->where('txn_id', $ethereumDeposit->txn_id_1)
            ->firstOrFail();

        $data['ethereumDeposit'] = $ethereumDeposit;
        $data['title'] = __("Ethereum Deposit Details");
        return view('deposit.admin.ethereum-history.show', $data);
    }

}
