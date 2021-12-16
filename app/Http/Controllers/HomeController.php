<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class HomeController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }
    
    public function index()
    {
        $games = Game::where('active', 1)->orderByDesc('id')->paginate(60);
        $countGame = \DB::table('games')->count();
        $count_games_by_category = \DB::table('categories')
            ->join('games', 'categories.id', '=', 'games.category_id')
            ->select('categories.id as id', 'categories.name as name', 'categories.slug as slug', 'categories.color as color', \DB::raw("count(*) as count"))
            ->groupBy('categories.id')
            ->paginate(7);
        return view('dashboards.index', compact('games','countGame','count_games_by_category'));
    }

    public function renderGame(Request $request)
    {
        if($request->ajax())
        {
            $listId = $request->id;
            $gameView = Game::whereIn('id', $listId)->get();
            $html  = view('components.game_played', compact('gameView'))->render();
            return response()->json(['data' => $html]);
        }
    }
}
