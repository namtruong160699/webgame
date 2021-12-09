<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class UserController extends Controller
{
    public function index()
    {
        $userId = \Auth::id();
        $games = Game::whereHas('favourite', function($query) use ($userId) {
            $query->where('user_id', $userId);
        })->select('id','name','avatar')
            ->paginate(10);
        return view('user.index', compact('games'));
    }
}
