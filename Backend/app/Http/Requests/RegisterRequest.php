<?php


namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;


class RegisterRequest extends FormRequest
{
public function authorize(): bool
{
return true;
}


public function rules(): array
{
return [
'name' => 'required|string|max:255',
'email' => 'required|email|unique:users,email',
'password' => 'required|string|min:6|confirmed',
];
}
    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est obligatoire.',
            'name.string'   => 'Le nom doit être une chaîne de caractères.',
            'name.max'      => 'Le nom ne doit pas dépasser 255 caractères.',

            'email.required' => "L'adresse email est obligatoire.",
            'email.email'    => "Veuillez saisir une adresse email valide.",
            'email.unique'   => "Cette adresse email est déjà utilisée.",

            'password.required'  => 'Le mot de passe est obligatoire.',
            'password.string'    => 'Le mot de passe doit être une chaîne de caractères.',
            'password.min'       => 'Le mot de passe doit contenir au moins 6 caractères.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
        ];
    }
}