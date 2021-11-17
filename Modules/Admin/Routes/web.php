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
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

    Route::group(['prefix' => 'category'], function (){
        Route::get('/','AdminCategoryController@index')->name('admin.get.list.category');
        Route::get('/create','AdminCategoryController@create')->name('admin.get.create.category');
        Route::post('/create','AdminCategoryController@store');
    });

    Route::group(['prefix' => 'rating'], function (){
        Route::get('/','AdminRatingController@index')->name('admin.get.list.rating');
    });

    Route::group(['prefix' => 'game'], function (){
        Route::get('/', 'AdminGamecontroller@index')->name('get.list.game');
        Route::get('create', 'AdminGamecontroller@create')->name('get.create.game');
        Route::post('create', 'AdminGamecontroller@store');
        Route::get('/update/{id}', 'AdminGamecontroller@edit')->name('get.edit.game');
        Route::post('/update/{id}', 'AdminGamecontroller@update');
    });
});
