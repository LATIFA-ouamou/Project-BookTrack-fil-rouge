<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BorrowBookRequest;
use App\Models\Book;
use App\Models\Borrow;
use Illuminate\Support\Facades\DB;

class BorrowController extends Controller
{
    // 📚 Emprunter un livre
    public function borrow(BorrowBookRequest $request, Book $book)
    {
        if ($book->is_borrowed) {
            return response()->json([
                'message' => 'Livre déjà emprunté'
            ], 400);
        }

        // Vérifier s'il existe déjà un emprunt actif
        $existingBorrow = Borrow::where('book_id', $book->id)
            ->whereNull('return_date')
            ->exists();

        if ($existingBorrow) {
            return response()->json([
                'message' => 'Ce livre est déjà emprunté'
            ], 409);
        }

        DB::transaction(function () use ($book) {
            Borrow::create([
                'user_id' => auth()->id(),
                'book_id' => $book->id,
                'borrow_date' => now(),
            ]);

            $book->update([
                'is_borrowed' => true
            ]);
        });

        return response()->json([
            'message' => 'Livre emprunté avec succès'
        ], 201);
    }

    // 📖 Mes emprunts
    public function myBorrows()
    {
        return Borrow::with('book')
            ->where('user_id', auth()->id())
            ->whereNull('return_date')
            ->get();
    }

    // 🔄 Retourner un livre
    public function return(Book $book)
    {
        $borrow = Borrow::where('book_id', $book->id)
            ->where('user_id', auth()->id())
            ->whereNull('return_date')
            ->first();

        if (! $borrow) {
            return response()->json([
                'message' => 'Aucun emprunt actif trouvé'
            ], 404);
        }

        DB::transaction(function () use ($borrow, $book) {
            $borrow->update([
                'return_date' => now()
            ]);

            $book->update([
                'is_borrowed' => false
            ]);
        });

        return response()->json([
            'message' => 'Livre retourné avec succès'
        ]);
    }
}
