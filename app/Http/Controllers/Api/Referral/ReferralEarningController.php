<?php

namespace App\Http\Controllers\Api\Referral;

use App\Http\Controllers\Controller;
use App\Models\Referral\ReferralEarning;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReferralEarningController extends Controller
{
    public function __invoke()
    {
        $referralEarnings = ReferralEarning::select('symbol', DB::raw("sum(amount) as amount"))
            ->addSelect(['last_earning_at' => ReferralEarning::from('referral_earnings as r')
                ->select('created_at')
                ->where('r.referrer_user_id', Auth::id())
                ->whereColumn('r.symbol', 'referral_earnings.symbol')
                ->latest('r.created_at')
                ->limit(1)
            ])
            ->where('referrer_user_id', Auth::id())
            ->with('coin', 'referralUser')
            ->groupBy(["symbol"])
            ->orderBy('amount', 'desc')
            ->paginate();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'referral_earnings' => $referralEarnings
            ],
        ]);
    }
}
