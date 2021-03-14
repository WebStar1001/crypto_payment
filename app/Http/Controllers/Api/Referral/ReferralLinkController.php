<?php

namespace App\Http\Controllers\Api\Referral;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ReferralLinkController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();

        if (is_null($user->referral_code)) {
            $user->update(['referral_code' => Str::random()]);
            $user = $user->fresh();
        }

        return response()->json([
            RESPONSE_TYPE_SUCCESS => true,
            RESPONSE_DATA => [
                'referral_link' =>  route('register.index',['ref' => $user->referral_code ])
            ]
        ]);
    }
}
