<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class UserFavourite extends Authenticatable
{
    protected $table = 'user_favourite';
    public $timestamps = false;
}
