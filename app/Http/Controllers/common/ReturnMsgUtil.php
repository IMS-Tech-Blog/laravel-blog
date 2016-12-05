<?php

namespace App\Http\Controllers\common;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ReturnMsgUtil extends Controller
{
    public static function getDisappearMsg($msg) {
    	$result['code'] = '400';
    	$result['msg'] = $msg;
    	return response()->json($result);
    }

    public static function getSuccessMsg($msg) {
    	$result['code'] = '200';
    	$result['msg'] = $msg;
    	return response()->json($result);
    }

    public static function getErrorMsg($msg) {
    	$result['code'] = '500';
    	$result['msg'] = $msg;
    	return response()->json($result);
    }
}
