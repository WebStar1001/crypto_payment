<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\UserAvatarRequest;
use App\Services\Core\ProfileService;
use Illuminate\Http\JsonResponse;

class UpdateAvatarController extends Controller
{
    public function __invoke(UserAvatarRequest $request): JsonResponse
    {
        $response = app(ProfileService::class)->avatarUpload($request);
        $response[RESPONSE_STATUS_KEY] = $response[RESPONSE_STATUS_KEY] == RESPONSE_TYPE_SUCCESS;

        return response()->json($response);
    }
}
