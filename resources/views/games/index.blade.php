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
                                <input onkeyup="buttonUp();" placeholder="Tìm kiếm..." type="search" value="{{\Request::get('search')}}" name="search" id="search" class="form-control query fake-button">
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