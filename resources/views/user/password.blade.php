@extends('layouts.master',[
    'page_title' => 'Chỉnh sửa mật khẩu',
    'menu_open' => 'user_info',
    'current_menu' => 'user_info',
])
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
                                            <span class="edit-id">Chỉnh sửa mật khẩu</span>
                                        </h4>
                                        <hr>
                                        <form action="" method="POST" class="edit_identity" id="changeYourPassword">
                                            @csrf
                                            <div id="change_info_form">
                                                <table style="padding:5px; width:100%;" class="edit-form">
                                                    <tbody>
                                                        <tr>
                                                            <td class="five">
                                                                <label>Mật khẩu cũ</label>
                                                            </td>
                                                            <td>
                                                                <input class="input-custom" type="password" placeholder="********" name="password_old">
                                                                <span class="text-danger-custom error-text password_old_error"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="label_description">
                                                                <label>Mật khẩu mới</label>
                                                            </td>
                                                            <td>
                                                                <input class="input-custom" placeholder="********" type="password" name="password">
                                                                <span class="text-danger-custom error-text password_error"></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="label_description">
                                                                <label>Nhập lại mật khẩu</label>
                                                            </td>
                                                            <td>
                                                                <input class="input-custom" placeholder="********" type="password" name="password_confirm">
                                                                <span class="text-danger-custom error-text password_confirm_error"></span>
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
<script>
    $('#changeYourPassword').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            url:$(this).attr('action'),
            method:$(this).attr('method'),
            data:new FormData(this),
            processData:false,
            dataType:'json',
            contentType:false,
            beforeSend:function(){
            $(document).find('span.error-text').text('');
            },
            success:function(data){
                if(data.status == 0){
                    $.each(data.error, function(prefix, val){
                    $('span.'+prefix+'_error').text(val[0]);
                    });
                }else{
                    $('#changeYourPassword')[0].reset();
                    $.notify(data.msg, data.status);
                }
            }
        });
    });
</script>
@endsection