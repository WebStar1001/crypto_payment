<?php

namespace App\Http\Controllers\Api\Referral;

use App\Http\Controllers\Controller;
use App\Models\Core\User;
use App\Models\Referral\ReferralEarning;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserReferralController extends Controller
{
    public function index()
    {
        $referralUsers = User::with('profile')
            ->where('referrer_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'referral_users' => $referralUsers
            ]
        ]);
    }

    public function earnedThroughUser(User $user)
    {
        $userReferralEarnings = ReferralEarning::select('symbol', DB::raw("sum(amount) as amount"))
            ->where('referral_user_id', $user->id)
            ->where('referrer_user_id', Auth::id())
            ->with('coin')
            ->groupBy("symbol")
            ->orderBy('amount', 'desc')
            ->paginate();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'earns_through_user' => $userReferralEarnings
            ],
        ]);
    }
}
