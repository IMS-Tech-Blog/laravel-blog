<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Article;
use App\User;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::all();
        return view('articles.index')->with('articles', $articles);;
    }

    public function login() 
    {
        return view('articles.login')->with('articles', $articles);
    }

    public function create()
    {
        return view('articles.create');
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
