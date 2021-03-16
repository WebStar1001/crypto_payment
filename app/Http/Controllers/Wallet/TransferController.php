<?php

namespace App\Http\Controllers\Wallet;

use App\Http\Controllers\Controller;
use App\Models\Order\Order;
use App\Models\Wallet\Wallet;
use App\Services\Core\ProfileService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Services\Core\UserActivityService;
use Illuminate\View\View;

class TransferController extends Controller
{
    private $service;

    public function __construct(ProfileService $service)
    {
        $this->service = $service;
    }
    public function index(): View
    {
        $data = $this->service->profile();
        $data['title'] = __('Send & receive coin');
        return view('wallets.user.transfer', $data);
    }
}
