<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

class RegisterTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register()
    {
        $response = $this->postJson('/api/register', [
            'name' => 'Latifa',
            'email' => 'latifa@test.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        //  Vérifier status
        $response->assertStatus(201);

        // Vérifier structure JSON
        $response->assertJsonStructure([
            'user' => ['id', 'name', 'email', 'role'],
            'token'
        ]);

        // Vérifier DB
        $this->assertDatabaseHas('users', [
            'email' => 'latifa@test.com'
        ]);

        // Vérifier mot de passe hashé
        $user = User::first();
        $this->assertTrue(
            Hash::check('password123', $user->password)
        );
    }
}
