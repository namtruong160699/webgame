<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Game;
use ZipArchive;
use File;

class Gamecontroller extends Controller
{
    public function index()
    {
        $games = Game::all();
        return view('admin::games.index', compact('games'));
    }

    public function create()
    {
        return view('admin::games.create');
    }

    public function store(Request $request)
    {
        $game = new Game();
        $game->name = $request->name;
        $game->operating_system = $request->operating_system;
        if ($request->hasFile('avatar'))
        {
            $file = upload_image('avatar');
            if (isset($file['name']))
            {
                $game->avatar = $file['name'];
            }
        }
        if($_FILES['file_game']['name'] != '')
        {
            $file_name = $_FILES['file_game']['name'];
            $array = explode(".", $file_name);
            $name = $array[0];
            $ext = $array[1];
            if($ext == 'zip')
            {
                $path = 'filegame/';
                $location = $path . $file_name;
                if(move_uploaded_file($_FILES['file_game']['tmp_name'], $location))
                {
                    $zip = new ZipArchive;
                    if($zip->open($location))
                    {
                        $zip->extractTo($path);
                        $zip->close();
                    }
                }
            }

            $game->file_game = $name;
        }
        $game->save();

        return redirect()->route('get.list.game');
    }

    public function demoView()
	{
		$games = Game::all();
		return view('admin::games.demoView', compact('games'));
	}

	public function demoViewAjax(Request $request)
	{
		$file_game = isset($request->file_game) ? $request->file_game : "squidgame";

		return response()->json($file_game);
	}
}
