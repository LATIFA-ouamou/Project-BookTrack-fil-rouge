<?php

namespace App\Notifications;

use App\Models\Borrow;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class BorrowLateNotification extends Notification
{
    public $borrow;

    public function __construct(Borrow $borrow)
    {
        $this->borrow = $borrow;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject("⚠️ Retard - Retour du livre")
            ->line("Vous avez un emprunt en retard.")
            ->line("Livre ID : {$this->borrow->book_id}")
            ->line("Date prévue : {$this->borrow->expected_return_date}")
            ->action("Voir mes emprunts", url('/mes-emprunts'));
    }
}
