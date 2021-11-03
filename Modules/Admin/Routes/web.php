<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('admins')->group(function() {
    Route::get('/', 'DashboardController@index')->name('dashboard');
    Route::get('listGame', 'GameController@index')->name('get.list.game');
    Route::get('createGame', 'GameController@create')->name('get.create.game');
    Route::post('createGame', 'GameController@store');
    Route::get('demoView', 'GameController@demoView')->name('get.demo.view');
    Route::get('demoViewAjax', 'gamecontroller@demoviewajax')->name('get.demo.view.ajax');
});
