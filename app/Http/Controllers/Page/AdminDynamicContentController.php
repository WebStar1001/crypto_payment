<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDynamicContentController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        if (function_exists($request->get('name'))) {
            $response = $request->get('name')($request);
            if ($response) {
                return response()->json(['html' => $response]);
            }
        }
        return response()->json(['html' => ''], 400);
    }
}
