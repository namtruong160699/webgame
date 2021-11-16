<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class, 'ra_user_id');
    }

    public function game()
    {
        return $this->belongsTo(Game::class, 'ra_game_id');
    }
}
