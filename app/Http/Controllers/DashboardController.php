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
}
