<?php

namespace App\Http\Controllers\Api\TradeHistory;

use App\Http\Controllers\Controller;
use App\Models\Exchange\Exchange;
use Illuminate\Support\Facades\Auth;

class UserTradeHistoryController extends Controller
{
    public function __invoke()
    {
        $tradeHistory = Exchange::where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'trade_history' => $tradeHistory
            ],
        ]);
    }
}
