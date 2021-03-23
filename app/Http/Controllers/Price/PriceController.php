<?php

namespace App\Http\Controllers\Price;

use App\Models\Faq\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;

class PriceController extends Controller
{

    public function showGraph()
    {
        $data['faq'] = Faq::all();
        return view('price.index', $data);
    }
}
