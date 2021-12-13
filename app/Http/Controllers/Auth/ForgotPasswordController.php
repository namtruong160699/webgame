<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\FrontendController;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Mail;

class ForgotPasswordController extends FrontendController
{
    public function getFormResetPassword()
    {
        return view('auth.passwords.email');
    }

    public function sendCodeResetPassword(Request $request)
    {
        $email = $request->email;
        $checkUser = User::where('email',$email)->first();
        if (!$checkUser)
        {
            return redirect()->back()->with('danger','Email không tồn tại');
        }
        $code = bcrypt(md5(time().$email));
        $checkUser->code = $code;
        $checkUser->time_code = Carbon::now();
        $checkUser->save();

        $url = route('get.link.reset.password',['code' => $checkUser->code,'email' => $email]);

        $data = [
          'route' => $url
        ];

        Mail::send('email.reset_password', $data, function ($message) use ($email){
           $message->to($email,'Reset Password')->subject('Lấy lại mật khẩu');
        });

        return redirect()->back()->with('success','Link lấy lại mật khẩu đã được gửi vào Email của bạn');
    }

    public function resetPassword(Request $request)
    {
        $code = $request->code;
        $email = $request->email;

        $checkUser = User::where([
            'code' => $code,
            'email' => $email
        ])->first();

        if (!$checkUser)
        {
            return redirect('/')->with('danger','Xin lỗi! Đường dẫn lấy mật khẩu không đúng, bạn vui lòng thử lại sau.');
        }
        return view('auth.passwords.reset');
    }

    public function saveResetPassword(Request $request)
    {
        if ($request->password)
        {
            $code = $request->code;
            $email = $request->email;

            $checkUser = User::where([
                'code' => $code,
                'email' => $email
            ])->first();
        }

        if (!$checkUser)
        {
            return redirect('/')->with('danger','Xin lỗi! Đường dẫn lấy mật khẩu không đúng, bạn vui lòng thử lại sau.');
        }

        $checkUser->password = bcrypt($request->password);
        $checkUser->save();

        return redirect()->route('get.login')->with('success','Đổi mật khẩu thành công');
    }
}
