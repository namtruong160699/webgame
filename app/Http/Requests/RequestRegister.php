<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestRegister extends FormRequest
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
            'email'    => 'required|unique:users,email,' . $this->id,
            'name'     => 'required',
            'password' => 'required',
            'phone'    => 'required',
        ];
    }

    public function messages()
    {
        return [
            'email.required'    => 'Vui lòng nhập email của bạn',
            'email.unique'      => 'Email đã tồn tại',
            'name.required'     => 'Vui lòng nhập tên của bạn',
            'password.required' => 'Vui lòng nhập mật khẩu',
            'phone.required'    => 'Vui lòng nhập số điện thoại của bạn',
        ];
    }
}
