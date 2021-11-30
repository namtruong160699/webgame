<!DOCTYPE html>
<html lang="zxx">
<head>
	<meta charset="utf-8">
	<title>XGame</title>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
	<link rel="shortcut icon" href="{{asset('Client/assets/img/icon-xgame.jpg')}}">

	<meta name="description" content="FundMe - is a Premium HTML Responsive Templeate by HTMLmate Team. You can use this for anykind of Nonprofit website">

	<meta name="keywords" content="Premium HTML Template">

	<meta name="author" content="HTMLmate">

	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- css-include -->

	<!-- boorstrap -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/bootstrap.min.css')}}">
	<!-- themify-icon.css -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/themify-icons.css')}}">
	<!-- owl-carousel -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/owl.carousel.css')}}">
	<!-- Video-min -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/video.min.css')}}">
	<!-- animate.css -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/animate.css')}}">
	<!-- REVOLUTION STYLE SHEETS -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/rev-slider/css/settings.css')}}">
	<!-- REVOLUTION LAYERS STYLES -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/rev-slider/css/layers.css')}}">
	<!-- REVOLUTION NAVIGATION STYLES -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/rev-slider/css/navigation.css')}}">
	<!-- menu style -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/menu.css')}}">
	<!-- style -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/style.css')}}">
	<!-- responsive.css -->
	<link rel="stylesheet" type="text/css" href="{{asset('Client/assets/css/responsive.css')}}">
    @yield('style')
</head>
<!-- /end of head -->

<body>
	<div id="preloader"></div>
	<!-- Start of Header 
	============================================= -->
	<header>
		<div class="header-top-bg">
			<div class="container">
				<div class="row">
					<div class="header-top">
						<div class="head-top-info pull-left">
							<ul class="top-info">
								<li><img src="{{asset('Client/assets/img/call.png')}}" alt="image">05. 256. 8942</li>
								<li><img src="{{asset('Client/assets/img/inbox.png')}}" alt="image">info@fundme.com</li>
							</ul>
						</div>
						<!-- /head-top-info -->
						<div class="header-social pull-right">
							<div class="social">
								<ul class="social-list">
									<li><a href="#"><span class="ti-facebook"></span></a></li>
									<li><a href="#"><span class="ti-twitter"></span></a></li>
									<li><a href="#"><span class="ti-google"></span></a></li>
									<li><a href="#"><span class="ti-instagram"></span></a></li>
								</ul>
							</div>
						</div>
						<!-- /header-social -->
					</div><!-- /header-top -->
				</div><!-- /row -->
			</div><!-- /container -->
		</div>
		<div class="menu-bar">
			<div class="container">
				<div class="row">
					<nav class="navbar">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
							<a class="navbar-brand" href="{{route('client.dashboard')}}"><img src="{{asset('Client/assets/img/icon-xgame.jpg')}}" alt="image"></a>
						</div>

						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav navbar-right">
								<li><a href="cause.html">Thể loại</a>
									<ul class="menu-dropdown">
                                        @if(isset($categories))
                                            @foreach($categories as $category)
                                                <li><a href="{{route('get.list.product',[$category->slug,$category->id])}}">{{$category->name}}</a></li>
                                            @endforeach
                                        @endif
									</ul>
								</li>
							</ul>
						</div><!-- /.navbar-collapse -->
						@if(Auth::check())
							<div id="user_logged_in">
								<a class="fake-button js-top-menu user-toggle" href="{{route('get.logout.user')}}">
									<img class="avatar" src="https://img-hws.y8.com/assets/y8/default_avatar-d594c7c6e605201898e1dadf838c38d27e4ca38361edcff4022d4fab84368136.png" alt="">
								</a>
							</div>
						@else
							<div class="home-donate donate-btn-1 text-uppercase">
								<a href="{{route('get.register')}}">Đăng ký</a>
							</div>
							<div class="home-login login-btn text-uppercase">
								<a href="{{route('get.login')}}">Đăng nhập</a>
							</div>
						@endif
						<div id="sb-search" class="sb-search " >
							    <form action="#" method="post">
								   <input class="sb-search-input " onkeyup="buttonUp();" placeholder="Enter Your Search Word..." type="search" value="" name="search" id="search">
								 <input class="sb-search-submit" type="submit"  value="">
								 <span class="sb-icon-search"><i class="ti-search"></i></span>
							    </form>
						</div>
					</nav>
					<div class="wrap">
						<!--MENU-->
						<div id="main-menu">
							<div class="menu-btn">
								<div class="menu-btn-line menu-btn-line-1"></div>
								<div class="menu-btn-line menu-btn-line-2"></div>
								<div class="menu-btn-line menu-btn-line-3"></div>
							</div>
							<div class="moduletable_menu">

								<ul class="nav menu">
									<li><a href="home-1.html">Home</a></li>
									<li><a href="about-us.html">About</a></li>
									<li><a href="blog-archive.html">Blog</a></li>
									<li><a href="blog-single.html">Blog Single</a></li>
									<li><a href="cause.html">Cause</a></li>
									<li><a href="cause-single.html">Cause Details</a></li>
									<li><a href="event.html">Event</a></li>
									<li><a href="event-single.html">Event Single</a></li>
									<li><a href="404.html">404</a></li>
									<li><a href="contact.html">Contacts</a></li>
								</ul>
							</div>
						</div>
						<!-- END menu -->
					</div><!--/wrap  -->
				</div><!--/row  -->
			</div><!--/container  -->
		</div><!--/menu-bar  -->
	</header>
	<!-- End of Header 
	============================================= -->
    @yield('content')
	<!-- Start of footer section
	============================================= -->
	<footer id="footer-section" class="footer-style">
		<div class="footer-overlay">
			<div class="footer-main-content">
				<div class="container">
					<div class="row">
						<div class="footer-main-content-area pt75">
							<div class="row">
								<div class="col-sm-3">
									<div class="footer-logo pb20">
										<a  href="home-1.html"><img src="{{asset('Client/assets/img/icon-xgame.jpg')}}" alt="image"></a>
									</div>
									<div class="footer-text">
										<p>Lorem ipsum dolor sit ametlyeolo consectetur adipisicing elit sed dong eiusmod tempor incididunt ut labore et incididunt.  </p>
									</div>
									<div class="footer-text">
										<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
									</div>
								</div>
								<!-- /col-sm-3 -->

								<div class="col-sm-3">
									<div class="footer-head-title text-uppercase pb35">
										<h2 class="widgettitle">RECENT TWEET</h2>
									</div>
									<!-- /title -->
									<div class="recent-tweet-list">
										<div class="tweet-icon pull-left mr20">
											<span class="red ti-twitter"></span>
										</div>
										<div class="tweet-text">
											<span class="name-tweet"><a class="" href="#">@tonmoymishal</a></span>
											<span class="tweet-content">Excepteur sint occ aecat cupidatat </span> 
											<span class="red tweet-link"><a href="#">goo.gl/GjFUTp</a></span>
											<span class="tweet-time">45 min ago</span>
										</div>
									</div>
									<!-- /list -->

									<div class="recent-tweet-list mt10">
										<div class="tweet-icon pull-left mr20">
											<span class="red ti-twitter"></span>
										</div>
										<div class="tweet-text">
											<span class="name-tweet"><a class="" href="#">@tonmoymishal</a></span>
											<span class="tweet-content">Excepteur sint occ aecat cupidatat </span> 
											<span class="red tweet-link"><a href="#">goo.gl/GjFUTp</a></span>
											<span class="tweet-time">45 min ago</span>
										</div>
									</div>
								</div>
								<!-- /col-sm-3 -->

								<div class="col-sm-3">
									<div class="footer-head-title text-uppercase pb35">
										<h2 class="widgettitle">GET IN TOUCH</h2>
									</div>
									<!-- /title -->
									<div class="touch-content">
										<div class="tweet-text">
											<span class="name-tweet">Address: </span>
											<span class="tweet-content">315 Chat mohon Bazar New Yor, NY 4536 </span> 
										</div>
										<div class="tweet-text mt5">
											<span class="name-tweet">E-mail: </span>
											<span class="tweet-content">support@yourdomain.com </span> 
										</div>
										<div class="tweet-text mt5">
											<span class="name-tweet">Phone: </span>
											<span class="tweet-content">560 265 1523</span> 
										</div>
										<div class="newsletter-form">
											<form action="#" method="get" class="nwsltter">
												<div class="form-group">
													<input type="email" name="email" placeholder="Your Email" class="form-control">
												</div>
											</form>
											<div class="submit-btn">
												<button type="submit" value="Submit"><img src="{{asset('Client/assets/img/inbox.png')}}" alt="image"></button>
											</div>
										</div>
									</div>
								</div>
								<!-- /col-sm-3 -->

								<div class="col-sm-3">
									<div class="footer-head-title text-uppercase pb35">
										<h2 class="widgettitle">GALLERY</h2>
									</div>
									<div class="footer-gallery pb35">
										<ul class="footer-gallery">
											<li><a href="#"><img src="{{asset('Client/assets/img/g-1.png')}}" alt="image"></a></li>
											<li><a href="#"><img src="{{asset('Client/assets/img/g-2.png')}}" alt="image"></a></li>
											<li><a href="#"><img src="{{asset('Client/assets/img/g-3.png')}}" alt="image"></a></li>
											<li><a href="#"><img src="{{asset('Client/assets/img/g-4.png')}}" alt="image"></a></li>
											<li><a href="#"><img src="{{asset('Client/assets/img/g-5.png')}}" alt="image"></a></li>
											<li><a href="#"><img src="{{asset('Client/assets/img/g-6.png')}}" alt="image"></a></li>
										</ul>
									</div>
								</div>
								<!-- /col-sm-3 -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /footer-main-content -->
			<div class="footer-menu">
				<div class="container">
					<div class="row">
						<div class="footer-menu-content">
							<div class="copy-right pull-left">
								<p>© 2016 <span class="red"><a href="https://www.htmlmate.com/">HTMLmate</a> </span>All right reserved. </p>
							</div>
							<div class="footer-menu-list pull-right mt25">
								<ul class="menu-list">
									<li><a href="#">Home</a><span>/</span></li>
									<li><a href="#">Event</a><span>/</span></li>
									<li><a href="#">Cause</a><span>/</span></li>
									<li><a href="#">FAQ</a><span>/</span></li>
									<li><a href="#">Support</a><span></span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- End of footer section
	============================================= -->


	<!-- js -->
	<script type="text/javascript" src="{{asset('Client/assets/js/jquery-2.1.4.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/assets/js/bootstrap.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/assets/js/owl.carousel.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/assets/js/jquery.magnific-popup.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/assets/js/waypoints.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/assets/js/jquery.counterup.min.js')}}"></script>
	<!-- <script type="text/javascript" src="{{asset('Client/assets/js/countdown.js')}}"></script> -->
	<script type="text/javascript" src="{{asset('Client/assets/js/parallax.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/assets/js/circle-progress.js')}}"></script>


	<!-- REVOLUTION JS FILES -->
	<script type="text/javascript" src="{{asset('Client/rev-slider/js/jquery.themepunch.tools.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('Client/rev-slider/js/jquery.themepunch.revolution.min.js')}}"></script>

    <!-- SLIDER REVOLUTION 5.0 EXTENSIONS (Load Extensions only on Local File Systems !
    The following part can be removed on Server for On Demand Loading) -->

    <script type="text/javascript" src="{{asset('Client/rev-slider/js/revolution.extension.actions.min.js')}}"></script>
    
    <script type="text/javascript" src="{{asset('Client/rev-slider/js/revolution.extension.layeranimation.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('Client/rev-slider/js/revolution.extension.navigation.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('Client/rev-slider/js/revolution.extension.parallax.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('Client/rev-slider/js/revolution.extension.slideanims.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('Client/rev-slider/js/revolution.extension.video.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('Client/assets/js/function.js')}}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
    <script type="text/javascript">
        if (typeof TYPE_MESSAGE != "undefined")
        {
            switch (TYPE_MESSAGE) {
                case 'success':
                    $.notify(MESSAGE, TYPE_MESSAGE);
                    break;
                case 'error':
                    $.notify(MESSAGE, TYPE_MESSAGE);
                    break;
                case 'warn':
                    $.notify(MESSAGE, TYPE_MESSAGE);
                    break;
            }
        }
        $(".js-show-login").click(function (event) {
            event.preventDefault();
            $.notify("Bạn phải đăng nhập để thực hiện chức năng này!", "warn");
            return false;
        })
    </script>
    @yield('script')
</body> 
</html>