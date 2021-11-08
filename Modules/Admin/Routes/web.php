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

Route::prefix('admin')->group(function() {
    Route::get('/', 'DashboardController@index')->name('dashboard');

    Route::group(['prefix' => 'category'], function (){
        Route::get('/','AdminCategoryController@index')->name('admin.get.list.category');
        Route::get('/create','AdminCategoryController@create')->name('admin.get.create.category');
        Route::post('/create','AdminCategoryController@store');
    });

    Route::get('listGame', 'GameController@index')->name('get.list.game');
    Route::get('createGame', 'GameController@create')->name('get.create.game');
    Route::post('createGame', 'GameController@store');
});
