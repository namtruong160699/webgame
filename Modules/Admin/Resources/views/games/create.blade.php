@extends('admin::layouts.master',[
    'page_title' => 'Thêm mới game',
    'menu_open' => 'game',
    'current_menu' => 'game',
])
@section('content')
<div class="page-content-wrapper-inner">
    <div class="viewport-header">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb has-arrow">
                <li class="breadcrumb-item">
                    <a href="#">Game</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Thêm mới</li>
            </ol>
        </nav>
    </div>
    <div class="content-viewport">
        <div class="row">
            <div class="col-lg-12">
                <div class="grid">
                    <p class="grid-header">Thêm mới game</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Tên game</label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Phiên bản</label>
                                            <select class="custom-select" id="operating_system" name="operating_system">
                                                <option selected="selected">Chọn phiên bản</option>
                                                <option value="1">IOS</option>
                                                <option value="2">Android</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <img id="out_img" src="{{asset('images/unnamed.png')}}" alt="" style="width: 100px;height: 100px;display: inline;border-radius:25px">
                                        </div>
                                        <div class="form-group">
                                            <label>Ảnh đại diện</label>
                                            <div class="input-group">
                                                <div class="custom-file">
                                                    <input type="file" name="avatar" id="input_img" class="custom-file-input" accept="image/*" onChange="validate(this.value)"/>
                                                    <label class="custom-file-label" for="exampleInputFile">Chọn ảnh</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label>File Upload</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile" name="file_game">
                                                <label class="custom-file-label" for="customFile">Choose file</label>
                                            </div>
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
@section('script')
<script>
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#out_img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }
    $("#input_img").change(function() {
        readURL(this);
    });
</script>
@stop