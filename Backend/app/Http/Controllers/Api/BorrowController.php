<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Http\Requests\StoreBorrowRequest;
use App\Models\Book;
use App\Models\Borrow;
use Illuminate\Support\Facades\DB;

class BorrowController extends Controller
{
    
    // public function borrow(StoreBorrowRequest $request, Book $book)
    // {
    //     if ($book->is_borrowed) {
    //         return response()->json([
    //             'message' => 'Livre déjà emprunté'
    //         ], 400);
    //     }

       
    //     $existingBorrow = Borrow::where('book_id', $book->id)
    //         ->whereNull('return_date')
    //         ->exists();

    //     if ($existingBorrow) {
    //         return response()->json([
    //             'message' => 'Ce livre est déjà emprunté'
    //         ], 409);
    //     }

    //     DB::transaction(function () use ($book) {
    //         Borrow::create([
    //             'user_id' => auth()->id(),
    //             'book_id' => $book->id,
    //             'borrow_date' => now(),
    //         ]);

    //         $book->update([
    //             'is_borrowed' => true
    //         ]);
    //     });

    //     return response()->json([
    //         'message' => 'Livre emprunté avec succès'
    //     ], 201);
    // }



//     public function borrow(StoreBorrowRequest $request, Book $book)
// {
//     if ($book->is_borrowed) {
//         return response()->json(['message' => 'Livre déjà emprunté'], 400);
//     }

//     DB::transaction(function () use ($request, $book) {
//         Borrow::create([
//             'user_id' => auth()->id(),
//             'book_id' => $book->id,
//             'borrow_date' => $request->borrow_date,
//             'expected_return_date' => $request->expected_return_date,
//         ]);

//         $book->update(['is_borrowed' => true]);
//     });

//     return response()->json([
//         'message' => 'Emprunt confirmé avec succès'
//     ], 201);
// }



public function borrow(StoreBorrowRequest $request, Book $book)
{
    // Vérifier le stock
    if ($book->stock <= 0) {
        return response()->json([
            'message' => 'Stock épuisé, livre indisponible'
        ], 400);
    }

    DB::transaction(function () use ($request, $book) {

        Borrow::create([
            'user_id' => auth()->id(),
            'book_id' => $book->id,
            'borrow_date' => $request->borrow_date ?? now(),
            'expected_return_date' => $request->expected_return_date,
        ]);

        // 🔽 Diminuer le stock
        $book->decrement('stock');
    });

    return response()->json([
        'message' => 'Livre emprunté avec succès'
    ], 201);
}


   
    public function myBorrows()
    {
        return Borrow::with('book.category')
            ->where('user_id', auth()->id())
            ->whereNull('return_date')
            ->get();
    }

   
    // public function return(Book $book)
    // {
    //     $borrow = Borrow::where('book_id', $book->id)
    //         ->where('user_id', auth()->id())
    //         ->whereNull('return_date')
    //         ->first();

    //     if (! $borrow) {
    //         return response()->json([
    //             'message' => 'Aucun emprunt actif trouvé'
    //         ], 404);
    //     }

    //     DB::transaction(function () use ($borrow, $book) {
    //         $borrow->update([
    //             'return_date' => now()
    //         ]);

    //         $book->update([
    //             'is_borrowed' => false
    //         ]);
    //     });

    //     return response()->json([
    //         'message' => 'Livre retourné avec succès'
    //     ]);
    // }

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

        // 🔼 Augmenter le stock
        $book->increment('stock');
    });

    return response()->json([
        'message' => 'Livre retourné avec succès'
    ]);
}

}
