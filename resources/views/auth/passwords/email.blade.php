@extends('layouts.master',[
    'page_title' => 'Lấy lại mật khẩu',
    'menu_open' => '',
    'current_menu' => '',
])
@section('content')
<section id="contact-us" class="contact-us-section" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row section-content">
            <div class="contact-us-section-content">
                <div class="contact-form">
                    <div class="contact-form-title">
                        <div class="section-title text-center">
                            <div class="section-title-text">
                                <h2>Lấy lại mật khẩu</h2>
                            </div>
                        </div>
                    </div>
                    <div class="contact-comment-form pb50 clearfix">
                        <div class="comment-form">
                            <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="contact-comment-info">
                                    <input style="width: 79%" name="email" type="email" placeholder="Vui lòng nhập email">
                                </div>
                                <div class="send-button text-uppercase text-center">
                                    <button type="submit" value="Submit">Gửi</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
