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

    Route::get('/reset-password','ForgotPasswordController@getFormResetPassword')->name('get.reset.password');
    Route::post('/reset-password','ForgotPasswordController@sendCodeResetPassword');

    Route::get('/password/reset','ForgotPasswordController@resetPassword')->name('get.link.reset.password');
    Route::post('/password/reset','ForgotPasswordController@saveResetPassword');
});

Route::get('/', 'HomeController@index')->name('client.dashboard');
Route::get('/{file}-{id}', 'GameController@index')->name('get.games.play');
Route::get('categories/{slug}-{id}','CategoryController@getListGame')->name('get.list.game.client');
Route::get('game','CategoryController@getListGame')->name('get.game.list');
Route::post('/danh-gia/{id}','RatingController@saveRating')->name('post.rating.game');
Route::post('game-fav-game','GameController@gameFavGame')->name('ajax.game.fav.game');
Route::get('/ajax_comment','GameController@ajax_comments')->name('get.ajax.comments');

Route::group(['prefix'=>'ajax'],function (){
    Route::post('/view-game','HomeController@renderGame')->name('get.games.played');
});

Route::group(['prefix'=>'user','middleware' => 'CheckLoginUser'],function (){
    Route::get('/','UserController@index')->name('get.user.info');
    Route::get('/info','UserController@updateInfo')->name('user.update.info');
    Route::post('/info','UserController@saveUpdateInfo');
    Route::post('change-profile-picture', 'UserController@updatePicture')->name('get.update.user.picture');
    Route::get('/password','UserController@changePassword')->name('user.update.password');
    Route::post('/password','UserController@saveChangePassword');
});
