<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Keyword extends Authenticatable
{
    protected $table = 'keywords';
    protected $guarded = [''];
}
