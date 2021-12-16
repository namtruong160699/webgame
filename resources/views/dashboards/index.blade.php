@extends('layouts.master',[
    'page_title' => 'XGame - Các trò chơi trực tuyến',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
<section id="event" class="event-list" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row section-content">
            <div class="event-list-content">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="reply-comment box">
                            <div class="top-categories">
                                <div class="row single-line">
                                    <ul>
                                        @foreach($count_games_by_category as $category)
                                        <li class="inactive fighting li-category" style="background-color: {{$category->color}}">
                                            <a class="fighting" href="{{route('get.list.game.client',[$category->slug,$category->id])}}">
                                                <span class="name">{{$category->name}}</span>
                                                <span class="number">{{$category->count}} game</span>
                                            </a>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <h3>Trò chơi ({{$countGame}})</h3>
                    </div>
                    @foreach($games as $game)
                        <div class="col-sm-2">
                            <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                <div class="event-list-item colmd4">
                                    <div class="event-list-pic video2">
                                        <img class="img-custom overlayImage" data-original="{{asset(pare_url_file($game->avatar))}}" alt="image">
                                        <video class="thevideo" loop muted poster="{{asset(pare_url_file($game->avatar))}}" onmouseout="this.pause()">
                                            <source src="{{asset('uploads/video/'.$game->video)}}" type="video/mp4">
                                        </video>
                                    </div>
                                    <div class="event-text clearfix" style="margin-top: -7px">
                                        <p class="title-custom p-custom">{{$game->name}}</p>
                                        <div class="technology">
                                            @if($game->operating_system == 1)
                                            <p class="unity_webgl p-custom">
                                                WebGL
                                            </p>
                                            @else
                                            <p class="html5 p-custom">
                                                HTML5
                                            </p>
                                            @endif
                                        </div>
                                        <p class="plays-count p-custom">{{$game->played}} chơi</p>
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