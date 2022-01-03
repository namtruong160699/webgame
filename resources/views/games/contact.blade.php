@extends('layouts.master',[
    'page_title' => 'XGame - Liên hệ',
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
<section id="contact-us" class="contact-us-section">
    <div class="container">
        <div class="row section-content">
            <div class="contact-us-section-content">
                <div class="contact-form">
                    <div class="contact-form-title">
                        <div class="section-title text-center">
                            <div class="section-title-text text-uppercase">
                                <p>LIÊN HỆ</p>
                            </div>
                            <!-- <div class="section-title-text">
                                <h2>Drop Us a Line</h2>
                            </div> -->
                        </div>
                    </div>
                    <div class="contact-comment-form pb50 clearfix">
                        <div class="comment-form">
                            <form id="submit_form" action="" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="contact-comment-info">
                                    <input class="email" name="email" type="email" placeholder="E-mail của bạn">
                                    <span class="help-block">
                                        <strong class="text-danger error-text email_error">@error('email') {{$message}} @enderror</strong>
                                    </span>
                                </div>
                                <div class="contact-comment-info">
                                    <input style="display:none" type="text" name="game_id" value="{{$game->id}}">
                                    <input readonly="readonly" class="game" name="game" type="text" value="{{'Game '.$game->name}}">
                                </div>
                                <div class="contact-comment-info mt25">
                                    <textarea id="content" name="content" placeholder="Tin nhắn" rows="7" cols="30"></textarea>
                                    <span class="help-block">
                                        <strong class="text-danger error-text content_error">@error('content') {{$message}} @enderror</strong>
                                    </span>
                                </div>
                                {!! NoCaptcha::display() !!}
                                <span class="help-block">
                                    <strong class="text-danger error-text g-recaptcha-response_error">@error('g-recaptcha-response') {{$message}} @enderror</strong>
                                </span>
                                <div class="send-button text-uppercase text-center">
                                    <button style="margin-top: 100px" type="submit" value="Submit">Gửi tin nhắn</button> 
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