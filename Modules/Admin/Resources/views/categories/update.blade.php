@extends('admin::layouts.master',[
    'page_title' => 'Cập nhật danh mục',
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
                <li class="breadcrumb-item active" aria-current="page">Cập nhật</li>
            </ol>
        </nav>
    </div>
    <div class="content-viewport">
        <div class="row">
            <div class="col-lg-12">
                <div class="grid">
                    <p class="grid-header">Cập nhật danh mục</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Tên danh mục</label>
                                            <input type="text" class="form-control" id="name" name="name" value="{{$category->name}}" placeholder="Enter your name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Icon</label>
                                            <input type="text" class="form-control" placeholder="fa fa-home" value="{{$category->icon}}" name="icon">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Mã màu</label>
                                            <input type="color" class="form-control" name="color" value="{{old('color',isset($category->color) ? $category->color : '#ed6868')}}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Meta Title</label>
                                            <input type="text" class="form-control" placeholder="Meta Title" value="{{$category->title_seo}}" name="title_seo">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Meta Description</label>
                                            <input type="text" class="form-control" placeholder="Meta Description" value="{{$category->description_seo}}" name="description_seo">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-sm btn-primary">Xác nhận</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop