<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = "categories";
	public $timestamps = true;

    const HOMEPAGE = 1;

    protected $homepage = [
        1 => [
            'name'  => 'Hiện',
            'class' => 'badge badge-success'
        ],
        0 => [
            'name'  => 'Ẩn',
            'class' => 'badge badge-danger'
        ]
    ];

    public function getHomePage()
    {
        return array_get($this->homepage,$this->show_homepage,'[N\A]');
    }
}
