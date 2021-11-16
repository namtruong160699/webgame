@extends('layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
<style>
    .pic_box, .pic_box a {
        overflow: hidden;
    }
    .pic_box {
        position: relative;
        display: block;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .pic_box {
        width: 100%;
        height: 117px;
    }
    .pic_box {
        -o-object-fit: cover;
        object-fit: cover;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .pic_box {
        overflow: hidden;
    }
    .pic_box {
        position: relative;
        display: block;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .thumbnail-image {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 0;
        -ms-flex: 0 1 180px;
        flex: 0 1 180px;
        height: 117px;
        overflow: hidden;
    }
    .b-loader, .b-loading:before {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .pic_box img {
        width: 100%;
        height: 100%;
        -webkit-transition: all .3s;
        transition: all .3s;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .video-thumb, .pic_box .video-thumb {
        position: absolute;
        top: 50%!important;
        left: 50%!important;
        transform: translate(-50%,-50%);
        width: auto!important;
        height: 109%!important;
        border-radius: 10px 10px 0 0;
    }
    .inn_box_panel1_box .txt_box {
        background-color: transparent;
    }
    .inn_panel1_box .txt_box, .inn_panel1_box .txt_box h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .inn_panel1_box .txt_box, .inn_panel1_box .txt_box h4 {
        font: 700 16px/17px'Open Sans',sans-serif;
        color: #fff;
        background: #333;
    }
    .txt_box a {
        font-size: 13px;
        line-height: 15px;
        color: #fff;
    }
    .txt_box {
        z-index: 1;
        display: block;
        text-align: left;
    }
    .txt_box {
        min-height: 0;
        padding: 8px 12px;
    }
    .txt_box {
        width: 100%;
        background: #333!important;
        background-size: 100% 100%!important;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .col-lg-2 {
        padding-top: 16px;
        padding-left: 8px;
        padding-right: 8px;
    }
</style>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="page-content-wrapper-inner">
                    <div class="content-viewport">
                        <div class="row">
                            @foreach($games as $game)
                            <div class="col-lg-2 col-md-6 col-sm-6">
                                <div class="inn_box_panel1_box hasVideo">
                                    <a href="{{route('get.games.play',[$game->file_game,$game->id])}}" class="pic_box" data-nid="24695">
                                        <div class="thumbnail-image">
                                            <div class="b-loader">
                                                <img class="b-lazy b-loaded" src="{{asset(pare_url_file($game->avatar))}}" alt="">
                                            </div>
                                        </div>
                                        <video class="video-thumb" autoplay="" muted="" loop="" playsinline="" style="display: none;">
                                            <source src="https://www.addictinggames.com/sites/default/files/evio275x157.mp4" type="video/mp4">
                                        </video>
                                    </a>
                                    <h4 class="txt_box">
                                        <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">{{$game->name}}</a>
                                    </h4>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection