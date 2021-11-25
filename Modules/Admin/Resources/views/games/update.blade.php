@extends('admin::layouts.master',[
    'page_title' => 'Cập nhật game',
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
                <li class="breadcrumb-item active" aria-current="page">Cập nhật</li>
            </ol>
        </nav>
    </div>
    <div class="content-viewport">
        <div class="row">
            <div class="col-lg-12">
                <div class="grid">
                    <p class="grid-header">Chỉnh sửa game</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Danh mục</label>
                                            <select name="category_id" class="form-control">
                                                <option value="">----</option>
                                                @foreach($categories as $category)
                                                    <option value="{{$category->id}}" {{$game->category_id == $category->id?"selected='selected'" : ""}}>{{$category->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Tên game</label>
                                            <input type="text" class="form-control" value="{{$game->name}}" id="name" name="name" placeholder="Enter your name">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Mô tả</label>
                                            <textarea class="form-control" name="description" id="description" cols="30" rows="3" placeholder="Thêm mô tả chi tiết hơn...">{{$game->description}}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Phiên bản</label>
                                            <select class="custom-select" id="operating_system" name="operating_system">
                                                <option selected="selected">Chọn phiên bản</option>
                                                <option value="1" {{$game->operating_system == 1?"selected='selected'" : ""}}>IOS</option>
                                                <option value="2" {{$game->operating_system == 2?"selected='selected'" : ""}}>Android</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <img id="out_img" src="{{isset($game->avatar) ? asset(pare_url_file($game->avatar)) : asset('images/unnamed.png')}}"" alt="" style="width: 100px;height: 100px;display: inline;border-radius:25px">
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
                                        <label for="">Video</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="video" name="video">
                                                <label class="custom-file-label" for="">Video</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label>File Upload</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile" name="file_game">
                                                <label class="custom-file-label" for="customFile">Only zipped (.zip) files acceptable</label>
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
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
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
<script>
    CKEDITOR.on('dialogDefinition', function (ev) {
        // Take the dialog name and its definition from the event data.
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        // Check if the definition is from the dialog we're
        // interested in (the 'image' dialog).
        if (dialogName == 'image') {
            // Get a reference to the 'Image Info' tab.
            var infoTab = dialogDefinition.getContents('info');
            // Remove unnecessary widgets/elements from the 'Image Info' tab.
            infoTab.remove('browse');
            infoTab.remove('txtHSpace');
            infoTab.remove('txtVSpace');
            infoTab.remove('txtBorder');
            infoTab.remove('txtAlt');
            infoTab.remove('txtWidth');
            infoTab.remove('txtHeight');
            infoTab.remove('htmlPreview');
            infoTab.remove('cmbAlign');
            infoTab.remove('ratioLock');
        }
    });
    CKEDITOR.replace('description');
</script>
@stop