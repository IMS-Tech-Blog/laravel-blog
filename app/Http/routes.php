<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use App\Http\Controllers\SitesController;

use App\Http\Controllers\ArticleController;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/', 'SitesController@index');

// Route::get('/phpinfo', 'SitesController@phpinfo');

// Route::get('/about/{id}', 'SitesController@about');

Route::resource('/articles', 'ArticleController');

Route::resource('/weixin', 'WeiXinController');


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => 'web'], function () {
    // Route::auth();

    Route::post('/login', 'LoginLogoutController@login');
    
    Route::post('/logout', 'LoginLogoutController@logout');

    Route::get('/home', 'HomeController@index');

    Route::resource('user','UserController');

    Route::resource('image','ImageController');

    Route::get('/image/{projectName}/{pixelLevel}/{imageName}','ImageController@show');
});
