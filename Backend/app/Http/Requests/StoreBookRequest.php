<?php


namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;


class StoreBookRequest extends FormRequest
{
public function authorize(): bool
{
return true; // le middleware admin gère l’accès
}


public function rules(): array
{
return [
'title' => 'required|string|max:255',
'author' => 'required|string|max:255',
'description' => 'nullable|string',
'image' => 'nullable|image|mimes:jpg,jpeg,png',
'category_id' => 'nullable|exists:categories,id',
'stock' => 'required|integer|min:0',
];
}
}