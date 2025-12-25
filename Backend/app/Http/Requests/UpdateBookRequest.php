<?php


namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;


class UpdateBookRequest extends FormRequest
{
public function authorize(): bool
{
return true;
}


public function rules(): array
{
return [
'title' => 'sometimes|string|max:255',
'author' => 'sometimes|string|max:255',
'description' => 'nullable|string',
'image' => 'nullable|file',
'is_borrowed' => 'boolean',
// 'category_id' => 'nullable|exists:categories,id',
];
}
}