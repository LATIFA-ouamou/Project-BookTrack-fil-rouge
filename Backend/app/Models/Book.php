<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
protected $fillable = [
        'title',
        'author',
        'description',
        'image',
        'is_borrowed'
    ];


    public function borrowers()
{
    return $this->belongsToMany(User::class, 'book_user')
                ->withPivot('borrow_date')
                ->withTimestamps();
}

}
