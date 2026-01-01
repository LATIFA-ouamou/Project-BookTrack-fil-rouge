<?php

namespace App\Events;

use App\Models\Borrow;
use Illuminate\Foundation\Events\Dispatchable;

class BorrowBecameLate
{
    use Dispatchable;

    public $borrow;

    public function __construct(Borrow $borrow)
    {
        $this->borrow = $borrow;
    }
}
