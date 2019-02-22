<?php

namespace Portfolio\Portfolio\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSection extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'name' => 'required|email|max:255',
          'template' => 'required|string|max:255',
          'markup' => 'required|string',
        ];
    }
}
