<div class="row">
    <div class="col-md-12">
        <h3>Lịch sử các trò đã chơi</h3>
    </div>
    @foreach($gameView as $game)
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