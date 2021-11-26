<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Rating;
use App\Models\UserFavourite;
use Illuminate\Support\Facades\DB;

class GameController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }
    
	public function index(Request $request)
    {
        $url = $request->segment(1);
        $url = preg_split('/(-)/i',$url);
        if ($id = array_pop($url))
        {
            $game = Game::find($id);
            $games = Game::paginate(4);
            $ratings = Rating::with('user:id,name')->where('ra_game_id',$id)->orderBy('id','DESC')->paginate(4);

            // Gom nhóm lại tổng xem
            $ratingsDashboard = Rating::groupBy('ra_number')
                ->where('ra_game_id', $id)
                ->select(DB::raw('count(ra_number) as total'), DB::raw('sum(ra_number) as sum'))
                ->addSelect('ra_number')
                ->get()
                ->toArray();
            $arrayRatings = [];
            if(!empty($ratingsDashboard))
            {
                for ($i = 5; $i >=1; $i --)
                {
                    $arrayRatings[$i] = [
                        "total" => 0,
                        "sum" => 0,
                        "ra_number" => 0
                    ];
                    foreach ($ratingsDashboard as $item)
                    {
                        if ($item['ra_number'] == $i)
                        {
                            $arrayRatings[$i] = $item;
                            continue;
                        }
                    }
                }
            }

            $viewData = [
                'games'         => $games,
                'game'          => $game,
                'ratings'       => $ratings,
                'arrayRatings'  => $arrayRatings
            ];

            return view('games.gamePlay', $viewData);
        }
    }

    public function insertLike(Request $request, $id)
    {
        if($request->ajax())
        {
            // Kiểm tra tồn tại game
            $game = Game::find($id);
            if(!$game) {
                return response(['message' => 'Game không tồn tại']);
            }
            $message = 'Thêm yêu thích thành công!';
            try {
                \DB::table('user_favourite')
                    ->insert([
                        'game_id' => $id,
                        'user_id' => get_data_user('web'),
                    ]);
            } catch (\Exception $e) {
                $message = 'Game này đã được yêu thích';
            }
            return response(['message' => $message]);
        }
    }

    public function gameFavGame(Request $request)
    {
        $game_id = $request['game_id'];

        $fav = \DB::table('user_favourite')
            ->where('game_id', $game_id)
            ->where('user_id', get_data_user('web'))
            ->first();

        if(!$fav) {
            $newFav = new UserFavourite;
            $newFav->game_id = $game_id;
            $newFav->user_id = get_data_user('web');
            $newFav->fav = 1;
            $newFav->save();
            $is_fav = 1;
        }elseif($fav->fav == 1) {
            \DB::table('user_favourite')
                ->where('game_id', $game_id)
                ->where('user_id', get_data_user('web'))
                ->delete();
                $is_fav = 0;
        }elseif($fav->fav == 0) {
            \DB::table('user_favourite')
                ->where('game_id', $game_id)
                ->where('user_id', get_data_user('web'))
                ->update(['fav'=> 1] );
                $is_fav = 1;
        }
        $response = array(
            'is_fav'=>$is_fav,
        );
        return response()->json($response, 200);
    }
}
