<?php

namespace App\Http\Controllers;

use App\Models\Coin\Coin;
use App\Override\Api\EthereumClient;
use Exception;

class NodeStatusController extends Controller
{
    use EthereumClient;

    public function index()
    {

        $data['btcForkedCoins'] = Coin::query()
            ->whereJsonContains('api->selected_apis', API_BITCOIN)
            ->orWhereJsonContains('api->selected_apis', API_OMNI_LAYER)
            ->active()
            ->get();
        $data['title'] = __('Node Status');
        return view('node_status.node_status', $data);
    }

    public function show($coin, $api)
    {

        try {
            if ($api === API_ETHEREUM) {
                $this->url = settings("ethereum_server_url") ?? "";
                $response = $this->getStatus();
            } else {
                $response = app($api, [$coin])->getStatus();
            }
        } catch (Exception $exception) {
            $response = [
                'status' => false,
                'version' => '',
                'network' => ''
            ];
        }

        return view('node_status.single_status', compact('response'))->render();
    }
}
