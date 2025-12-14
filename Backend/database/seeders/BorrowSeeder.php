<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Borrow;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BorrowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $users = User::where('role', 'user')->get();
        $books = Book::where('is_borrowed', false)->get();

        foreach ($users as $user) {
            $book = $books->shift();
            if (!$book) break;

            Borrow::create([
                'user_id' => $user->id,
                'book_id' => $book->id,
                'borrow_date' => now(),
            ]);

            $book->update(['is_borrowed' => true]);
        }
    }
}
