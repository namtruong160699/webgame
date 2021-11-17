@extends('admin::layouts.master',[
    'page_title' => 'Danh sách game',
    'menu_open' => 'game',
    'current_menu' => 'game',
])
@section('content')
<style>
    .app-icon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 15px;
        overflow: hidden;
    }
    .app-icon img {
        opacity: 1;
        width: 100%;
        height: 100%;
        transition: opacity 200ms ease-in-out;
    }
    img {
        border-style: none;
    }
    .app-title {
        margin-left: 20px;
        font-weight: 500;
    }
    .grid {
        background-color: #f5f5f5;
    }
    .text-gray a {
        color: #101010;
    }
    .base-platforms, .base-platforms li {
        justify-content: center;
        align-items: center;    
    }
    .base-platforms {
        display: flex;
        text-align: center;
        margin: 5px 0 10px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .base-platforms li {
        display: inline-flex;
        margin: 5px 0;
        color: #e1e6ea;
        border-right: 1px solid #dee3e8;
        width: 21%;
    }
    .base-platforms li:last-child {
        border-right: unset;
    }
    .base-platforms li .badge.active {
        fill: #4b577e;
    }
    .base-platforms li .badge {
        fill: #e1e6ea;
        height: 38px;
    }
    .grid-body {
        border-bottom: 1px solid #e1e6ea;
    }
</style>
<div class="page-content-wrapper-inner">
    <div class="viewport-header">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb has-arrow">
                <li class="breadcrumb-item">
                    <a href="#">Game</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Danh sách</li>
            </ol>
        </nav>
    </div>
    <div class="content-viewport">
        <div class="row">
            @foreach($games as $game)
            <div class="col-md-3 col-sm-6 col-6 equel-grid">
                <div class="grid">
                    <div class="grid-body text-gray">
                        <a href="{{route('get.edit.game',$game->id)}}">
                            <div class="d-flex">
                                <div class="app-icon">
                                    <img src="{{asset(pare_url_file($game->avatar))}}">
                                </div>
                                <div class="app-title">
                                    <p>{{$game->name}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <ul class="base-platforms">
                        <li title="iTunes">
                            <svg viewBox="0 0 512 512" fill="white" class="badge ios {{$game->operating_system == 1 ? 'active' : ''}}">
                                <path d="M422.6 281.9h-41.9c-.4-2.4-1.2-4.9-2.5-7.2l-7.7-14.5a5770 5770 0 00-22-41.5h74.1a8 8 0 018 8V274a8 8 0 01-8 7.9zM356 300.3c-5.5 2.3-8.7 4.5-17 .4-8.2-4-49.4-98.8-60-123.5-10.6-24.7-42.5-90.4-32.2-95.5 7.4-3.7 33.8 48 53.5 79.2 19.8 31 61 111.2 66.1 120.3 5 9.2-4.8 16.8-10.3 19zM254 184.7l-95.7 166a8 8 0 01-10.8 2.8l-20.7-11.8A7.8 7.8 0 01124 331l95.7-166a8 8 0 0110.9-2.9l20.7 11.8a8 8 0 012.9 10.8zM89.5 281.9a8 8 0 01-8-7.9v-47.4a8 8 0 018-7.9H173L136.6 282H89.4zm30.7 68.9l20.6 11.8c3.8 2.2 4 6 .4 8.4l-26.8 18c-3.6 2.4-6.2.9-5.7-3.4l3.6-31c.5-4.3 4-6 7.8-4zm157.7-132l29.6 63.1h-87l36.4-63.2h21zm78.8 94.6l11.9-6a8.8 8.8 0 0111.6 3.8L390 330c2.2 4.3.7 9.7-3.3 12.1l-8.5 5a9 9 0 01-12-2.8l-12.5-19.6a7.7 7.7 0 013-11.3zm55.4 82.2c-2.6-8.3-22.5-8.8-31.4-21.3-9-12.5-1.5-18.9 1.6-21.8 36-20.3 29.8 43.1 29.8 43.1z"></path>
                                <path d="M256 512a256 256 0 110-512 256 256 0 010 512zm0-488.7a232.7 232.7 0 100 465.4 232.7 232.7 0 000-465.4z"></path>
                            </svg></li><li title="Google Play">
                            <svg viewBox="0 0 427 512" fill="white" class="badge android {{$game->operating_system == 2 ? 'active' : ''}}">
                                <path d="M396.3 347.4a31 31 0 01-30.3-31.7V192.1a31 31 0 0130.3-31.6 31 31 0 0130.4 31.6v123.6a31 31 0 01-30.4 31.7zm-71 64.2h-27v68.8a31 31 0 01-30.4 31.6 31 31 0 01-30.4-31.6v-68.8h-47.2v68.8A31 31 0 01160 512a31 31 0 01-30.4-31.6v-68.8h-27a24 24 0 01-23.7-24.3V161.4h270v225.9a24 24 0 01-23.6 24.3zm-176-367.2l-25-37.2c-1.4-2.2-1-5.1 1-6.5 1.8-1.3 4.6-.7 6 1.5l26 38.6c17-6.9 36-10.7 56-10.7s39 3.8 56 10.7l26-38.6c1.4-2.2 4.2-2.8 6.1-1.5 2 1.4 2.3 4.3.9 6.5l-25 37.2c39.7 18.9 67.5 54.9 71 96.9h-270c3.6-42 31.4-78 71-97zm122.8 58.5c8.3 0 15-6.8 15-15.3s-6.7-15.3-15-15.3c-8.2 0-14.9 6.8-14.9 15.3s6.7 15.3 15 15.3zm-115.7 0c8.2 0 14.9-6.8 14.9-15.3s-6.7-15.3-15-15.3c-8.2 0-14.9 6.8-14.9 15.3s6.7 15.3 15 15.3zm-126 244.5A31 31 0 010 315.7V192.1a31 31 0 0130.3-31.6A31 31 0 0160.7 192v123.6a31 31 0 01-30.4 31.7z"></path>
                            </svg></li><li title="Windows Phone">
                            <svg viewBox="0 0 431 512" fill="white" class="badge windows-phone">
                                <path d="M358.8 512L0 439.2V174.4l358.8-72.8 71.7 26.5v357.4L358.8 512zm-202-289.3L77 234.1v61.7h79.7v-73zm0 83.3H77v67l79.7 11.4V306zM267 207.2l-100.3 15v73.6H267v-88.6zm0 98.8H166.8v79L267 400v-94zm13.6-215.5c0-29.8.6-44-33.5-39a122 122 0 00-2-13.4c41.2-6.2 48.4 6.2 48.4 52.4v8.3l-13 2.7v-11zm-111 33.5v-20.3c0-42.1 15.8-48.8 37.6-56.5a71 71 0 011.4 13.7c-19 8.3-26.4 14.3-26 43v17.5l-13 2.6zm52.1-62c0-22.2-3.4-57-56.7-44.4-35.4 8.4-54.6 20-54.2 57.6V136l-13 2.6V73.9c0-55 32.6-63.3 64.6-70.7C221.8-10.4 234.7 21 234.9 63v47.8l-13.1 2.6V62z"></path>
                            </svg></li><li title="Windows">
                            <svg viewBox="0 0 512 512" fill="white" class="badge windows">
                                <path d="M241.4 472.4v-210H512v249.5l-270.6-39.5zm0-432.8L512 0v235.3H241.4V39.6zM0 262.3h214.6v208.4L-.1 440.4v-178zM0 71.5l214.6-30.3v194.1H-.1V71.5z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@stop