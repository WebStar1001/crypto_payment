<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\PasswordUpdateRequest;
use App\Services\Core\ProfileService;
use App\Services\Core\UserActivityService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ChangePasswordController extends Controller
{
    public function __invoke(PasswordUpdateRequest $request): JsonResponse
    {
        $response = app(ProfileService::class)->updatePassword($request);

        if ($response[RESPONSE_STATUS_KEY]) {
            app(UserActivityService::class)->store(Auth::id(), 'update password');
        }

        return response()->json($response);
    }
}
