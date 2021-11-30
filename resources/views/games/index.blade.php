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
        </div>
    </div>
</section>
@endsection