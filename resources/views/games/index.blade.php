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
    </style>
@endsection
@section('content')
<section id="event" class="event-list" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row section-content">
            <div class="event-list-content">
                <div class="row">
                    @foreach($games as $game)
                        <div class="col-sm-2">
                            <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                <div class="event-list-item colmd4">
                                    <div class="event-list-pic">
                                        <img class="img-custom" src="{{asset(pare_url_file($game->avatar))}}" alt="image">
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
        </div>
    </div>
</section>
@endsection