<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class GameController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }
    
	public function index(Request $request)
    {
    	$file_game = $request->file;
        $games = Game::paginate(4);
        return view('games.demoView', compact('games','file_game'));
    }
}
