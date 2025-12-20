<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendWelcomeEmail
{
    public function handle(UserRegistered $event): void
    {
        Log::info('Email envoyé à : ' . $event->user->email);

        Mail::to($event->user->email)
            ->send(new WelcomeMail($event->user));
    }
}
