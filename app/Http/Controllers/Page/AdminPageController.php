<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Http\Requests\Page\PageRequest;
use App\Models\Core\Page;
use App\Services\Core\DataTableService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class AdminPageController extends Controller
{
    public function index()
    {
        $searchFields = [
            ['slug', __('Slug')],
            ['title', __('Title')],
        ];

        $orderFields = [
            ['id', __('ID')],
            ['slug', __('Slug')],
            ['published_at', __('Published Date')],
        ];

        $queryBuilder = Page::query()
            ->orderByDesc('created_at');

        $data['dataTable'] = app(DataTableService::class)
            ->setSearchFields($searchFields)
            ->setOrderFields($orderFields)
            ->create($queryBuilder);

        $data['title'] = __('Pages');

        return view('core.pages.admin.index', $data);
    }

    public function create()
    {
        $data['title'] = __('Create New Page');
        return view('core.pages.admin.create', $data);
    }

    public function store(PageRequest $request)
    {
        $params = $request->only('slug', 'title', 'settings');

        if ($page = Page::create($params)) {
            Storage::disk('public')->put('css/cm-visual-builder/style-' . $page->id . '.css', '');
            return redirect()
                ->route('admin.pages.visual-edit', $page->slug)
                ->with(RESPONSE_TYPE_SUCCESS, __('Page has been created successfully.'));
        }
        return redirect()
            ->back()
            ->withInput()
            ->with(RESPONSE_TYPE_ERROR, __('Failed to create page.'));
    }

    public function edit(Page $page)
    {
        $data['page'] = $page;
        $data['title'] = __('Edit Page');
        return view('core.pages.admin.edit', $data);
    }

    public function update(PageRequest $request, Page $page)
    {
        $params = $request->only('slug', 'title', 'settings');

        if ($page->update($params)) {
            return redirect()
                ->route('admin.pages.edit', $page->id)
                ->with(RESPONSE_TYPE_SUCCESS, __('Page has been updated successfully.'));
        }
        return redirect()
            ->back()
            ->withInput()
            ->with(RESPONSE_TYPE_ERROR, __('Failed to update page.'));
    }

    public function destroy(Page $page)
    {
        $pageId = $page->id;
        if ($page->delete()) {
            Storage::disk('public')->delete("css/cm-visual-builder/style-{$pageId}.css");
            return redirect()
                ->route('admin.pages.index')
                ->with(RESPONSE_TYPE_SUCCESS, __('Page has been deleted successfully.'));
        }

        return redirect()
            ->back()
            ->with(RESPONSE_TYPE_ERROR, __('Failed to delete page.'));
    }

    public function togglePublish(Page $page)
    {
        if ($page->published_at) {
            $page->published_at = null;
            $status = __('unpublished');
        } else {
            $status = __('published');
            $page->published_at = Carbon::now();
        }

        if ($page->update()) {
            return redirect()
                ->back()
                ->with(RESPONSE_TYPE_SUCCESS, __('Page has been :status successfully', ['status' => $status]));
        }
        return redirect()
            ->back()
            ->with(RESPONSE_TYPE_ERROR, __('Failed to :status page', ['status' => $status]));
    }

    public function makeHomePage(Page $page)
    {
        Page::whereNotIn('id', [$page->id])->update(['is_home_page' => INACTIVE]);

        if ($page->update(['is_home_page' => ACTIVE])) {
            return redirect()
                ->back()
                ->with(RESPONSE_TYPE_SUCCESS, __('Page has been selected as home page'));
        }
        return redirect()
            ->back()
            ->with(RESPONSE_TYPE_ERROR, __('Failed to change home page'));
    }
}
