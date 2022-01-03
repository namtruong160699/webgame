@extends('layouts.master',[
    'page_title' => 'Đăng ký',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('style')
    <style>
        .contact-comment-info input {
            width: 100% !important;
        }
        .contact-comment-info textarea {
            width: 100% !important;
        }
        .game[readonly] {
            background-color: #eee;
            opacity: 1;
        }
    </style>
@endsection
@section('content')
<section id="contact-us" class="contact-us-section" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row section-content">
            <div class="contact-us-section-content">
                <div class="contact-form">
                    <div class="contact-form-title">
                        <div class="section-title text-center">
                            <div class="section-title-text text-uppercase">
                                <p>ĐĂNG KÝ</p>
                            </div>
                            <!-- <div class="section-title-text">
                                <h2>Đăng ký</h2>
                            </div> -->
                        </div>
                    </div>
                    <!-- / contact-form-title-->
                    <div class="contact-comment-form pb50 clearfix">
                        <div class="comment-form">
                            <form action="#" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="contact-comment-info">
                                    <input name="name" type="text" placeholder="Tên của bạn" value="{{ old('name') }}">
                                    <span class="help-block">
                                        <strong class="text-danger error-text name_error">@error('name') {{$message}} @enderror</strong>
                                    </span>
                                </div>
                                <div class="contact-comment-info">
                                    <input name="email" type="email" placeholder="Email của bạn" value="{{ old('email') }}">
                                    <span class="help-block">
                                        <strong class="text-danger error-text email_error">@error('email') {{$message}} @enderror</strong>
                                    </span>
                                </div>
                                <div class="contact-comment-info">
                                    <input name="phone" type="number" placeholder="Số điện thoại của bạn" value="{{ old('phone') }}">
                                    <span class="help-block">
                                        <strong class="text-danger error-text phone_error">@error('phone') {{$message}} @enderror</strong>
                                    </span>
                                </div>
                                <div class="contact-comment-info">
                                    <div class="contact-comment-info">
                                        <input name="password" type="password" placeholder="Mật khẩu">
                                        <span class="help-block">
                                        <strong class="text-danger error-text password_error">@error('password') {{$message}} @enderror</strong>
                                    </span>
                                    </div>
                                </div>
                                <div class="send-button text-uppercase text-center">
                                    <button type="submit" value="Submit">Đăng ký</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- / contact-form-->
            </div>
        </div>
    </div>
</section>
@endsection