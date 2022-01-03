@extends('layouts.master',[
    'page_title' => 'XGame - Danh mục trò chơi',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
<section id="event" class="event-list" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row section-content">
            <div class="event-list-content">
                <div class="row">
                    @if(\Request::get('search') != null)
                    <div class="col-sm-12">
                        <div class="search-container box">
                            <form action="{{route('get.game.list')}}" class="search-form">
                                <input onkeyup="buttonUp();" placeholder="Search for a game" type="search" value="{{\Request::get('search')}}" name="search" id="search" class="form-control query fake-button">
                                <i class="ti-search"></i>
                                <button class="search-btn" type="submit">
                                    Tìm kiếm
                                </button>
                            </form>
                            <div class="advanced-serach-options">
                                <div class="title">Tùy chọn tìm kiếm nâng cao</div>
                                <div class="column-container">
                                    <div class="column">
                                        <div class="gray-select timeframe-select open">
                                            <select class="select-header" name="" id="" style="border: unset">
                                                <option value="">Tất cả các thể loại</option>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="gray-select timeframe-select open">
                                            <div class="select-header">
                                                Tất cả các nhãn
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="gray-select timeframe-select open">
                                            <div class="select-header">
                                                Tất cả các Công nghệ
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="gray-select timeframe-select open">
                                            <div class="select-header">
                                                Tất cả các khung thời gian
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @else
                    <div class="col-sm-12">
                        <form class="tree-most" id="form_order" method="get">
                            <div class="orderby-wrapper pull-right">
                                <label>Sắp xếp</label>
                                <select name="orderby" class="orderby">
                                    <option {{\Request::get('orderby') == "md" || !Request::get('orderby') ? "selected='selected'" : ""}} value="md" selected="selected">Mặc định</option>
                                    <option {{\Request::get('orderby') == "desc" ? "selected='selected'" : ""}} value="desc">Mới nhất</option>
                                    <option {{\Request::get('orderby') == "asc" ? "selected='selected'" : ""}} value="asc">Cũ nhất</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    @endif
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
                                        <!-- @if($game->operating_system == 1)
                                        <p class="unity_webgl p-custom">
                                            WebGL
                                        </p>
                                        @else
                                        <p class="html5 p-custom">
                                            HTML5
                                        </p>
                                        @endif -->
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
        </div>
    </div>
</section>
@endsection
@section('script')
    <script>
        $(function () {
            $('.orderby').change(function () {
                $("#form_order").submit();
            })
        })
    </script>
@stop