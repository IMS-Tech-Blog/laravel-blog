<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Article;
use App\User;

class WeiXinController extends Controller
{

    public function index(Request $request)
    {
        $signature = $request["signature"];
        $timestamp = $request["timestamp"];
        $nonce = $request["nonce"];
        $token = 'weixin';
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );
        if( $tmpStr == $signature ){
            return 'true';
        }else{
            return 'false';
        }
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
