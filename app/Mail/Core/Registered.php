<?php

namespace App\Mail\Core;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Registered extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $profile;
    public $isApi;
    public $verificationCode;

    public function __construct($profile, $isApi=false, $verificationCode=null)
    {
        $this->profile = $profile;
        $this->isApi = $isApi;
        $this->verificationCode = $verificationCode;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('email.user.registered')->subject(__('Account verification link'));
    }
}
