<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\FrontendController;
use App\Http\Requests\RequestRegister;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Mail;

class RegisterController extends FrontendController
{
    public function getRegister()
    {
        return view('auth.register');
    }

    public function postRegister(RequestRegister $requestRegister){
        $user = new User();
        $user->name = $requestRegister->name;
        $user->email = $requestRegister->email;
        $user->phone = $requestRegister->phone;
        $user->password = bcrypt($requestRegister->password);
        $user->save();

        if ($user->id)
        {
            $email = $user->email;
            $code = bcrypt(md5(time().$email));
            $url = route('user.verify.account',['id' => $user->id,'code' => $code]);

            $user->code_active = $code;
            $user->time_code_active = Carbon::now();
            $user->save();

            $data = [
                'route' => $url
            ];

            Mail::send('email.verify_account', $data, function ($message) use ($email){
                $message->to($email,'Verify Account')->subject('Xác nhận tài khoản');
            });
            return redirect()->route('get.login');
        }
        return redirect()->back();
    }

//    Xác nhận tài khoản
    public function verifyAccount(Request $request)
    {
        $code = $request->code;
        $id = $request->id;

        $checkUser = User::where([
            'code_active' => $code,
            'id' => $id
        ])->first();

        if (!$checkUser)
        {
            return redirect('/')->with('danger','Xin lỗi! Đường dẫn không tồn tại');
        }

        $checkUser->active = 2;
        $checkUser->save();
        return redirect('/')->with('success','Xác nhận tài khoản thành công');
    }
}
