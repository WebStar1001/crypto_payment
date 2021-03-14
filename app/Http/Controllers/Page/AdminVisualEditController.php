<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\Core\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminVisualEditController extends Controller
{
    public function edit(Page $page)
    {
        return view('core.pages.admin.visual-edit', ['visualPage' => $page]);
    }

    public function update(Request $request, Page $page)
    {
        $request->validate([
            'style' => 'present',
            'body' => 'present',
        ]);

        $page->body = $request->get('body');
        if ($page->update()) {
            Storage::disk('public')->put('css/cm-visual-builder/style-' . $page->id . '.css', $request->get('style', ''));
            return response()->json([RESPONSE_MESSAGE_KEY => __('Page has been saved successfully.')]);
        }
        return response()->json([RESPONSE_MESSAGE_KEY => __('Failed to save page.')], 400);
    }
}
