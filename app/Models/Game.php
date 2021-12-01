<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $table = "games";
	public $timestamps = true;

    public function keywords()
    {
        return $this->belongsToMany(Keyword::class, 'game_keywords', 'game_id', 'keyword_id');
    }
}
