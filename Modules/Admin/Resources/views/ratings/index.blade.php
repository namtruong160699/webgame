@extends('admin::layouts.master',[
    'page_title' => 'Danh sách đánh giá',
    'menu_open' => 'rating',
    'current_menu' => 'rating',
])
@section('content')
<div class="page-content-wrapper-inner">
    <div class="viewport-header">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb has-arrow">
                <li class="breadcrumb-item">
                    <a href="#">Danh mục</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Danh sách</li>
            </ol>
        </nav>
    </div>
    <div class="content-viewport">
        <div class="row">
            <div class="col-lg-12">
                <div class="grid">
                    <p class="grid-header">Danh sách đánh giá</p>
                    <div class="item-wrapper">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên TV</th>
                                        <th>Game</th>
                                        <th>Nội dung</th>
                                        <th>Đánh giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @if(isset($ratings))
                                    @foreach($ratings as $rating)
                                    <tr>
                                        <td>{{$rating->id}}</td>
                                        <td>{{isset($rating->user->name) ? $rating->user->name : '[N\A]'}}</td>
                                        <td><a href="#">{{isset($rating->game->name) ? $rating->game->name : '[N\A]'}}</a></td>
                                        <td>{{$rating->ra_content}}</td>
                                        <td>{{$rating->ra_number}}</td>
                                    </tr>
                                    @endforeach
                                @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop