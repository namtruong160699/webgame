<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Rating;
use Carbon\Carbon;

class RatingController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function saveRating(Request $request, $id)
    {
        if($request->ajax())
        {
            Rating::insert([
                'ra_game_id'    => $id,
                'ra_number'     => $request->number,
                'ra_content'    => $request->content,
                'ra_user_id'    => get_data_user('web'),
                'created_at'    => Carbon::now(),
                'updated_at'    => Carbon::now()
            ]);

            $game = Game::find($id);
            $game->total_number += $request->number;
            $game->total_rating += 1;
            $game->save();

            return response()->json(['code' => '1']);
        }
    }
}
