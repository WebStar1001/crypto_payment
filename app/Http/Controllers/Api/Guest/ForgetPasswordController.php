<?php

namespace App\Http\Controllers\Api\Guest;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\NewPasswordRequest;
use App\Http\Requests\Core\PasswordResetRequest;
use App\Mail\Core\ResetPassword;
use App\Models\Core\Notification;
use App\Models\Core\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ForgetPasswordController extends Controller
{
    public function index(PasswordResetRequest $request): JsonResponse
    {
        $conditions = [
            'email' => $request->email,
            ['status', '!=', STATUS_DELETED]
        ];
        $user = User::where($conditions)->first();

        if (!$user) {
            return response()->json([
                RESPONSE_STATUS_KEY => false,
                RESPONSE_MESSAGE_KEY => __("Failed! Your account is deleted by admin."),
            ]);
        }

        $verificationCode = $request->is('api/*') ? mt_rand(100000, 999999) : null;

        Mail::to($user->email)->send(new ResetPassword($user, true, $verificationCode));

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_MESSAGE_KEY => __("Password reset link is sent to your email address."),
            RESPONSE_DATA => [
                'verifier_hash_code' => Hash::make($verificationCode),
            ]
        ]);
    }

    public function update(NewPasswordRequest $request): JsonResponse
    {
        if( !Hash::check($request->verification_code, $request->verifier_hash_code) ) {
            return response()->json([
                RESPONSE_STATUS_KEY => false,
                RESPONSE_MESSAGE_KEY => __('The verifier has code is invalid.'),
            ]);
        }

        $conditions = [
            'email' => $request->email,
            ['status', '!=', STATUS_DELETED]
        ];
        $user = User::where($conditions)->first();

        if (!$user) {
            return response()->json([
                RESPONSE_STATUS_KEY => false,
                RESPONSE_MESSAGE_KEY => __("Failed! Your account is deleted by admin."),
            ]);
        }

        $update = ['password' => Hash::make($request->new_password)];

        if ($user->update($update)) {
            $notification = [
                'user_id' => $user->id,
                'message' => __("You just reset your account's password successfully.")
            ];
            Notification::create($notification);

            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __("New password is updated. Please login your account."),
            ]);
        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __("Failed to set new password. Please try again."),
        ]);
    }
}
