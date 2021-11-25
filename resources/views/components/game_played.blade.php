<div class="row">
    <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="section-title">
            <h4>Game vừa chơi</h4>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="btn__all">
            <a href="#" class="primary-btn">Xem tất cả <span class="arrow_right"></span></a>
        </div>
    </div>
</div>
<div class="row">
@foreach($gameView as $game)
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="inn_box_panel1_box hasVideo">
            <a href="{{route('get.games.play',[$game->file_game,$game->id])}}" class="pic_box" data-nid="24695">
                <div class="thumbnail-image">
                    <div class="b-loader">
                        <img class="b-lazy b-loaded" src="{{asset(pare_url_file($game->avatar))}}" alt="">
                    </div>
                </div>
                <video class="video-thumb" autoplay="" muted="" loop="" playsinline="" style="display: none;">
                    <source src="https://www.addictinggames.com/sites/default/files/evio275x157.mp4" type="video/mp4">
                </video>
            </a>
            <h4 class="txt_box">
                <a href="{{route('get.games.play',[$game->file_game,$game->id])}}">{{$game->name}}</a>
            </h4>
        </div>
    </div>
@endforeach
</div>