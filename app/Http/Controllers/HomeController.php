<?php

namespace App\Http\Controllers;

use App\Models\Core\Page;
use Illuminate\View\View;

class HomeController extends Controller
{

    public function __invoke(): View
    {
        $homePage = Page::whereNotNull('published_at')->where('is_home_page', ACTIVE)->first();

        if($homePage){
            $data['visualPage'] = $homePage;
            return view('core.pages.show', $data);
        }

        return view('regular_pages.home');
    }
}
