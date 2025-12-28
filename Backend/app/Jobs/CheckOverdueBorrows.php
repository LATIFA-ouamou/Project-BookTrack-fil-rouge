<?php
namespace App\Jobs;

use App\Models\Borrow;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;

class CheckOverdueBorrows implements ShouldQueue
{
    use Queueable;

    public function handle()
    {
        $today = Carbon::today();

        $borrows = Borrow::whereNull('return_date')   // pas encore rendu
            ->whereDate('expected_return_date', '<', $today) // date dépassée
            ->get();

        foreach ($borrows as $borrow) {
            $borrow->update(['status' => 'late']);
        }
    }
}
