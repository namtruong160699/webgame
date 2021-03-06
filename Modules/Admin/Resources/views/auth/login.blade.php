<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Xgame</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{asset('Admin/vendors/iconfonts/mdi/css/materialdesignicons.css')}}" />
    <link rel="stylesheet" href="{{asset('Admin/vendors/css/vendor.addons.css')}}" />
    <!-- endinject -->
    <!-- vendor css for this page -->
    <!-- End vendor css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="{{asset('Admin/css/shared/style.css')}}" />
    <!-- endinject -->
    <!-- Layout style -->
    <link rel="stylesheet" href="{{asset('Admin/css/demo_1/style.css')}}">
    <!-- Layout style -->
    <link rel="shortcut icon" href="{{asset('Admin/images/favicon.ico')}}" />
    <!-- Notify -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/styles/metro/notify-metro.css"/>
  </head>
  <body>
    <div class="authentication-theme auth-style_1">
      <div class="row">
        <div class="col-12 logo-section" style="margin-bottom: unset;">
          <a href="../../index.html" class="logo">
            <img src="{{asset('Admin/images/logo_xgame.png')}}" alt="logo" />
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-7 col-sm-9 col-11 mx-auto">
          <div class="grid">
            <div class="grid-body">
              <div class="row">
                <div class="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">
                  <form enctype="multipart/form-data" method="POST" action="">
                    @csrf
                    <div class="form-group input-rounded">
                      <input type="text" class="form-control" name="username" placeholder="Tên đăng nhập" />
                    </div>
                    <div class="form-group input-rounded">
                      <input type="password" class="form-control" name="password" placeholder="Mật khẩu" />
                    </div>
                    <div class="form-inline">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class="form-check-input" />Nhớ tài khoản <i class="input-frame"></i>
                        </label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block"> Đăng nhập </button>
                  </form>
                  <div class="signup-link">
                    <p>Vẫn chưa có tài khoản ?</p>
                    <a href="#">Đăng ký</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="auth_footer">
        <p class="text-muted text-center">© XGame 2021</p>
      </div>
    </div>
    <!--page body ends -->
    <!-- SCRIPT LOADING START FORM HERE /////////////-->
    <!-- plugins:js -->
    <script src="{{asset('Admin/vendors/js/core.js')}}"></script>
    <script src="{{asset('Admin/vendors/js/vendor.addons.js')}}"></script>
    <!-- endinject -->
    <!-- Vendor Js For This Page Ends-->
    <!-- Vendor Js For This Page Ends-->
    <!-- build:js -->
    <script src="{{asset('Admin/js/template.js')}}"></script>
    <!-- endbuild -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
    <script>
      @if(session('danger'))
        $.notify('{{session('danger.message')}}', '{{session('danger.type')}}');
      @endif
    </script>
  </body>
</html>