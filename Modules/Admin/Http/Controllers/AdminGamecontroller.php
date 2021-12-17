<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Game;
use ZipArchive;
use File;
use App\Models\Category;
use App\Models\Keyword;

class AdminGameController extends Controller
{
    public function index()
    {
        $games = Game::all();
        return view('admin::games.index', compact('games'));
    }

    public function create()
    {
        $categories = $this->getCategories();
        $keywords = Keyword::all();
        return view('admin::games.create', compact('categories', 'keywords'));
    }

    public function store(Request $request)
    {
        $game = new Game();
        $game->name = $request->name;
        $game->operating_system = $request->operating_system;
        $game->category_id = $request->category_id;
        $game->description = $request->description;
        if ($request->hasFile('avatar'))
        {
            $file = upload_image('avatar');
            if (isset($file['name']))
            {
                $game->avatar = $file['name'];
            }
        }
        if($_FILES['video']['name'] != '')
        {
            $file_name = $_FILES['video']['name'];
            $array = explode(".", $file_name);
            $name = $array[0];
            $ext = $array[1];
            if($ext == 'mp4' || $ext == 'ogg')
            {
                $request->video->move(public_path('/uploads/video'), $file_name);
            }

            $game->video = $file_name;
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
        $game->keywords()->attach($request->keywords);

        return redirect()->route('admin.get.list.game');
    }

    public function getCategories()
    {
        return Category::all();
    }

    public function edit($id)
    {
        $game = Game::find($id);
        $categories = $this->getCategories();
        $keywords = Keyword::all();
        $keywordOfGame = $game->keywords;
        $viewData = [
            'game'          => $game,
            'categories'    => $categories,
            'keywords'      => $keywords,
            'keywordOfGame' => $keywordOfGame
        ];

        return view('admin::games.update', $viewData);
    }

    public function update(Request $request, $id)
    {
        $game = Game::find($id);
        $game->name = $request->name;
        $game->operating_system = $request->operating_system;
        $game->category_id = $request->category_id;
        $game->description = $request->description;
        if ($request->hasFile('avatar'))
        {
            $file = upload_image('avatar');
            if (isset($file['name']))
            {
                $game->avatar = $file['name'];
            }
        }
        if($_FILES['video']['name'] != '')
        {
            $file_name = $_FILES['video']['name'];
            $array = explode(".", $file_name);
            $name = $array[0];
            $ext = $array[1];
            if($ext == 'mp4' || $ext == 'ogg')
            {
                $request->video->move(public_path('/uploads/video'), $file_name);
            }

            $game->video = $file_name;
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
        $game->keywords()->sync($request->keywords);

        return redirect()->route('admin.get.list.game');
    }
}
