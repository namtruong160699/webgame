@extends('layouts.master',[
    'page_title' => 'Quản lý thông tin',
    'menu_open' => 'user_info',
    'current_menu' => 'user_info',
])
@section('content')
<section id="blog-archive" class="blog-archive-section pt60 pb40" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row">
            <div class="blog-archive-content">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="side-bar-content ml15">
                            <div class="category mb40">
                                <div class="category-item box">
                                    <ul class="category-item-list">
                                        <li><a href="#">Donation</a><span class="badge pull-right">25</span></li>
                                        <li><a href="#">Education</a><span class="badge pull-right">25</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="side-bar-content ml15">
                            <div class="category mb40">
                                <div class="category-item box">
                                    <ul class="category-item-list">
                                        <li><a href="#">Donation</a><span class="badge pull-right">25</span></li>
                                        <li><a href="#">Education</a><span class="badge pull-right">25</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="side-bar-content ml15">
                            <div class="blog-recent-post mb40">
                                <div class="post-item box">
                                    <div style="margin-bottom: 20px" class="block-title uppercase">
                                        Các trò chơi đã yêu thích
                                    </div>
                                    @foreach($games as $game)
                                        <div class="blog-recent-post-item mb20">
                                            <div class="blog-recent-post-pic mr25 pull-left">
                                                <img style="height: 60px; width: 80px" src="{{asset(pare_url_file($game->avatar))}}" alt="image">
                                            </div>
                                            <div class="blog-recent-post-text">
                                                <div class="blog-recent-post-head">
                                                    <a href="#">{{$game->name}}</a>
                                                </div>
                                                <div class="blog-recent-post-meta mt5">
                                                    <ul class="meta-list">
                                                        <li><a class="black" href="#"><span class="mr5 ti-timer"></span> 26 Apr, 2017</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
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