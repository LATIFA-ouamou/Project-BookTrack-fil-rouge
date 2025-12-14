<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;


class BookController extends Controller
{
public function index()
{
return response()->json(Book::all());
}


public function show(Book $book)
{
return response()->json($book);
}


public function store(StoreBookRequest $request)
{
$book = Book::create($request->validated());
return response()->json($book, 201);
}


public function update(UpdateBookRequest $request, Book $book)
{
$book->update($request->validated());
return response()->json($book);
}


public function destroy(Book $book)
{
$book->delete();
return response()->json(['message' => 'Livre supprimé']);
}
}