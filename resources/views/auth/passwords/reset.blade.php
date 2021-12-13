@extends('layouts.master')
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
                            <form id="contact_form" action="#" method="POST">
                                @csrf
                                <div class="contact-comment-info">
                                    <input name="password" type="password" placeholder="Mật khẩu mới">
                                    @if($errors->has('password'))
                                        <span class="error-text">
                                            {{$errors->first('password')}}
                                        </span>
                                    @endif
                                </div>
                                <div class="contact-comment-info">
                                    <div class="contact-comment-info">
                                        <input name="password_confirm" type="password" placeholder="Xác nhận mật khẩu">
                                        @if($errors->has('password_confirm'))
                                            <span class="error-text">
                                                {{$errors->first('password_confirm')}}
                                            </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="send-button text-uppercase text-center">
                                    <button type="submit" value="Submit">Lưu thay đổi</button> 
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
