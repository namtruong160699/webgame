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

    public function getListProduct(Request $request)
    {
        $url = $request->segment(2);
        $url = preg_split('/(-)/i', $url);

        if($id = array_pop($url)) {
            $games = Game::where('category_id', $id);

            $games = $games->paginate(8);

            $categoryGame = Game::find($id);

            $viewData = [
                'games'        => $games,
                'categoryGame' => $categoryGame
            ];

            return view('games.index', $viewData);
        }
        return redirect('/');
    }

}
