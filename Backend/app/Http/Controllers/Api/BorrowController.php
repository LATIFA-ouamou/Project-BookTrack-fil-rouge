<?php

namespace App\Http\Controllers\Api;

use App\Events\BorrowBecameLate;
use App\Http\Controllers\Controller;

use App\Http\Requests\StoreBorrowRequest;
use App\Models\Book;
use App\Models\Borrow;
use Illuminate\Support\Facades\DB;

class BorrowController extends Controller
{
    
    







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

       
        $book->decrement('stock');
    });

    return response()->json([
        'message' => 'Livre emprunté avec succès'
    ], 201);
}


   
    
   
public function myBorrows()
{
    
    $borrows = Borrow::with('book')
        ->where('user_id', auth()->id())
        ->orderBy('created_at', 'desc')
        ->get();

    // Mettre à jour le statut pour chaque emprunt
    foreach ($borrows as $borrow) {
        if ($borrow->return_date) {
            $borrow->status = 'returned';
        } elseif ($borrow->expected_return_date && now()->greaterThan($borrow->expected_return_date)) {
            $borrow->status = 'late';
              event(new BorrowBecameLate($borrow));;
        } else {
            $borrow->status = 'borrowed';
        }
        
        $borrow->save(); // Sauvegarder le statut en base de donner 
    }

    return response()->json($borrows);
}
   
  


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
        // Marquer comme retourné
        $borrow->update([
            'return_date' => now(),
            'status' => 'returned' 
        ]);

        
        $book->increment('stock');
    });

    return response()->json([
        'message' => 'Livre retourné avec succès'
    ]);
}
}
