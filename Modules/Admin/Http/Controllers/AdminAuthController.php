<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Auth;

class AdminAuthController extends Controller
{
    public function getLogin()
    {
        return view('admin::auth.login');
    }

    public function postLogin(Request $request)
    {
        $login = $request->only('username','password');
        if (Auth::guard('admins')->attempt($login))
        {
            return redirect()->route('dashboard');
        }
        return redirect()->back();
    }

    public function getLogout()
    {
        Auth::guard('admins')->logout();
        return redirect()->route('admin.login');
    }
}
