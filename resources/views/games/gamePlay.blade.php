@extends('layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
<link rel="stylesheet" href="{{asset('Client/css/game_play.min.css')}}" type="text/css">
<section class="product spad" style="padding-top: unset;">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="page-content-wrapper-inner">
                    <div class="content-viewport">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-12 equel-grid">
                                <div class="canvas-unity" style="width: 100%;margin-bottom: 10px;">
                                    <iframe src="filegame/{{$game->file_game}}/index.html" title="Iframe Game"
                                            style="width: 100%;height: 100%;"></iframe>
                                </div>
                                <div class="col-md-12" id="games_played" data-id="{{$game->id}}">
                                    <div class="row">
                                        <div class="col-md-8 col-lg-8">
                                            <div class="box game-description">
                                                <div class="row title-container">
                                                    <div class="col-md-12">
                                                        <h3 class="block-title uppercase">Chi tiết game</h3>
                                                    </div>
                                                </div>
                                                <div class="row description-container">
                                                    <div class="col-md-12">
                                                        <div class="ltr description">
                                                            @if($game)
                                                                <p>{!! $game->description !!}</p>
                                                            @endif
                                                        </div>
                                                        <div class="game-info">
                                                            <div class="item">
                                                                <span class="name">Đã thêm vào</span>
                                                                <span class="data">30 Jun 2021</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rating-price">
                                                <?php
                                                    $ageDetail = 0;
                                                    if($game->total_rating) {
                                                        $ageDetail = round($game->total_number / $game->total_rating, 1, PHP_ROUND_HALF_EVEN);
                                                    }
                                                ?>
                                            </div>
                                            <div class="box component_rating" style="margin-bottom: 20px; padding: 15px;">
                                                <h3>Đánh giá sản phẩm</h3>
                                                <div class="component_rating_content"
                                                    style="display: flex;align-items: center;border-radius: 5px;border: 1px solid #dedede">
                                                    <div class="rating-item" style="width: 20%;position: relative">
                                                        <span class="fa fa-star"
                                                            style="font-size: 100px;color: #fd9727;display: block;margin: 0 auto;text-align: center"></span><b
                                                            style="position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);color: white;font-size: 20px">{{$ageDetail}}</b>
                                                    </div>
                                                    <div class="list-rating" style="width: 60%;padding: 20px">
                                                        @foreach($arrayRatings as $key => $arrayRating)
                                                            <?php
                                                                $itemAge = round(($arrayRating['total'] / $game->total_rating) * 100,0)
                                                            ?>
                                                            <div class="item_rating" style="display: flex;align-items: center">
                                                                <div style="width: 10%;font-size: 14px">
                                                                    {{ $key }} <span class="fa fa-star"></span>
                                                                </div>
                                                                <div style="width: 70%;margin: 0 20px">
                                                                    <span
                                                                        style="width: 100%;height: 8px;display: block;background-color: #dedede"><b
                                                                            style="width: {{$itemAge}}%;background-color: #f25800;display: block;height: 100%"></b></span>
                                                                </div>
                                                                <div style="width: 20%">
                                                                    <a style="display: inline-block;color: #288ad6" href="">{{$arrayRating['total']}} đánh giá ({{$itemAge}}%)</a>
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                    <div style="width: 30%">
                                                        <a href="" class="{{\Auth::id() ? 'js_rating_action' : 'js-show-login'}}"
                                                        style="width: 200px;background-color: #288ad6;padding: 10px;color: white;border-radius: 5px">Gửi đánh giá của bạn</a>
                                                    </div>
                                                </div>
                                                <div class="form_rating hide">
                                                    <div style="display: flex;margin-top: 15px;font-size: 15px">
                                                        <p style="margin-bottom: 0">Chọn đánh giá của bạn</p>
                                                        <span style="margin: 0 15px" class="list_start">
                                                            @for($i = 1 ; $i<=5 ; $i++)
                                                                <i class="fa fa-star" data-key="{{$i}}"></i>
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
                                            <div class="box comments">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h3 class="block-title uppercase">Bình luận <span class="number-with-dot comments-counter counter">1006</span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box items-grid related-items">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h3 class="block-title uppercase">Các trò chơi liên quan</h3>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                @foreach($games as $game)
                                                    <div class="col-md-3 col-sm-6 col-6 equel-grid">
                                                        <div class="gameItem">
                                                            <div class="gameItemImg">
                                                                <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                                                                    <img src="{{asset(pare_url_file($game->avatar))}}" width="120" height="100">
                                                                </a>
                                                            </div>
                                                            <div class="gameItemName-o">
                                                                <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">{{$game->name}}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="box tags">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="block-title uppercase">Gắn thẻ <a href="#">Tất cả các thẻ</a></div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 tags-list">
                                                        <a href="/tags/1_player"><i class="tag-36x28 tag-36x28-games tag-36x28-10"></i><p>1 Người chơi</p></a>
                                                        <a href="/tags/blood"><i class="tag-36x28 tag-36x28-games tag-36x28-49"></i><p>Máu</p></a>
                                                        <a href="/tags/mouse_skill"><i class="tag-36x28 tag-36x28-games tag-36x28-83"></i><p>Kỹ năng Dùng chuột</p></a>
                                                        <a href="/tags/3d"><i class="tag-36x28 tag-36x28-games tag-36x28-205"></i><p>3D</p></a>
                                                        <a href="/tags/violence"><i class="tag-36x28 tag-36x28-games tag-36x28-231"></i><p>Bạo lực</p></a>
                                                        <a href="/tags/running"><i class="tag-36x28 tag-36x28-games tag-36x28-233"></i><p>Chạy đua</p></a>
                                                        <a href="/tags/android_game"><i class="tag-36x28 tag-36x28-games tag-36x28-313"></i><p>Android</p></a>
                                                        <a href="/tags/free_game"><i class="tag-36x28 tag-36x28-games tag-36x28-320"></i><p>Miễn phí</p></a>
                                                        <a href="/tags/unity3d"><i class="tag-36x28 tag-36x28-games tag-36x28-334"></i><p>Unity3D</p></a>
                                                        <a href="/tags/mobile"><i class="tag-36x28 tag-36x28-games tag-36x28-349"></i><p>Di động</p></a>
                                                        <a href="/tags/touchscreen"><i class="tag-36x28 tag-36x28-games tag-36x28-354"></i><p>Cảm ứng</p></a>
                                                        <a href="/tags/webgl"><i class="tag-36x28 tag-36x28-games tag-36x28-380"></i><p>WebGL</p></a>
                                                        <a href="/tags/io_games"><i class="tag-36x28 tag-36x28-games tag-36x28-1150"></i><p>io Games</p></a>
                                                        <a href="/tags/crazy"><i class="tag-36x28 tag-36x28-games tag-36x28-1174"></i><p>Trò chơi điên rồ</p></a>
                                                        <a href="/tags/squid_game"><i class="tag-36x28 tag-36x28-games tag-36x28-1203"></i><p>Squid Game</p></a>
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
            let listStart = $(".list_start .fa");
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
        });
    </script>
@endsection