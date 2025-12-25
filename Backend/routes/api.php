<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\BorrowController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/









Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
 Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{book}', [BookController::class, 'show']);
Route::middleware('auth:sanctum')->group(function () {



Route::post('/logout', [AuthController::class, 'logout']);
Route::get('/me', [AuthController::class, 'me']);

Route::get('/categories', [BookController::class, 'getCategory']);

   
    
// Route::post('/books', [BookController::class, 'store']);
    
    Route::middleware('admin')->group(function () {
       Route::post('/books', [BookController::class, 'store']);
        Route::put('/books/{book}', [BookController::class, 'update']);
        Route::delete('/books/{book}', [BookController::class, 'destroy']);

         
    Route::get('/users', [UserController::class, 'index']);

    Route::delete('/users/{user}', [UserController::class, 'destroy']);
    });

   Route::post('/borrow/{book}', [BorrowController::class, 'borrow']);
    
    Route::post('/return/{book}', [BorrowController::class, 'return']);
    Route::get('/my-borrows', [BorrowController::class, 'myBorrows']);
});
