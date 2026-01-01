<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Models\Borrow;
use App\Events\BorrowBecameLate;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


// 🚨 Vérifier les emprunts en retard + envoyer email
Artisan::command('check:late-borrows', function () {

    $today = Carbon::today();

    $borrows = Borrow::whereNull('return_date')
        ->whereDate('expected_return_date', '<', $today)
        ->where('status', 'borrowed') // éviter d'envoyer plusieurs email
        ->get();

    foreach ($borrows as $borrow) {
        $borrow->update(['status' => 'late']);
        event(new BorrowBecameLate($borrow)); // 📩 envoyer l'email
    }

    $this->info("✔️ {$borrows->count()} emprunts marqués en retard + emails envoyés.");
});
