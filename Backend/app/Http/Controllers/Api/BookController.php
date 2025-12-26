<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use App\Models\Category;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class BookController extends Controller
{
    public function index()
    {
        return response()->json(
        Book::with('category')->get()
    );
    }

    public function show(Book $book)
    {
        return response()->json($book->load('category'));
    }

    // public function store(StoreBookRequest $request)
    // {
    //     $data = $request->validated();

    //     if ($request->hasFile('image')) {
    //         $upload = Cloudinary::upload(
    //             $request->file('image')->getRealPath(),
    //             ['folder' => 'books']
    //         );

    //         // Correction ici
    //         $data['image'] = $upload->getSecureUrl();
    //     }

    //     $book = Book::create($data);

    //     return response()->json($book, 201);
    // }


    public function store(StoreBookRequest $request)
{
    $data = $request->validated();

    if ($request->hasFile('image')) {
        $upload = Cloudinary::upload(
            $request->file('image')->getRealPath(),
            ['folder' => 'books']
        );

        $data['image'] = $upload->getResponse()['secure_url'];
    }

    $book = Book::create($data);

    return response()->json($book, 201);
}






    public function update(UpdateBookRequest $request, Book $book)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $upload = Cloudinary::upload(
                $request->file('image')->getRealPath(),
                ['folder' => 'books']
            );

           
          $data['image'] = $upload->getResponse()['secure_url'];
        }

        $book->update($data);

        return response()->json($book);
    }






    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json([
            'message' => 'Livre supprimé avec succès'
        ]);
    }

 
    public function getCategory()
    {
        return response()->json(
            Category::select('id', 'name')->get(),
            200
        );
    }
    
}