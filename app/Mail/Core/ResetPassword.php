<?php

namespace App\Mail\Core;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPassword extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user;
    public $isApi;
    public $verificationCode;

    /**
     * Create a new message instance.
     *
     * @param $user
     */
    public function __construct($user, $isApi=false, $verificationCode=null)
    {
        $this->user = $user;
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
        return $this->markdown('email.core.reset_password_link');
    }
}
