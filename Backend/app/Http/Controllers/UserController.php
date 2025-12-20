<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Liste des utilisateurs
     */
    public function index()
    {
        return response()->json(
            User::select('id', 'name', 'email', 'role')->get(),
            200
        );
    }

    /**
     * Supprimer un utilisateur
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'Utilisateur supprimé avec succès'
        ], 200);
    }
}
