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

Route::get('/', 'DashboardController@index')->name('client.dashboard');
Route::get('/{file}', 'GameController@index')->name('get.demo.view');
Route::get('games/{slug}-{id}','CategoryController@getListProduct')->name('get.list.product');
