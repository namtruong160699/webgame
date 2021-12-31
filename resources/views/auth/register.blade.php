@extends('layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
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
                            <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="contact-comment-info">
                                    <input class="name" name="name" type="text" placeholder="Tên của bạn">
                                </div>
                                <div class="contact-comment-info">
                                    <input class="email" name="email" type="email" placeholder="Email của bạn">
                                </div>
                                <div class="contact-comment-info">
                                    <input class="email" name="phone" type="number" placeholder="Số điện thoại của bạn">
                                </div>
                                <div class="contact-comment-info">
                                    <div class="contact-comment-info">
                                        <input class="email" name="password" type="password" placeholder="Mật khẩu">
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