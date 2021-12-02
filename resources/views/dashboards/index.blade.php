@extends('layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('style')
    <style>
        .col-sm-2 {
            padding-right: unset;
            padding-left: unset;
        }
        .box {
            background-color: #fff;
        }
        .section-content {
            padding: 10px 0px 80px;
        }
        .top-categories {
            padding: 13px 15px 0;
        }
        .top-categories .row.single-line {
            height: 53px;
            padding: 2px 0 0;
        }
        .box .row:last-child {
            margin-bottom: 0;
        }
        .box .row:first-child {
            margin-top: 0;
        }
        .top-categories ul {
            display: -webkit-box;
            display: -moz-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            -moz-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            -o-flex-wrap: wrap;
            flex-wrap: wrap;
            margin: 0 -5px;
            margin-block-end: 0;
            margin-block-start: 0;
            margin-inline-end: 0;
            margin-inline-start: 0;
            padding: 0;
            padding-inline-start: 0;
        }
        .top-categories .row.single-line ul li {
            margin: 0 5px 100px;
        }
        .top-categories li.fighting {
            background-color: #cb7df6;
            box-shadow: 0 8px 18px -8px rgb(203 125 246 / 70%);
        }
        .top-categories li.girls {
            background-color: #ff5b88;
            box-shadow: 0 8px 18px -8px rgb(255 91 136 / 70%);
        }
        .top-categories li.strategy {
            background-color: #40c914;
            box-shadow: 0 8px 18px -8px rgb(64 201 20 / 70%);
        }
        .top-categories ul li {
            border-radius: 12px;
            -moz-border-radius: 12px;
            -webkit-border-radius: 12px;
            -webkit-transition: box-shadow 0.2s,transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
            -moz-transition: box-shadow 0.2s,transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
            -ms-transition: box-shadow 0.2s,transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
            -o-transition: box-shadow 0.2s,transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
            transition: box-shadow 0.2s,transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
            cursor: pointer;
            height: 40px;
            list-style: none;
            margin: 0 5px 10px;
            position: relative;
            will-change: transform;
        }
        .top-categories ul li a {
            display: table-cell;
            font-weight: bold;
            height: 40px;
            padding: 0 12px 0 10px;
            vertical-align: middle;
        }
        .top-categories ul li a .name {
            font-size: 13px;
            font-weight: bold;
            line-height: 15px;
        }
        .top-categories ul li a .name {
            color: #fff;
            display: block;
            margin: 0 0 0 23px;
            white-space: nowrap;
        }
        .top-categories ul li a::after {
            font-family: 'fontello';
            font-size: 15px;
            font-weight: normal;
            line-height: 15px;
            position: absolute;
        }
        .top-categories ul li a .number {
            font-size: 10px;
            font-weight: 500;
            margin-top: 1px;
        }
        .top-categories ul li a .number {
            color: #fff;
            display: block;
            margin: 0 0 0 23px;
            white-space: nowrap;
        }
        .reply-comment {
            padding: unset;
        }
    </style>
@endsection
@section('content')
<section id="event" class="event-list" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row section-content">
            <div class="event-list-content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="reply-comment box">
                            <div class="top-categories">
                                <div class="row single-line">
                                    <ul>
                                        <li class="inactive fighting li-category">
                                            <a class="fighting" href="">
                                                <span class="name">Đối kháng</span>
                                                <span class="number">2,125 game</span>
                                            </a>
                                        </li>
                                        <li class="inactive girls li-category">
                                            <a class="girls" title="Cho Con Gái" href="/categories/girls">
                                                <span class="name">Cho Con Gái</span>
                                                <span class="number">24,851 game</span>
                                            </a>
                                        </li>
                                        <li class="inactive strategy li-category" style="display: inline-block;">
                                            <a class="strategy" title="Chiến Thuật &amp; Nhập Vai" href="/categories/strategy">
                                                <span class="name">Chiến Thuật &amp; Nhập Vai</span>
                                                <span class="number">3,665 game</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    @foreach($games as $game)
                        <div class="col-sm-2">
                            <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                <div class="event-list-item colmd4">
                                    <div class="event-list-pic">
                                        <img class="img-custom" data-original="{{asset(pare_url_file($game->avatar))}}" alt="image">
                                    </div>
                                    <div class="event-text clearfix ">
                                        <p class="title-custom">{{$game->name}}</p>
                                        <p class="plays-count">{{$game->played}} chơi</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="blog-pagination text-center">
                @if($games->lastPage() > 1)
                    <ul class="pagination">
                        <li class="{{ ($games->currentPage() == 1) ? ' disabled' : '' }}"><a href="{{ $games->url(1) }}"><span class="ti-angle-double-left"></span></a></li>
                        @for($i = 1; $i <= $games->lastPage(); $i++)
                            <li class="{{ ($games->currentPage() == $i) ? ' active' : '' }}"><a href="{{ $games->url($i) }}">{{ $i }}</a></li>
                        @endfor
                        <li class="{{ ($games->currentPage() == $games->lastPage()) ? ' disabled' : '' }}"><a href="{{ $games->url($games->currentPage()+1) }}"><span class="ti-angle-double-right"></span></a></li>
                    </ul>
                @endif
            </div>
            <div style="margin-top: 20px" class="event-list-content" id="games_played"></div>
        </div>
    </div>
</section>
@endsection
@section('script')
    <script>
        $(function() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            let routeRender = '{{route('get.games.played')}}';
            checkRender = false;
            $(document).on('scroll', function() {
                if($(window).scrollTop() > 150 && checkRender == false)
                {
                    checkRender = true;
                    let games = localStorage.getItem('games');
                    games = $.parseJSON(games);
                    if(games.length > 0)
                    {
                        $.ajax({
                            url : routeRender,
                            method : "POST",
                            data : { id : games},
                            success : function (result) {
                                $("#games_played").html('').append(result.data)
                            }
                        });
                    }
                }
            });
        });
    </script>
@endsection