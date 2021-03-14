<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class EmailVerificationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'required|exists:users,email,is_email_verified,' . INACTIVE,
            'verifier_hash_code' => 'required',
            'verification_code' => 'required|numeric|between:100000,999999',
        ];
    }
}
