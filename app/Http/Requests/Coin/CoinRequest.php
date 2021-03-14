<?php

namespace App\Http\Requests\Coin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class CoinRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'is_active' => [
                'required',
                Rule::in(array_keys(active_status())),
            ],
            'exchange_status' => [
                'required',
                Rule::in(array_keys(active_status())),
            ],
        ];

        if ($this->isMethod('POST')) {
            $rules['type'] = [
                'required',
                Rule::in(array_keys(coin_types())),
            ];
            $rules['icon'] = [
                'image',
                'max:1024',
            ];
            $rules['contract_address'] = [
                'required_if:type,erc20',
                'max:42',
//                Rule::unique('coins')->ignore($this->route()->parameter('coin'))
            ];
            $rules['decimal_place'] = [
                'required_if:type,erc20',
                'integer',
                'min:8',
                'max:18',
            ];
        }

        $rules['symbol'] = [
            'required',
            Rule::unique('coins')->ignore($this->route()->parameter('coin')),
            'max:10'
        ];

        $rules['name'] = [
            'required',
            Rule::unique('coins')->ignore($this->route()->parameter('coin')),
        ];

        return $rules;
    }
}
