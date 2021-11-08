@extends('layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
<style>
    .canvas-unity {
        height: 700px;
    }

    .gameItem {
        padding: 10px 8px;
        float: left;
        width: 120px;
        text-align: left;
    }

    .gameItemImg {
        width: 120px;
        height: 100px;
    }

    .gameItemName-b, .gameItemName-g, .gameItemName-o {
        width: 107px;
        padding: 5px 5px 0 7px;
    }

    iframe {
        border: unset;
    }
    
    p img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80% !important;
        height: auto !important;
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    p {
        word-break: break-all;
    }
</style>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="page-content-wrapper-inner">
                    <div class="content-viewport">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-12 equel-grid" style="text-align: center">
                                <h3 style="width: 100%;" id="gamename"></h3>
                            </div>
                            <div class="col-md-12 col-sm-12 col-12 equel-grid">
                                <div class="canvas-unity" style="width: 100%;">
                                    <iframe src="filegame/{{$file_game}}/index.html" title="Iframe Game"
                                            style="width: 100%;height: 100%;"></iframe>
                                </div>
                                @if($game)
                                    <p>{!! $game->description !!}</p>
                                @endif
                            </div>
                        </div>
                        <div class="row">
                            @foreach($games as $game)
                                <div class="col-md-2 col-sm-6 col-6 equel-grid">
                                    <div class="gameItem">
                                        <div class="gameItemImg">
                                            <a href="{{route('get.demo.view',$game->file_game)}}">
                                                <img src="{{asset(pare_url_file($game->avatar))}}" width="120" height="100">
                                            </a>
                                        </div>
                                        <div class="gameItemName-o">
                                            <a href="{{route('get.demo.view',$game->file_game)}}">{{$game->name}}</a>
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
</section>
@endsection