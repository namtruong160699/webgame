<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ $page_title }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{asset('Admin/vendors/iconfonts/mdi/css/materialdesignicons.css')}}">
    <!-- endinject -->
    <!-- vendor css for this page -->
    <!-- End vendor css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="{{asset('Admin/css/shared/style.css')}}">
    <!-- endinject -->
    <!-- Layout style -->
    <link rel="stylesheet" href="{{asset('Admin/css/demo_1/style.css')}}">
    <!-- Layout style -->
    <link rel="shortcut icon" href="{{asset('asssets/images/favicon.ico')}}" />
    <!-- Select2 -->
    <link rel="stylesheet" href="{{asset('Admin/plugins/select2/css/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('Admin/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css')}}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/styles/metro/notify-metro.css"/>
  </head>
  <body class="header-fixed">
    <!-- partial:partials/_header.html -->
    <nav class="t-header">
      <div class="t-header-brand-wrapper">
        <a href="{{route('dashboard')}}">
          <img class="logo" src="{{asset('Admin/images/logo_xgame.png')}}" alt="">
          <img class="logo-mini" src="{{asset('Admin/images/logo_mini.svg')}}" alt="">
        </a>
      </div>
      <div class="t-header-content-wrapper">
        <div class="t-header-content">
          <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
            <i class="mdi mdi-menu"></i>
          </button>
          <form action="#" class="t-header-search-box">
            <div class="input-group">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search" autocomplete="off">
              <button class="btn btn-primary" type="submit"><i class="mdi mdi-arrow-right-thick"></i></button>
            </div>
          </form>
          <ul class="nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="notificationDropdown" data-toggle="dropdown" aria-expanded="false">
                <i class="mdi mdi-bell-outline mdi-1x"></i>
              </a>
              <div class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="notificationDropdown">
                <div class="dropdown-header">
                  <h6 class="dropdown-title">Notifications</h6>
                  <p class="dropdown-title-text">You have 4 unread notification</p>
                </div>
                <div class="dropdown-body">
                  <div class="dropdown-list">
                    <div class="icon-wrapper rounded-circle bg-inverse-primary text-primary">
                      <i class="mdi mdi-alert"></i>
                    </div>
                    <div class="content-wrapper">
                      <small class="name">Storage Full</small>
                      <small class="content-text">Server storage almost full</small>
                    </div>
                  </div>
                  <div class="dropdown-list">
                    <div class="icon-wrapper rounded-circle bg-inverse-success text-success">
                      <i class="mdi mdi-cloud-upload"></i>
                    </div>
                    <div class="content-wrapper">
                      <small class="name">Upload Completed</small>
                      <small class="content-text">3 Files uploded successfully</small>
                    </div>
                  </div>
                  <div class="dropdown-list">
                    <div class="icon-wrapper rounded-circle bg-inverse-warning text-warning">
                      <i class="mdi mdi-security"></i>
                    </div>
                    <div class="content-wrapper">
                      <small class="name">Authentication Required</small>
                      <small class="content-text">Please verify your password to continue using cloud services</small>
                    </div>
                  </div>
                </div>
                <div class="dropdown-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="messageDropdown" data-toggle="dropdown" aria-expanded="false">
                <i class="mdi mdi-message-outline mdi-1x"></i>
                <span class="notification-indicator notification-indicator-primary notification-indicator-ripple"></span>
              </a>
              <div class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="messageDropdown">
                <div class="dropdown-header">
                  <h6 class="dropdown-title">Messages</h6>
                  <p class="dropdown-title-text">You have 4 unread messages</p>
                </div>
                <div class="dropdown-body">
                  <div class="dropdown-list">
                    <div class="image-wrapper">
                      <img class="profile-img" src="{{asset('Admin/images/profile/male/image_1.png')}}" alt="profile image">
                      <div class="status-indicator rounded-indicator bg-success"></div>
                    </div>
                    <div class="content-wrapper">
                      <small class="name">Clifford Gordon</small>
                      <small class="content-text">Lorem ipsum dolor sit amet.</small>
                    </div>
                  </div>
                  <div class="dropdown-list">
                    <div class="image-wrapper">
                      <img class="profile-img" src="{{asset('Admin/images/profile/female/image_2.png')}}" alt="profile image">
                      <div class="status-indicator rounded-indicator bg-success"></div>
                    </div>
                    <div class="content-wrapper">
                      <small class="name">Rachel Doyle</small>
                      <small class="content-text">Lorem ipsum dolor sit amet.</small>
                    </div>
                  </div>
                  <div class="dropdown-list">
                    <div class="image-wrapper">
                      <img class="profile-img" src="{{asset('Admin/images/profile/male/image_3.png')}}" alt="profile image">
                      <div class="status-indicator rounded-indicator bg-warning"></div>
                    </div>
                    <div class="content-wrapper">
                      <small class="name">Lewis Guzman</small>
                      <small class="content-text">Lorem ipsum dolor sit amet.</small>
                    </div>
                  </div>
                </div>
                <div class="dropdown-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="appsDropdown" data-toggle="dropdown" aria-expanded="false">
                <i class="mdi mdi-apps mdi-1x"></i>
              </a>
              <div class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="appsDropdown">
                <div class="dropdown-header">
                  <h6 class="dropdown-title">Apps</h6>
                  <p class="dropdown-title-text mt-2">Authentication required for 3 apps</p>
                </div>
                <div class="dropdown-body border-top pt-0">
                  <a class="dropdown-grid">
                    <i class="grid-icon mdi mdi-jira mdi-2x"></i>
                    <span class="grid-tittle">Jira</span>
                  </a>
                  <a class="dropdown-grid">
                    <i class="grid-icon mdi mdi-trello mdi-2x"></i>
                    <span class="grid-tittle">Trello</span>
                  </a>
                  <a class="dropdown-grid">
                    <i class="grid-icon mdi mdi-artstation mdi-2x"></i>
                    <span class="grid-tittle">Artstation</span>
                  </a>
                  <a class="dropdown-grid">
                    <i class="grid-icon mdi mdi-bitbucket mdi-2x"></i>
                    <span class="grid-tittle">Bitbucket</span>
                  </a>
                </div>
                <div class="dropdown-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- partial -->
    <div class="page-body">
      <!-- partial:partials/_sidebar.html -->
      <div class="sidebar">
        <div class="user-profile">
          <div class="display-avatar animated-avatar">
            <img class="profile-img img-lg rounded-circle" src="{{asset('Admin/images/profile/male/image_1.png')}}" alt="profile image">
          </div>
          <div class="info-wrapper">
            <p class="user-name">Nguyen Nam Truong</p>
            <!-- <h6 class="display-income">$3,400,00</h6> -->
          </div>
        </div>
        <ul class="navigation-menu">
          <li class="nav-category-divider">MAIN</li>
          <li class="{{$current_menu == 'dashboard' ? 'active' : ''}}">
            <a href="{{route('dashboard')}}">
              <span class="link-title">Dashboard</span>
              <i class="mdi mdi-gauge link-icon"></i>
            </a>
          </li>
          <li class="{{$current_menu == 'category' ? 'active' : ''}}">
            <a href="#sample-pages" data-toggle="collapse" aria-expanded="{{$menu_open == 'category' ? 'true' : 'false'}}">
              <span class="link-title">Danh m???c game</span>
              <i class="mdi mdi-certificate link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="sample-pages">
              <li>
                <a href="{{route('admin.get.create.category')}}" class="{{\Request::route()->getName() == 'admin.get.create.category' ? 'active' : ''}}" aria-expanded="{{\Request::route()->getName() == 'admin.get.create.category' ? 'true' : 'false'}}">Th??m m???i</a>
              </li>
              <li>
                <a href="{{route('admin.get.list.category')}}" class="{{\Request::route()->getName() == 'admin.get.list.category' ? 'active' : ''}}" aria-expanded="{{\Request::route()->getName() == 'admin.get.list.category' ? 'true' : 'false'}}">Danh s??ch</a>
              </li>
            </ul>
          </li>
          <li class="{{$current_menu == 'game' ? 'active' : ''}}">
            <a href="#sample-pages" data-toggle="collapse" aria-expanded="{{$menu_open == 'game' ? 'true' : 'false'}}">
              <span class="link-title">Game</span>
              <i class="mdi mdi-gamepad-variant link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="sample-pages">
              <li>
                <a href="{{route('admin.get.create.game')}}" class="{{\Request::route()->getName() == 'admin.get.create.game' ? 'active' : ''}}" aria-expanded="{{\Request::route()->getName() == 'admin.get.create.game' ? 'true' : 'false'}}">Th??m m???i</a>
              </li>
              <li>
                <a href="{{route('admin.get.list.game')}}" class="{{\Request::route()->getName() == 'admin.get.list.game' ? 'active' : ''}}" aria-expanded="{{\Request::route()->getName() == 'admin.get.list.game' ? 'true' : 'false'}}">Danh s??ch</a>
              </li>
            </ul>
          </li>
          <li class="{{$current_menu == 'keyword' ? 'active' : ''}}">
            <a href="#sample-pages" data-toggle="collapse" aria-expanded="{{$menu_open == 'keyword' ? 'true' : 'false'}}">
              <span class="link-title">Keyword</span>
              <i class="mdi mdi-key-variant link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="sample-pages">
              <li>
                <a href="{{route('admin.get.create.keyword')}}" class="{{\Request::route()->getName() == 'admin.get.create.keyword' ? 'active' : ''}}" aria-expanded="{{\Request::route()->getName() == 'admin.get.create.keyword' ? 'true' : 'false'}}">Th??m m???i</a>
              </li>
              <li>
                <a href="{{route('admin.get.list.keyword')}}" class="{{\Request::route()->getName() == 'admin.get.list.keyword' ? 'active' : ''}}" aria-expanded="{{\Request::route()->getName() == 'admin.get.list.keyword' ? 'true' : 'false'}}">Danh s??ch</a>
              </li>
            </ul>
          </li>
          <li class="{{$current_menu == 'rating' ? 'active' : ''}}">
            <a href="{{route('admin.get.list.rating')}}">
              <span class="link-title">????nh gi??</span>
              <i class="mdi mdi-star-circle link-icon"></i>
            </a>
          </li>
          <li>
            <a href="{{route('admin.logout')}}">
              <span class="link-title">????ng xu???t</span>
              <i class="mdi mdi-logout link-icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- partial -->
      <div class="page-content-wrapper">
        @yield('content')
      </div>
      <!-- page content ends -->
    </div>
    <!--page body ends -->
    <!-- SCRIPT LOADING START FORM HERE /////////////-->
    <!-- plugins:js -->
    <script src="{{asset('Admin/vendors/js/core.js')}}"></script>
    <!-- endinject -->
    <!-- Vendor Js For This Page Ends-->
    <script src="{{asset('Admin/vendors/apexcharts/apexcharts.min.js')}}"></script>
    <script src="{{asset('Admin/vendors/chartjs/Chart.min.js')}}"></script>
    <script src="{{asset('Admin/js/charts/chartjs.addon.js')}}"></script>
    <!-- Vendor Js For This Page Ends-->
    <!-- build:js -->
    <!-- Select2 -->
    <script src="{{asset('Admin/plugins/select2/js/select2.full.min.js')}}"></script>
    <script>
        $('.select2').select2()

        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
    </script>
    <script src="{{asset('Admin/js/template.js')}}"></script>
    <script src="{{asset('Admin/js/dashboard.js')}}"></script>
    <!-- endbuild -->
    @yield('script')
  </body>
</html>