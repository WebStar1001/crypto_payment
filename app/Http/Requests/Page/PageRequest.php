<?php

namespace App\Http\Requests\Page;

use App\Models\Page\Page;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class PageRequest extends FormRequest
{
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
        return [
            'title' => [
                'required',
                Rule::unique('pages', 'title')->ignore($this->route()->parameter('page'))
            ],
            'slug' => [
                'required',
                Rule::unique('pages', 'slug')->ignore($this->route()->parameter('page'))
            ]
        ];
    }
}
