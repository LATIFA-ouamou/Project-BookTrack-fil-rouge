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
        'is_borrowed',
        'category_id',
          'stock',
    ];

public function borrows()
{
return $this->hasMany(Borrow::class);
}


 public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
