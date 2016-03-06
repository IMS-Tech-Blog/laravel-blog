<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Article;
use App\User;

class SitesController extends Controller
{

    public function index($value='')
    {
        # code...
        return view("welcome");
    }

    public function phpinfo($value='')
    {
        return view('phpinfo');
    }

    public function about($name)
    {
        return view('sites.about')->with('name', $name);
    }

}
