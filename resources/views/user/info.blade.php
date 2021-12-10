@extends('layouts.master',[
    'page_title' => 'Chỉnh sửa thông tin',
    'menu_open' => 'user_info',
    'current_menu' => 'user_info',
])
@section('style')
    <link rel="stylesheet" href="{{asset('Client/customs/plugins/ijaboCropTool/ijaboCropTool.min.css')}}">
@endsection
@section('content')
<section id="blog-details" class="blog-details-section pt60  pb80" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row">
            <div class="blog-details-section-content">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="comment-area">
                            <div class="leave-comment">
                                <div class="leave-comment-form clearfix box">
                                    <div class="comment-form">
                                        <h4>
                                            <span class="edit-id">Chỉnh sửa thông tin</span>
                                        </h4>
                                        <hr>
                                        <form action="" method="POST" class="edit_identity">
                                            @csrf
                                            <div id="change_info_form">
                                                <table style="padding:5px; width:100%;" class="edit-form">
                                                    <tbody>
                                                        <tr>
                                                            <td class="five label_description">
                                                                <label>Identity</label>
                                                            </td>
                                                            <td><input type="text" class="input-custom"></td>
                                                            <td class="avatar_upload_place" rowspan="4">
                                                                <div class="avatar edit_mode">
                                                                <div>
                                                                    <div class="profile-picture-container large">
                                                                    <a href="javascript:void(0)" class="img-div" id="change_picture_btn" title="Thay đổi ảnh đại diện">
                                                                        <img style="width:160px" class="profile-user-img img-fluid user_picture" src="{{Auth::check() ? asset(pare_url_file(Auth::user()->avatar)) : ''}}">
                                                                    </a>
                                                                    <input type="file" name="user_image" id="user_image" style="opacity: 0;height:1px;display:none">
                                                                    </div>
                                                                </div>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="five">
                                                                <label>Nickname</label>
                                                            </td>
                                                            <td>
                                                                <input class="input-custom" type="text" name="nickname" value="{{$user->nickname}}">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="label_description">
                                                                <label>Full name</label>
                                                            </td>
                                                            <td>
                                                                <input class="input-custom" maxlength="200" size="200" type="text" value="{{$user->name}}" name="name">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="label_description">
                                                                <label>Phone</label>
                                                            </td>
                                                            <td>
                                                                <input class="input-custom" maxlength="200" size="200" type="number" value="{{$user->phone}}" name="phone">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr>
                                            <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> Cập nhật</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
@section('script')
  <script src="{{asset('Client/customs/plugins/ijaboCropTool/ijaboCropTool.min.js')}}"></script>
  <script>
    $(document).on('click','#change_picture_btn', function() {
      $('#user_image').click();
    }); 

    $('#user_image').ijaboCropTool({
      preview : '.user_picture',
      setRatio:1,
      allowedExtensions: ['jpg', 'jpeg','png'],
      buttonsText:['LƯU','HỦY'],
      buttonsColor:['#30bf7d','#ee5155', -15],
      processUrl:'{{ route('get.update.user.picture') }}',
      withCSRF:['_token','{{ csrf_token() }}'],
      onSuccess:function(message, element, status){
        $.notify(message, 'success');
      },
      onError:function(message, element, status){
        $.notify(message, 'error');
      }
    });
  </script>
@stop