<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\TransformsRequest;
use Stevebauman\Purify\Facades\Purify;

class StripTags extends TransformsRequest
{

    /**
     * Transform the given value.
     *
     * @param string $key
     * @param mixed $value
     * @return mixed
     */
    protected function transform($key, $value)
    {
        $stripTags = config('commonconfig.strip_tags');
        if (in_array($key, $stripTags['escape_text'], true)) {
            return Purify::clean($value);
        }
        return strip_tags($value);
    }
}
