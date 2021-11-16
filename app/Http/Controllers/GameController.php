<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Rating;
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
}
