<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class GameKeyword extends Authenticatable
{
    protected $table = 'game_keywords';
    protected $guarded = [''];
}
