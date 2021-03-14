<?php

namespace App\Http\Controllers\Api\Guest;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\LoginRequest;
use App\Services\Core\AuthService;
use App\Services\Core\UserActivityService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class LoginController extends Controller
{
    protected AuthService $service;

    public function __construct(AuthService $service)
    {
        $this->service = $service;
    }

    public function __invoke(LoginRequest $request): JsonResponse
    {
        $response = $this->service->login($request);

        if (Auth::check()) {
            Cookie::queue(Cookie::forget('coinPair'));
            app(UserActivityService::class)->store(Auth::id(), 'login');

            $response[RESPONSE_DATA]['access_token'] = Auth::user()
                ->createToken($request->header('User-Agent'))
                ->plainTextToken;

            $response[RESPONSE_STATUS_KEY] = $response[RESPONSE_STATUS_KEY] === RESPONSE_TYPE_SUCCESS;

            return response()->json($response);
        }
    }
}
