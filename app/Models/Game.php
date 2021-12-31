<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Game extends Model
{
    protected $table = "games";
	public $timestamps = true;

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class, 'game_keywords', 'game_id', 'keyword_id');
    }

    public function favourite()
    {
        return $this->belongsToMany(User::class, 'user_favourite','game_id','user_id');
    }

    public function isNew()
    {
        return time() - (60 * 60 * 24 * 7) < strtotime($this->created_at);
    }
}
