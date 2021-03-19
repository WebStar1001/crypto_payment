<?php

namespace App\Http\Controllers\Transfer;

use App\Http\Controllers\Controller;
use App\Models\Transfer\WalletTransfer;
use App\Services\Core\DataTableService;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class SendHistoryController extends Controller
{
    public function __invoke(): View
    {
        $data['title'] = __('Send');

        $searchFields = [
            ['symbol', __('Wallet')],
        ];

        $orderFields = [
            ['created_at', __('Date')],
        ];

        $queryBuilder = WalletTransfer::where('user_id', Auth::id())
            ->orderBy('created_at', 'desc');

        $data['dataTable'] = app(DataTableService::class)
            ->setSearchFields($searchFields)
            ->setOrderFields($orderFields)
            ->create($queryBuilder);
        return view('transfer.user.sendhistory', $data);
    }
}
