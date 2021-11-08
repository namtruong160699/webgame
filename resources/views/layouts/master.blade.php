<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Anime Template">
    <meta name="keywords" content="Anime, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Anime | Template</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">

    <!-- Css Styles -->
    <link rel="stylesheet" href="{{asset('Client/css/bootstrap.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/font-awesome.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/elegant-icons.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/plyr.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/nice-select.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/owl.carousel.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/slicknav.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('Client/css/style.css')}}" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Header Section Begin -->
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <a href="{{route('client.dashboard')}}">
                            <img src="{{asset('Client/img/logo.png')}}" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="header__nav">
                        <nav class="header__menu mobile-menu">
                            <ul>
                                <li class="active"><a href="{{route('client.dashboard')}}">Trang chủ</a></li>
                                <li><a href="#">Danh mục<span class="arrow_carrot-down"></span></a>
                                    <ul class="dropdown">
                                        @if(isset($categories))
                                            @foreach($categories as $category)
                                                <li><a href="{{route('get.list.product',[$category->slug,$category->id])}}">{{$category->name}}</a></li>
                                            @endforeach
                                        @endif
                                    </ul>
                                </li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="header__right">
                        <a href="#" class="search-switch"><span class="icon_search"></span></a>
                        <a href="./login.html"><span class="icon_profile"></span></a>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    <!-- Header End -->

    <!-- Hero Section Begin -->

    <!-- Hero Section End -->

    <!-- Product Section Begin -->
    @yield('content')
    <!-- Product Section End -->

<!-- Footer Section Begin -->
<footer class="footer">
    <div class="page-up">
        <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="footer__logo">
                    <a href="./index.html"><img src="{{asset('Client/img/logo.png')}}" alt=""></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="footer__nav">
                    <ul>
                        <li class="active"><a href="./index.html">Homepage</a></li>
                        <li><a href="./categories.html">Categories</a></li>
                        <li><a href="./blog.html">Our Blog</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <!-- <p>Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.</p> -->

              </div>
          </div>
      </div>
  </footer>
  <!-- Footer Section End -->

  <!-- Search model Begin -->
  <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-switch"><i class="icon_close"></i></div>
        <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here.....">
        </form>
    </div>
</div>
<!-- Search model end -->

<!-- Js Plugins -->
<script src="{{asset('Client/js/jquery-3.3.1.min.js')}}"></script>
<script src="{{asset('Client/js/bootstrap.min.js')}}"></script>
<script src="{{asset('Client/js/player.js')}}"></script>
<script src="{{asset('Client/js/jquery.nice-select.min.js')}}"></script>
<script src="{{asset('Client/js/mixitup.min.js')}}"></script>
<script src="{{asset('Client/js/jquery.slicknav.js')}}"></script>
<script src="{{asset('Client/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('Client/js/main.js')}}"></script>


</body>

</html>