@extends('layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
@section('style')
    <style>
        @media (min-width: 1200px) {
            .container {
                width: 1590px !important;
            }
        }
        .content {
            display: -webkit-box;
            display: -moz-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            -moz-flex-direction: column;
            -ms-flex-direction: column;
            -o-flex-direction: column;
            flex-direction: column;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            -webkit-border-top-left-radius: 6px;
            -webkit-border-top-right-radius: 6px;
            -webkit-border-bottom-right-radius: 0;
            -webkit-border-bottom-left-radius: 0;
            -moz-border-radius-topleft: 6px;
            -moz-border-radius-topright: 6px;
            -moz-border-radius-bottomright: 0;
            -moz-border-radius-bottomleft: 0;
            background: #fff;
            overflow: hidden;
        }
        .item-container {
            position: relative;
            text-align: center;
            z-index: 3;
            height: 700px;
        }
        iframe {
            display: -webkit-box;
            display: -moz-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            -moz-flex-direction: column;
            -ms-flex-direction: column;
            -o-flex-direction: column;
            flex-direction: column;
            /* -webkit-box-flex: 1; */
            -ms-flex-positive: 1;
            flex-grow: 1;
            margin: 0 auto;
            position: relative;
            z-index: 3;
            border: unset;
        }
        .text-danger {
            color: #F78802 !important;
            cursor: pointer;
        }
        .text-dark {
            color: #212529 !important;
            cursor: pointer;
        }
        .col-sm-2 {
            padding-right: unset;
            padding-left: unset;
        }
        .box {
            background-color: #fff;
        }
    </style>
@endsection
<section id="blog-details" class="blog-details-section pt60  pb80" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row">
            <div class="blog-details-section-content">
                <div class="row">
                    <div class="col-sm-9">
                        <div class="blog-details-section-left-side  pb80">
                            <div class="blog-details-main-pic">
                                <div class="content">
                                    <div class="item-container">
                                        <iframe src="filegame/{{$game->file_game}}/index.html" title="Iframe Game"
                                            style="width: 100%;height: 100%;"></iframe>
                                    </div>
                                </div>
                            </div>
                            <!-- /img -->
                            <div class="blog-single-text  pb50 box">
                                <div class="blog-head-title pt15 pb20">
                                    <h2 class="black"><a href="#">{{$game->name}}</a></h2>
                                </div>
                                <!-- /head -->
                                <div class="blog-recent-post-meta">
                                    <?php
                                        $getGame = \DB::table('games')
                                            ->join('user_favourite','user_favourite.game_id','=','games.id')
                                            ->where('games.id', $game->id)
                                            ->where('user_favourite.user_id', Auth::id())
                                            ->get()
                                            ->toArray();
                                        ?>
                                    <ul class="meta-list pb20 mb20">
                                        <li><a class="black" href="#">{{$game->played}} số lần chơi</a></li>
                                        <li><a class="black" href="#"><span class="mr5 ti-timer"></span> 26 Apr, 2021</a></li>
                                        @if(!empty($getGame))
                                            <li class="pull-right"><span id="favorite" data-gameid="{{$game->id}}" class="mr5 ti-heart like-game text-danger"></span></li>
                                        @else
                                            <li class="pull-right"><span id="favorite" data-gameid="{{$game->id}}" class="mr5 ti-heart {{\Auth::id() ? 'like-game' : 'js-show-login'}} text-dark"></span></li>
                                        @endif
                                    </ul>
                                </div>
                                <!-- recent-post-meta -->
                                <div class="blog-details-text">
                                    @if($game)
                                        <p>{!! $game->description !!}</p>
                                    @endif
                                </div>
                            </div>
                            <!-- / blog-single-text-->
                        </div>

                        <div class="comment-area">
                            <div class="comment-box mb50 box">
                                <?php
                                    $ageDetail = 0;
                                    if($game->total_rating) {
                                        $ageDetail = round($game->total_number / $game->total_rating, 1, PHP_ROUND_HALF_EVEN);
                                    }
                                ?>
                                <h3>Đánh giá</h3>
                                <div class="component_rating_content"
                                    style="display: flex;align-items: center;border-radius: 5px;border: 1px solid #dedede">
                                    <div class="rating-item" style="width: 15%;position: relative">
                                        <span class="mr5 ti-star"
                                            style="font-size: 100px;color: #fd9727;display: block;margin: 0 auto;text-align: center"></span><b
                                            style="position: absolute;top: 57%;left: 50%;transform: translateX(-50%) translateY(-50%);color: #F78802;font-size: 20px">{{$ageDetail}}</b>
                                    </div>
                                    <div class="list-rating" style="width: 65%;padding: 20px">
                                        @foreach($arrayRatings as $key => $arrayRating)
                                            <?php
                                                $itemAge = round(($arrayRating['total'] / $game->total_rating) * 100,0)
                                            ?>
                                            <div class="item_rating" style="display: flex;align-items: center">
                                                <div style="width: 10%;font-size: 14px">
                                                    {{ $key }} <span class="mr5 ti-star"></span>
                                                </div>
                                                <div style="width: 60%;margin: 0 20px">
                                                    <span
                                                        style="width: 100%;height: 8px;display: block;background-color: #dedede"><b
                                                            style="width: {{$itemAge}}%;background-color: #f25800;display: block;height: 100%"></b></span>
                                                </div>
                                                <div style="width: 30%">
                                                    <a style="display: inline-block;color: #288ad6" href="">{{$arrayRating['total']}} đánh giá ({{$itemAge}}%)</a>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                    <div style="width: 20%">
                                        <a href="" class="{{\Auth::id() ? 'js_rating_action' : 'js-show-login'}}"
                                        style="width: 200px;background-color: #288ad6;padding: 10px;color: white;border-radius: 5px">Gửi đánh giá của bạn</a>
                                    </div>
                                </div>
                                <div class="form_rating hide">
                                    <div style="display: flex;margin-top: 15px;font-size: 15px">
                                        <p style="margin-bottom: 0">Chọn đánh giá của bạn</p>
                                        <span style="margin: 0 15px" class="list_start">
                                            @for($i = 1 ; $i<=5 ; $i++)
                                                <span class="mr5 ti-star" data-key="{{$i}}"></span>
                                            @endfor
                                        </span>
                                        <span class="list_text"></span>
                                        <input type="hidden" value="" class="number_rating">
                                    </div>
                                    <div style="margin-top: 15px">
                                        <textarea class="form-control" name="" id="ra_content" cols="30"
                                                rows="3"></textarea>
                                    </div>
                                    <div style="margin-top: 15px">
                                        <a class="js_rating_game"
                                        style="width: 200px;background-color: #288ad6;padding: 10px;color: white;border-radius: 5px"
                                        href="{{route('post.rating.game',$game)}}">Gửi đánh giá</a>
                                    </div>
                                </div>
                            </div>
                            <div class="reply-comment mb50 box">
                                <div class="side-bar-title mb40">
                                    <h2>Các game liên quan</h2>
                                </div>
                                <div class="client-name-reply pb70">
                                    <div class="row">
                                        @foreach($gameSuggests as $game)
                                            <div class="col-sm-2">
                                                <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                                    <div class="event-list-item colmd4">
                                                        <div class="event-list-pic">
                                                            <img class="img-custom" src="{{asset(pare_url_file($game->avatar))}}" alt="image">
                                                        </div>
                                                        <div class="event-text clearfix ">
                                                            <p class="title-custom">{{$game->name}}</p>
                                                            <p class="plays-count">{{$game->played}} chơi</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /col-sm-8 -->

                    <div class="col-sm-3">
                        <div class="side-bar-content ml15">
                            <!-- /side-bar-search -->
                            <div class="category mb40">
                                <div class="side-bar-title mb40">
                                    <h2 class="widgettitle">Tags</h2>
                                </div>
                                <!-- /title -->
                                <div class="category-item box">
                                    @if(isset($keywords))
                                        @foreach($keywords as $keyword)
                                            <a href="#" style="border: 1px solid #E91E63; display: inline-block; font-size: 13px; padding: 0 5px;border-radius: 5px; margin-right: 10px; color: #E91E63">{{$keyword['name']}}</a>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                            <!-- /category-item -->

                            <div class="blog-recent-post mb40">
                                <div class="side-bar-title mb40">
                                    <h2 class="widgettitle">Recent Post</h2>
                                </div>
                                <!-- /title -->
                                <div class="post-item box">
                                    <div class="blog-recent-post-item mb20">
                                        <div class="blog-recent-post-pic mr25 pull-left">
                                            <img src="{{asset('Client/assets/img/recent-1.jpg')}}" alt="image">
                                        </div>
                                        <!-- /img -->
                                        <div class="blog-recent-post-text">
                                            <div class="blog-recent-post-head">
                                                <a href="#">Dolore magna aliqua Ut enim ad minim</a>
                                            </div>
                                            <!-- /post-head -->
                                            <div class="blog-recent-post-meta mt5">
                                                <ul class="meta-list">
                                                    <li><a class="black" href="#"><span class="mr5 ti-timer"></span> 26 Apr, 2017</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /post-item -->

                                    <div class="blog-recent-post-item mb20">
                                        <div class="blog-recent-post-pic mr25 pull-left">
                                            <img src="{{asset('Client/assets/img/recent-2.jpg')}}" alt="image">
                                        </div>
                                        <!-- /img -->
                                        <div class="blog-recent-post-text">
                                            <div class="blog-recent-post-head">
                                                <a href="#">Dolore magna aliqua Ut enim ad minim</a>
                                            </div>
                                            <!-- /post-head -->
                                            <div class="blog-recent-post-meta mt5">
                                                <ul class="meta-list">
                                                    <li><a class="black" href="#"><span class="mr5 ti-timer"></span> 26 Apr, 2017</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /post-item -->

                                    <div class="blog-recent-post-item">
                                        <div class="blog-recent-post-pic mr25 pull-left">
                                            <img src="{{asset('Client/assets/img/recent-3.jpg')}}" alt="image">
                                        </div>
                                        <!-- /img -->
                                        <div class="blog-recent-post-text">
                                            <div class="blog-recent-post-head">
                                                <a href="#">Dolore magna aliqua Ut enim ad minim</a>
                                            </div>
                                            <!-- /post-head -->
                                            <div class="blog-recent-post-meta mt5">
                                                <ul class="meta-list">
                                                    <li><a class="black" href="#"><span class="mr5 ti-timer"></span> 26 Apr, 2017</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /recent-post-item -->
                                </div>
                            </div>
                            <!-- /blog-recent-post -->

                            <div class="instagram-pic">
                                <div class="side-bar-title mb40">
                                    <h2 class="widgettitle">Instagram</h2>
                                </div>
                                <!-- /title -->

                                <div class="instagram-pic-list box">
                                    <ul class="footer-gallery text-center">
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-1.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-2.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-3.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-4.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-9.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-6.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-7.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-8.jpg')}}" alt="image"></a></li>
                                        <li><a href="#"><img src="{{asset('Client/assets/img/ins-9.jpg')}}" alt="image"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- /instagram-pic-list -->
                        </div>
                    </div>
                    <!-- /col-md-4 -->
                </div>
                <!-- /row -->
            </div>
        </div>
    </div>
</section>
@endsection
@section('script')
    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $(function() {
            let listStart = $(".list_start .ti-star");
            listStartText = {
                1: 'Ghét',
                2: 'Không thích',
                3: 'Chỉ OK',
                4: 'Thích',
                5: 'Rất thích',
            };
            listStart.mouseover(function() {
                let $this = $(this);
                let number = $this.attr('data-key');
                listStart.removeClass('rating_active');
                $(".number_rating").val(number);
                $.each(listStart, function(key, value) {
                    if(key + 1 <= number)
                    {
                        $(this).addClass('rating_active');
                    }
                });
                $(".list_text").text('').text(listStartText[number]).show();
            });
            $(".js_rating_action").click(function(event) {
                event.preventDefault();
                if($(".form_rating").hasClass('hide')) {
                    $(".form_rating").addClass('active').removeClass('hide');
                }else {
                    $(".form_rating").addClass('hide').removeClass('active');
                }
            });
            $(".js_rating_game").click(function(event) {
                event.preventDefault();
                let content = $("#ra_content").val();
                let number = $(".number_rating").val();
                let url = $(this).attr('href');

                if(content && number)
                {
                    $.ajax({
                        url: url,
                        type: 'POST',
                        data: {
                            number: number,
                            content: content
                        }
                    }).done(function(result) {
                        if (result.code == 1) {
                            alert("Gửi đánh giá thành công!");
                            location.reload();
                        }   
                    });
                }
            });

            // Lưu id game vào storage
            let idGame = $("#games_played").attr('data-id');

            // Lấy giá trị storage
            let games = localStorage.getItem('games');

            if(games == null) {
                arrayGame = new Array();
                arrayGame.push(idGame);
                localStorage.setItem('games', JSON.stringify(arrayGame));
            }else {
                // Chuyển về mảng
                games = $.parseJSON(games);
                if(games.indexOf(idGame) == -1) {
                    games.push(idGame);
                    localStorage.setItem('games', JSON.stringify(games));
                }
                // console.log(games);
            }
            //Like game new
            $(".like-game").on("click", function(event) {
                game_id = $(this).data("gameid");
                $.ajax({
                    method: 'POST',
                    url: '{{route('ajax.game.fav.game')}}',
                    data: {
                        game_id: game_id,
                        _token: "{{ csrf_token() }}",
                    },
                    success: function(data)
                    {
                        if(data.is_fav == 1) {
                            $(event.target).removeClass("text-dark").addClass("text-danger");
                        }
                        if(data.is_fav == 0){
                            $(event.target).removeClass("text-danger").addClass("text-dark");
                        }
                    }
                });
            });
        });
    </script>
@endsection