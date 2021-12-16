<div class="row">
    <div class="col-md-12">
        <h3>Lịch sử các trò đã chơi</h3>
    </div>
    @foreach($gameView as $game)
        <div class="col-sm-2">
            <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                <div class="event-list-item colmd4">
                    <div class="event-list-pic video2">
                        <img class="img-custom overlayImage" src="{{asset(pare_url_file($game->avatar))}}" alt="image">
                        <video class="thevideo" loop muted poster="{{asset(pare_url_file($game->avatar))}}" onmouseout="this.pause()">
                            <source src="{{asset('uploads/video/'.$game->video)}}" type="video/mp4">
                        </video>
                    </div>
                    <div class="event-text clearfix" style="margin-top: -7px">
                        <p class="title-custom p-custom">{{$game->name}}</p>
                        <div class="technology">
                            @if($game->operating_system == 1)
                            <p class="unity_webgl p-custom">
                                WebGL
                            </p>
                            @else
                            <p class="html5 p-custom">
                                HTML5
                            </p>
                            @endif
                        </div>
                        <p class="plays-count p-custom">{{$game->played}} chơi</p>
                    </div>
                </div>
            </a>
        </div>
    @endforeach
</div>
<script>
    $(document).ready(function() {
        $('.video2').each(function(i, obj) {
            $(this).on("mouseover", hoverVideo);
            $(this).on("mouseout", hideVideo);
        });
    });

    function hoverVideo() {
        $(this).find(".overlayImage").hide();
        $(this).find(".thevideo")[0].play();
    }

    function hideVideo(video) {
        $(this).find(".thevideo")[0].currentTime = 0;
        $(this).find(".thevideo")[0].pause();
        $(this).find(".overlayImage").show();
    }
</script>