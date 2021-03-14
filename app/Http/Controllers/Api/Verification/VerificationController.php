<?php

namespace App\Http\Controllers\Api\Verification;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\EmailVerificationRequest;
use App\Http\Requests\Core\PasswordResetRequest;
use App\Models\Core\Notification;
use App\Models\Core\User;
use App\Services\Core\VerificationService;
use Illuminate\Support\Facades\Hash;

class VerificationController extends Controller
{
    public function verify(EmailVerificationRequest $request)
    {
        if( !Hash::check($request->verification_code, $request->verifier_hash_code) ) {
            return response()->json([
                RESPONSE_STATUS_KEY => false,
                RESPONSE_MESSAGE_KEY => __('The verifier has code is invalid.'),
            ]);
        }

        $user = User::where('email', $request->email)
            ->where('is_email_verified', UNVERIFIED)
            ->first();

        $update = ['is_email_verified' => VERIFIED];

        if ($user && $user->update($update)) {
            $notification = ['user_id' => $request->user_id, 'message' => __("Your account has been verified successfully.")];
            Notification::create($notification);

            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __('Your account has been verified successfully.'),
            ]);
        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __('Invalid verification link or already verified.'),
        ]);
    }

    public function send(PasswordResetRequest $request)
    {
        $response = app(VerificationService::class)->sendVerificationLink($request);

        return response()->json($response);
    }
}
