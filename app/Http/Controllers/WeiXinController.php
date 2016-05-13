<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Article;
use App\User;

class WeiXinController extends Controller
{

    public function index()
    {
        
        return 'hello';
    }

    public function login() 
    {
        return "";
    }

    public function create()
    {
        return "";
    }

    public function store()
    {
        $input = Request::all();
        return $input;
    }

    public function show($id)
    {
        $article = Article::findOrFail($id);
        return view('articles.show')->with('article', $article);
    }

    public function update()
    {
        # code ... 6
    }

    public function edit()
    {
        # code...
    }


}
