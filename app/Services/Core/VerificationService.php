<?php

namespace App\Services\Core;

use App\Http\Requests\Core\PasswordResetRequest;
use App\Mail\Core\Registered;
use App\Models\Core\Notification;
use App\Models\Core\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class VerificationService
{
    public function verifyUserEmail(Request $request): array
    {
        if (!$request->hasValidSignature()) {
            return [
                RESPONSE_STATUS_KEY => false,
                RESPONSE_MESSAGE_KEY => __('Expired verification link.'),
            ];
        }

        $user = User::where('id', $request->user_id)
            ->where('is_email_verified', UNVERIFIED)
            ->first();

        $update = ['is_email_verified' => VERIFIED];

        if ($user && $user->update($update)) {
            $notification = ['user_id' => $request->user_id, 'message' => __("Your account has been verified successfully.")];
            Notification::create($notification);

            return [
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __('Your account has been verified successfully.'),
            ];
        }

        return [
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __('Invalid verification link or already verified.'),
        ];
    }

    public function sendVerificationLink(PasswordResetRequest $request)
    {
        if (Auth::check()) {
            if (!Auth::user()->is_email_verified) {
                $user = Auth::user();
            } else {
                $user = false;
            }
        } else {
            $user = User::where(['email' => $request->email, 'is_email_verified' => INACTIVE])->first();
        }

        if (!$user) {
            return [
                RESPONSE_STATUS_KEY => false,
                RESPONSE_MESSAGE_KEY => __('The given email address is already verified.')
            ];
        }

        // send email address.
        $verificationCode = $request->is('api/*') ? mt_rand(100000, 999999) : null;
        $this->_sendEmailVerificationLink($user, $request->is('api/*'), $verificationCode);

        $response = [
            RESPONSE_STATUS_KEY => true,
            RESPONSE_MESSAGE_KEY => __('Email verification link is sent successfully.'),
        ];

        if( $request->is('api/*') ) {
            $response[RESPONSE_DATA] = [
                'verifier_hash_code' => Hash::make($verificationCode),
                'email' => $user->email
            ];
        }

        return $response;
    }

    public function _sendEmailVerificationLink($user, $isApi=false, $verificationCode=null)
    {

        return Mail::to($user->email)
            ->send(new Registered($user->profile, $isApi, $verificationCode));
    }
}
