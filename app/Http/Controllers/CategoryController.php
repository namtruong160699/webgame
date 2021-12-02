<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Game;

class CategoryController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getListGame(Request $request)
    {
        $url = $request->segment(2);
        $url = preg_split('/(-)/i', $url);

        if($id = array_pop($url)) {
            $games = Game::where('category_id', $id);

            $games = $games->paginate(6);

            $categoryGame = Game::find($id);

            $viewData = [
                'games'        => $games,
                'categoryGame' => $categoryGame
            ];

            return view('games.index', $viewData);
        }

        if($request->search)
        {
            $games = Game::where([
                'active'    => 1
            ])->where('name','like','%'.$request->search.'%');

            $games = $games->paginate(6);

            return view('games.index',compact('games'));
        }
        return redirect('/');
    }

}
