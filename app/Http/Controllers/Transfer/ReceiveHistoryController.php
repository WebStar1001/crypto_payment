<?php

namespace App\Http\Controllers\Transfer;

use App\Http\Controllers\Controller;
use App\Models\Transfer\WalletTransfer;
use App\Services\Core\DataTableService;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class ReceiveHistoryController extends Controller
{
    public function __invoke(): View
    {
        $data['title'] = __('Receive');

        $searchFields = [
            ['symbol', __('Wallet')],
        ];

        $orderFields = [
            ['created_at', __('Date')],
        ];

        $queryBuilder = WalletTransfer::where('receiver_id', Auth::id())
            ->orderBy('created_at', 'desc');

        $data['dataTable'] = app(DataTableService::class)
            ->setSearchFields($searchFields)
            ->setOrderFields($orderFields)
            ->create($queryBuilder);
        return view('transfer.user.receivehistory', $data);
    }
}
