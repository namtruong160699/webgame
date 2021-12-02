<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::group(['namespace' => 'Auth'], function (){
    Route::get('dang-ky','RegisterController@getRegister')->name('get.register');
    Route::post('dang-ky','RegisterController@postRegister')->name('post.register');

    Route::get('xac-nhan-tai-khoan','RegisterController@verifyAccount')->name('user.verify.account');

    Route::get('dang-nhap','LoginController@getLogin')->name('get.login');
    Route::post('dang-nhap','LoginController@postLogin')->name('post.login');

    Route::get('dang-xuat','LoginController@getLogout')->name('get.logout.user');

    Route::get('/lay-lai-mat-khau','ForgotPasswordController@getFormResetPassword')->name('get.reset.password');
    Route::post('/lay-lai-mat-khau','ForgotPasswordController@sendCodeResetPassword');

    Route::get('/password/reset','ForgotPasswordController@resetPassword')->name('get.link.reset.password');
    Route::post('/password/reset','ForgotPasswordController@saveResetPassword');
});

Route::get('/', 'HomeController@index')->name('client.dashboard');
Route::get('/{file}-{id}', 'GameController@index')->name('get.games.play');
Route::get('categories/{slug}-{id}','CategoryController@getListGame')->name('get.list.game.client');
Route::get('game','CategoryController@getListGame')->name('get.game.list');
Route::post('/danh-gia/{id}','RatingController@saveRating')->name('post.rating.game');
Route::post('ajax-favourite/{gameId}','GameController@insertLike')->name('ajax_get.user.add_favourite');
Route::post('game-fav-game','GameController@gameFavGame')->name('ajax.game.fav.game');

Route::group(['prefix'=>'ajax'],function (){
    Route::post('/view-game','HomeController@renderGame')->name('get.games.played');
});
