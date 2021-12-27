@extends('layouts.master',[
    'page_title' => 'Trò chơi '.$game->name. ' - Chơi trực tuyến',
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
        .reply-comment {
            padding: 35px !important;
        }
        .post-item {
            padding: 20px 20px !important;
        }
        .instagram-pic-list {
            padding: 10px 10px !important;
        }
    </style>
@endsection
<section id="blog-details" class="blog-details-section pt20 pb20" style="background-color: #f1f1f1">
    <div class="container">
        <div class="row">
            <div class="blog-details-section-content">
                <div class="row">
                    <div class="col-sm-9">
                        <div class="blog-details-section-left-side pb20">
                            <div class="blog-details-main-pic">
                                <div class="content">
                                    <div class="background-under-game" style="background: url({{asset(pare_url_file($game->avatar))}})"></div>
                                    <div class="item-container" id="content_game" data-id="{{$game->id}}">
                                        <iframe class="iframe-close" name="iframe" id="iframe" src="filegame/{{$game->file_game}}/index.html" title="Iframe Game"
                                            style="width: 100%;height: 100%;"></iframe>
                                        <div class="game-control-container">
                                            <div class="left-control-container"></div>
                                            <div class="right-control-container">
                                                <h5 class="game-control-title">Điều chỉnh hoặc tối đa</h5>
                                                <div class="screen-size-actions">
                                                    <a title="Exit Full Screen" onclick='closeFullscreen()' class="maximize-button">
                                                        <img src="https://img-hws.y8.com/assets/svg/resize-v2-9649eb0b0be2316730dbea99ce24249131ab8ccb2a1c0b994e2695508cc76da5.svg" alt="Maximize">
                                                    </a>
                                                    <a title="Full Screen" onclick='openFullscreen()' class="maximize-button">
                                                        <img src="https://img-hws.y8.com/assets/svg/maximize-v2-9255bbce5dbf654a9fea165155f6d3fef74abe90e58d30dc18e69f88cd052a5e.svg" alt="Maximize">
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-single-text box">
                                <div class="blog-head-title pt15 pb20">
                                    <h2 class="black"><a href="#">{{$game->name}}</a></h2>
                                </div>
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
                                        <li><a class="black" href="#">{{number_format($game->played)}} plays</a></li>
                                        <li><a class="black" href="#"><span class="mr5 ti-timer"></span> {{$game->created_at}}</a></li>
                                        @if(!empty($getGame))
                                            <li class="pull-right"><span id="favorite" data-gameid="{{$game->id}}" class="mr5 ti-heart like-game text-danger"></span></li>
                                        @else
                                            <li class="pull-right"><span id="favorite" data-gameid="{{$game->id}}" class="mr5 ti-heart {{\Auth::id() ? 'like-game' : 'js-show-login'}} text-dark"></span></li>
                                        @endif
                                    </ul>
                                </div>
                                <div class="blog-game-button pb20">
                                    <a href="{{route('get.contact.game',[$game->file_game,$game->id])}}">
                                        <div class="game-button-icon report-bug-icon"></div>
                                        <span>Báo cáo về các sai sót của game</span>
                                    </a>
                                </div>
                                <div class="blog-details-text">
                                    @if($game)
                                        <p>{!! $game->description !!}</p>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="comment-area">
                            <div class="comment-box mb20 box">
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
                                            style="position: absolute;top: 57%;left: 50%;transform: translateX(-50%) translateY(-50%);color: #F78802;font-size: 15px">{{$ageDetail}}</b>
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
                            @if(isset($ratings))
                            <div class="component_list_rating mb20 box">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12" style="padding:0 25px">
                                        <h3 class="block-title uppercase pt20">
                                            Bình luận
                                            <span class="number-with-dot comments-counter counter">{{isset($game->total_rating) ? $game->total_rating : 0}}</span>
                                            
                                        </h3>
                                        <div id="comments">
                                            @include('components.comments')
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endif
                            <div class="reply-comment box">
                                <div class="side-bar-title">
                                    <h2>Các game liên quan</h2>
                                </div>
                                <div class="client-name-reply">
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
                                                            <p class="plays-count">{{number_format($game->played)}} plays</p>
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
                    <div class="col-sm-3">
                        <div class="side-bar-content ml15">
                            <div class="instagram-pic">
                                <div class="instagram-pic-list box">
                                    <img style="width: 100%" src="https://i.imgur.com/DobCDyr.png" alt="image">
                                </div>
                            </div>
                            <div class="category pt20 mb40">
                                <div class="post-item box">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="block-title uppercase">
                                                Gắn thẻ
                                                <a rel="nofollow" href="#">Tất cả các thẻ</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 tags-list">
                                            @if(isset($keywords))
                                                @foreach($keywords as $keyword)
                                                    <a href="#">
                                                        <i class="tag-36x28 tag-36x28-games tag-36x28-14"></i>
                                                        <p>{{$keyword['name']}}</p>
                                                    </a>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            let idGame = $("#content_game").attr('data-id');

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
    <script>
        var elem = document.getElementById("content_game");
        function openFullscreen() {
            $('#iframe').removeClass('iframe-close').addClass('iframe-open');
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }

        function closeFullscreen() {
            $('#iframe').removeClass('iframe-open').addClass('iframe-close');
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    </script>
    <!-- <script>
        $( document ).ready(function() {
            var cssLink = document.createElement("link");
            cssLink.href = "{{asset('Client/customs/css/canvas.css')}}";
            cssLink.rel = "stylesheet"; 
            cssLink.type = "text/css"; 
            frames['iframe'].document.head.appendChild(cssLink);
        });

        $( window ).on( "load", function() {
            var cssLink = document.createElement("link");
            cssLink.href = "{{asset('Client/customs/css/canvas.css')}}";
            cssLink.rel = "stylesheet"; 
            cssLink.type = "text/css"; 
            frames['iframe'].document.head.appendChild(cssLink);
        });
    </script> -->
    <script>
        $(document).ready(function(){

            $(document).on('click', '.pagination a', function(event){
                event.preventDefault(); 
                var page = $(this).attr('href').split('page=')[1];
                var idGame = $("#content_game").attr('data-id');
                ajax_comments(page, idGame);
            });

            function ajax_comments(page, idGame)
            {
                $.ajax({
                    url:"{{route('get.ajax.comments')}}?page="+page,
                    data: {
                        idGame:idGame,
                    },
                    type: "GET",
                    success:function(data)
                    {
                        $('#comments').html(data);
                    },
                    error: function () {
                    }
                });
            }
        
        });
    </script>
@endsection