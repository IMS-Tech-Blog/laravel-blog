<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\common\ReturnMsgUtil;

class LoginLogoutController extends Controller
{
    public function login(Request $request) {
    	$email = $request->input('email');
    	$password = $request->input('password');
    	if (Auth::attempt(['email' => $email, 'password' => $password])) {
            return ReturnMsgUtil::getSuccessMsg("success!");
        }
        return ReturnMsgUtil::getErrorMsg("不好意思呀，登录名或者密码不正确！");
    }

    public function logout() {
    	Auth::logout();
    }
}
