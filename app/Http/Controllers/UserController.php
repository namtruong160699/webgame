<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\User;
use Auth;

class UserController extends Controller
{
    public function index()
    {
        $userId = \Auth::id();
        $games = Game::whereHas('favourite', function($query) use ($userId) {
            $query->where('user_id', $userId);
        })->select('id','name','avatar')
            ->paginate(10);
        return view('user.index', compact('games'));
    }

    public function updateInfo()
    {
        $user = User::find(get_data_user('web'));
        return view('user.info', compact('user'));
    }

    public function saveUpdateInfo(Request $request)
    {
        $user = User::find(get_data_user('web'));
        $user->name = $request->name;
        $user->nickname = $request->nickname;
        $user->phone = $request->phone;
        $user->save();
        
        return redirect()->back();
    }

    public function updatePicture(Request $request)
    {
        $path = 'uploads/'.date('Y/m/d');
        $file = $request->file('user_image');
        $new_name = date('Y-m-d__').uniqid().'jpg';

        //Upload new image
        $upload = $file->move(public_path($path), $new_name);

        if( !$upload ) {
            return response()->json(['status' => 0, 'msg' => 'Đã xảy ra sự cố, không tải được ảnh lên!']);
        }else {
            //Get old picture
            $oldPicture = User::find(Auth::user()->id)->getAttributes()['avatar'];

            if($oldPicture != '') {
                if( \File::exists(public_path($path.$oldPicture))) {
                    \File::delete(public_path($path.$oldPicture));
                }
            }

            //Update DB
            $update = User::find(Auth::user()->id)->update(['avatar'=>$new_name]);

            if( !$upload ){
                return response()->json(['status'=>0,'msg'=>'Đã xảy ra lỗi, không cập nhật được ảnh!']);
            }else{
                return response()->json(['status'=>1,'msg'=>'Cập nhật ảnh đại diện thành công!']);
            }
        }
    }

    public function changePassword()
    {
        $user = User::find(get_data_user('web'));
        return view('user.password', compact('user'));
    }

    public function saveChangePassword(Request $request)
    {
        $validator = \Validator::make($request->all(),[
            'password_old'  => [
                'required', function($attribute, $value, $fail) {
                    if(!\Hash::check($value, Auth::user()->password)) {
                        return $fail(__('Mật khẩu hiện tại không chính xác'));
                    }
                }
            ],
            'password'                  => 'required|min:6|max:30|different:password_old',
            'password_confirm'          => 'required|same:password'
        ],[
            'password_old.required'     => 'Nhập mật khẩu hiện tại của bạn',
            'password.required'         => 'Nhập mật khẩu mới',
            'password.min'              => 'Mật khẩu mới phải có ít nhất 6 ký tự',
            'password.max'              => 'Mật khẩu mới không được lớn hơn 30 ký tự',
            'password_confirm.required' => 'Nhập lại mật khẩu mới của bạn',
            'password_confirm.same'     => 'Mật khẩu xác nhận không đúng',
            'password.different'        => 'Mật khẩu mới phải khác mật khẩu hiện tại'
        ]);
        
        if (!$validator->passes()) {
            return response()->json(['status'=>0,'error'=>$validator->errors()->toArray()]);
        } else {
            $update = User::find(Auth::user()->id)->update(['password'=>\Hash::make($request->password)]);
            if (!$update) {
                return response()->json(['status'=> 'error','msg'=>'Đã xảy ra sự cố. Không cập nhật được mật khẩu']);
            } else {
                return response()->json(['status'=> 'success','msg'=>'Mật khẩu của bạn đã được thay đổi thành công!']);
            }
        }
    }
}
