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
                        <h3>Games ({{$countGame}})</h3>
                    </div>
                    @foreach($games as $game)
                        <div class="col-md-2 col-sm-3 col-game">
                            <div id="item_{{$game->id}}" class="item thumb videobox">
                                <input type="hidden" name="for-girls-{{$game->id}}" id="for-girls-{{$game->id}}" value="false">
                                <div class="thumbarea">
                                    <div class="microthumb"></div>
                                    <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                        <div class="thumb-img-container video2">
                                            <img class="thumb playable img-custom overlayImage" alt="{{$game->name}}" src="{{asset(pare_url_file($game->avatar))}}">
                                            <video class="thevideo" loop muted onmouseout="this.pause()">
                                                <source src="{{asset('uploads/video/'.$game->video)}}" type="video/mp4">
                                            </video>
                                        </div>
                                    </a>
                                </div>
                                <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                    <div class="infos">
                                    <p class="title ltr">{{$game->name}}</p>
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
                                        @if($game->isNew())
                                            <span class="new-item-icon">New</span>
                                        @endif
                                    </div>
                                    <p class="plays-count">{{number_format($game->played)}} chơi</p>
                                    </div>
                                </a>
                            </div>
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