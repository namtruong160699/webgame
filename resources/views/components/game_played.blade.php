<div class="row">
    <div class="col-md-12">
        <h3>History of games played</h3>
    </div>
    @foreach($gameView as $game)
        <div class="col-md-2 col-sm-3 col-game">
            <div id="item_{{$game->id}}" class="item thumb videobox">
                <input type="hidden" name="for-girls-{{$game->id}}" id="for-girls-{{$game->id}}" value="false">
                <div class="thumbarea">
                    <div class="microthumb"></div>
                    <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                        <div class="thumb-img-container video2">
                            <img class="thumb playable img-custom overlayImage" alt="{{$game->name}}" src="{{asset(pare_url_file($game->avatar))}}">
                            <video class="thevideo" loop muted onmouseout="this.pause()">
                                <source src="{{asset('uploads/video/'.$game->video)}}" type="video/mp4">
                            </video>
                        </div>
                    </a>
                </div>
                <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">
                    <div class="infos">
                    <p class="title ltr">{{$game->name}}</p>
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
                        @if($game->isNew())
                            <span class="new-item-icon">New</span>
                        @endif
                    </div>
                    <p class="plays-count">{{number_format($game->played)}} chơi</p>
                    </div>
                </a>
            </div>
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