<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\UserRequest;
use App\Services\Core\ProfileService;
use App\Services\Core\UserActivityService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function show(): JsonResponse
    {
        $profile = app(ProfileService::class)->profile();
        $profile['user']->loadMissing('profile');
        unset($profile['user']['role']);

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => $profile
        ]);
    }

    public function update(UserRequest $request): JsonResponse
    {
        $parameters = $request->only(['first_name', 'last_name', 'address']);

        if (Auth::user()->profile()->update($parameters)) {
            app(UserActivityService::class)
                ->store(Auth::id(), 'update profile');

            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __('Profile has been updated successfully.')
            ]);
        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __('Failed to update profile.')
        ]);
    }
}
