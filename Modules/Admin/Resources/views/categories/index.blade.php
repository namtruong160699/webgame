@extends('admin::layouts.master',[
    'page_title' => 'Danh sách danh mục',
    'menu_open' => 'category',
    'current_menu' => 'category',
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
                    <p class="grid-header">Danh sách danh mục game</p>
                    <div class="item-wrapper">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Tên danh mục</th>
                                        <th>Progress</th>
                                        <th>Hiện trang chủ</th>
                                        <th>Title Seo</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @if(isset($categories))
                                    @foreach($categories as $category)
                                    <tr>
                                        <td class="d-flex align-items-center border-top-0">
                                            <img class="profile-img img-sm img-rounded mr-2" src="{{asset('admin/images/profile/male/image_5.png')}}" alt="profile image" /> <span>{{$category->name}}</span>
                                        </td>
                                        <td>
                                            <div class="progress progress-slim"><div class="progress-bar bg-info progress-bar-striped" role="progressbar" style="width: 35%;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div></div>
                                        </td>
                                        <td>
                                            <a href="{{route('admin.get.action.category',['homepage',$category->id])}}">
                                                <label class="{{$category->getHomePage($category->show_homapage)['class']}}">{{$category->getHomePage($category->show_homapage)['name']}}</label>
                                            </a>
                                        </td>
                                        <td>{{$category->title_seo}}</td>
                                        <td>
                                            <a title="Chỉnh sửa" href="{{route('admin.get.edit.category', $category->id)}}">
                                                <i style="font-size: 1.1875rem" class="mdi mdi-lead-pencil"></i>
                                            </a>
                                            <a title="Xoá" href="#">
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