<?php

namespace App\Http\Controllers\Api\Preference;

use App\Http\Controllers\Controller;
use App\Http\Requests\Core\PreferenceRequest;
use App\Models\Core\UserPreference;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class PreferenceController extends Controller
{
    public function show()
    {
        $preference = UserPreference::firstOrCreate(
            ['user_id' => Auth::id()],
            [
                'default_language' => config('app.locale'),
                'default_coin_pair' => null
            ]
        );

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'preference' => $preference
            ],
        ]);
    }

    public function update(PreferenceRequest $request)
    {
        $params = $request->only('default_language', 'default_coin_pair');

        if (auth()->user()->preference->update($params)) {
            Cookie::queue(Cookie::forever('coinPair', $request->default_coin_pair));

            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __("Preference has been updated successfully."),
            ]);
        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __("Failed to update preference."),
        ]);
    }
}
