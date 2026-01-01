<?php

namespace App\Listeners;

use App\Events\BorrowBecameLate;
use App\Notifications\BorrowLateNotification;

class SendBorrowLateEmail
{
    public function handle(BorrowBecameLate $event)
    {
        $user = $event->borrow->user;
        if ($user) {
            $user->notify(new BorrowLateNotification($event->borrow));
        }
    }
}
