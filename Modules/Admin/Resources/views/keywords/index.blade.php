@extends('admin::layouts.master',[
    'page_title' => 'Danh sách từ quá',
    'menu_open' => 'keyword',
    'current_menu' => 'keyword',
])
@section('content')
<div class="page-content-wrapper-inner">
    <div class="viewport-header">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb has-arrow">
                <li class="breadcrumb-item">
                    <a href="#">Từ khoá</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Danh sách</li>
            </ol>
        </nav>
    </div>
    <div class="content-viewport">
        <div class="row">
            <div class="col-lg-12">
                <div class="grid">
                    <p class="grid-header">Danh sách từ khoá</p>
                    <div class="item-wrapper">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Hot</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @if(isset($keywords))
                                    @foreach($keywords as $keyword)
                                    <tr>
                                        <td>{{$keyword->id}}</td>
                                        <td>{{$keyword->name}}</td>
                                        <td>{{$keyword->description}}</td>
                                        <td>
                                            @if($keyword->hot == 1)
                                                <a href="{{route('admin.get.hot.keyword', $keyword->id)}}">
                                                    <label class="badge badge-success">Hot</label>
                                                </a>
                                            @else
                                                <a href="{{route('admin.get.hot.keyword', $keyword->id)}}">
                                                    <label class="badge badge-danger">None</label>
                                                </a>
                                            @endif
                                        </td>
                                        <td>{{$keyword->created_at}}</td>
                                        <td>
                                            <a title="Chỉnh sửa" href="{{route('admin.get.edit.keyword', $keyword->id)}}">
                                                <i style="font-size: 1.1875rem" class="mdi mdi-lead-pencil"></i>
                                            </a>
                                            <a title="Xoá" href="{{route('admin.get.delete.keyword', $keyword->id)}}">
                                                <i style="font-size: 1.1875rem" class="mdi mdi-delete"></i>
                                            </a>
                                        </td>
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