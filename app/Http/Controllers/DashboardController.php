<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class DashboardController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }
    
    public function index()
    {
        $games = Game::all();
        return view('dashboards.index', compact('games'));
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
