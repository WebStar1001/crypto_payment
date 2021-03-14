<?php

namespace App\Http\Controllers\Api\Orders;

use App\Http\Controllers\Controller;
use App\Models\Order\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserOrderController extends Controller
{
    public function index()
    {
        $orders = Order::where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'all_orders' => $orders
            ]
        ]);
    }

    public function openOrders($coinPair)
    {
        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'open_orders' => $this->_getUserOpenOrders($coinPair)
            ]
        ]);
    }

    public function _getUserOpenOrders($coinPair)
    {
        return Order::select([
            'id as order_id',
            'price',
            'amount',
            'exchanged',
            DB::raw('TRUNCATE(amount - exchanged,8) as open_amount'),
            DB::raw('TRUNCATE(amount * price,8) as total'),
            'type as order_type',
            'stop_limit',
            'created_at as date'
        ])
            ->where('user_id', auth()->id())
            ->where('trade_pair', $coinPair)
            ->whereIn('category', [ORDER_CATEGORY_LIMIT, ORDER_CATEGORY_STOP_LIMIT])
            ->whereIn('status', [STATUS_PENDING, STATUS_INACTIVE])
            ->latest()
            ->take(MY_OPEN_ORDER_PER_PAGE)
            ->get();
    }
}
