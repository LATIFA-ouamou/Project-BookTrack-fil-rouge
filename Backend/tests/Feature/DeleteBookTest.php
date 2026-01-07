<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

class DeleteBookTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_delete_book()
    {
        
        $admin = User::factory()->create([
            'role' => 'admin'
        ]);

        Sanctum::actingAs($admin);

       
        $category = Category::factory()->create();

       
        $book = Book::factory()->create([
            'category_id' => $category->id
        ]);

        
        $response = $this->deleteJson("/api/books/{$book->id}");

       
        $response->assertStatus(200);

        
        $response->assertJson([
            'message' => 'Livre supprimé avec succès'
        ]);

       
        $this->assertDatabaseMissing('books', [
            'id' => $book->id
        ]);
    }
}
