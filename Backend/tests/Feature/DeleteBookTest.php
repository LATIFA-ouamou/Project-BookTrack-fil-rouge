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
        //  Créer admin
        $admin = User::factory()->create([
            'role' => 'admin'
        ]);

        Sanctum::actingAs($admin);

        //  Créer catégorie
        $category = Category::factory()->create();

        // Créer livre
        $book = Book::factory()->create([
            'category_id' => $category->id
        ]);

        //  Supprimer le livre
        $response = $this->deleteJson("/api/books/{$book->id}");

        //  Vérifier status
        $response->assertStatus(200);

        //  Vérifier message
        $response->assertJson([
            'message' => 'Livre supprimé avec succès'
        ]);

        //  Vérifier suppression DB
        $this->assertDatabaseMissing('books', [
            'id' => $book->id
        ]);
    }
}
