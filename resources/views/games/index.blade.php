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
        .col-sm-12 {
            padding-right: 10px;
            padding-left: 10px;
        }
        .box {
            background-color: #fff;
            margin: 11px 0 0;
            padding: 25px 20px 15px;
        }
        .section-content {
            padding: 10px 0px 80px;
        }
        .search-form {
            height: 48px;
            position: relative;
            width: 100%;
        }
        .search-container .search-form .form-control {
            -webkit-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
            background: #f2f2f2;
            border: 0;
            border-radius: 8px;
            box-shadow: none;
            color: #333;
            font-size: 20px;
            font-weight: 500;
            height: 100%;
            padding: 0 90px 0 45px;
            width: 100%;
        }
        .form-control {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
            box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
            -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        }
        .search-container .advanced-serach-options {
            margin-top: 25px;
        }
        .search-container .advanced-serach-options .title {
            color: #999;
            font-size: 11px;
            font-weight: bold;
            height: 14px;
            letter-spacing: 0;
            line-height: 14px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .search-container .advanced-serach-options .column-container {
            display: -webkit-box;
            display: -moz-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
            -webkit-box-pack: space-between;
            -webkit-justify-content: space-between;
            -ms-flex-pack: space-between;
            margin: 0 -10px;
        }
        .search-container .advanced-serach-options .column-container .column {
            margin: 0 10px;
            width: 25%;
        }
        .gray-select {
            position: relative;
        }
        .gray-select .select-header {
            display: -webkit-box;
            display: -moz-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            background: rgba(0,0,0,0.05);
            border-radius: 8px;
            color: #666;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            height: 36px;
            line-height: 36px;
            padding: 0 30px 0 14px;
            position: relative;
            width: 100%;
        }
        .gray-select .select-header::after {
            color: #666;
            content: "";
            font-family: 'fontello';
            font-size: 18px;
            font-weight: normal;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            position: absolute;
            right: 10px;
            top: 50%;
        }
        .search-container .search-form .ti-search {
            color: #999;
            font-size: 18px;
            left: 15px;
            position: absolute;
            top: 16px;
        }
        .search-container .search-form .search-btn {
            background: #333;
            border: 0;
            border-radius: 8px;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            height: 36px;
            outline: none;
            padding: 0 15px;
            position: absolute;
            right: 6px;
            text-align: center;
            top: 6px;
        }
        .orderby {
            background-image: -webkit-linear-gradient(top, #fff 0%, #e5e5e5 100%);
            background-image: -o-linear-gradient(top, #fff 0%, #e5e5e5 100%);
            background-image: linear-gradient(to bottom, #fff 0%, #e5e5e5 100%);
            background-repeat: repeat-x;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFE5E5E5', GradientType=0);
            border: 1px solid #c6c6c6;
            display: inline-block;
            font-size: 12px;
            font-weight: bold;
            height: 23px;
            margin-left: 5px;
            padding: 0 10px;
            width: auto;
        }
    </style>
@endsection
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
                                            <div class="select-header">
                                                Tất cả các khung thời gian
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
                                    <div class="column">
                                        <div class="gray-select timeframe-select open">
                                            <div class="select-header">
                                                Tất cả các khung thời gian
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
@section('script')
    <script>
        $(function () {
            $('.orderby').change(function () {
                $("#form_order").submit();
            })
        })
    </script>
@stop