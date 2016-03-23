<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Gate;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller {

	public function __construct() {
        $this->middleware('auth');
    }

	public function index() {
		if (Gate::denies('userCDSU')) {       
    		return self::getErrorMsg("索厘！您没有这个权限呢！");
		}
    	$users = User::all();
        return view('user.index', ['user' => $users]);
    }

    public function show($id) {
    	$result = self::getUser($id);
    	if($result['code'] == 400) {
    		return self::getDisappearMsg("亲，查找不到对应的用户信息，请检查后重试哦！");
    	}
    	$user = $result['data'];
		$result['code'] = '200';
		$data = ["name"=>$user->name,"email"=>$user->email,"role_id"=>$user->role_id];
    	$result['data'] = $data;
    	return json_encode($result);
}

     public function create() {
		if (Gate::denies('userCDSU')) {       
    		return self::getErrorMsg("索厘！您没有这个权限呢！");
		}
     	$postUrl = route('user.store');
    $csrf_field = csrf_field();
    $html = <<<CREATE
        <form action="$postUrl" method="POST">
            $csrf_field
            <input type="text" name="name"><br/><br/>
            <input type="text" name="email"><br/><br/>
            <input type="text" name="password"><br/><br/>
            <input type="text" name="role_id"><br/><br/>
            <input type="submit" value="提交"/>
        </form>
CREATE;
    return $html;
    }

    public function store(Request $request) {
		if (Gate::denies('userCDSU')) {       
    		return self::getErrorMsg("索厘！您没有这个权限呢！");
		}
    	$data = $request->all();
    	$validator = self::storeValidate($data);
    	if ($validator->fails()) {
       		$msg = $validator->messages();
       		return self::getInvalidMsg($msg);
    	}
    	self::save($data);
        return redirect()->route('user.index');
    }

    public function edit($id) {
		if (Gate::denies('userCDSU')) {       
    		return self::getErrorMsg("索厘！您没有这个权限呢！");
		}
    	$result = self::getUser($id);
    	if($result['code'] == 400) {
    		return self::getDisappearMsg("亲，查找不到对应的用户信息，请检查后重试哦！");
    	}
    	$user = $result['data'];
    	$postUrl = route('user.update', ['userId'=>$id]);
    	$csrf_field = csrf_field();
    	$html = <<<UPDATE
        <form action="$postUrl" method="POST">
            $csrf_field
            <input type="hidden" name="_method" value="PUT"/>
            <input type="text" name="name" value="{$user['name']}"><br/><br/>
            <input type="text" name="password" value=""><br/><br/>
            <input type="text" name="role_id" value="{$user['role_id']}"><br/><br/>
            <input type="submit" value="提交"/>
        </form>
UPDATE;
    return $html;

	}

	public function update(Request $request, $id) {
		if (Gate::denies('userCDSU')) {       
    		return self::getErrorMsg("索厘！您没有这个权限呢！");
		}
		$result = self::getUser($id);
    	if($result['code'] == 400) {
    		return self::getDisappearMsg("亲，查找不到对应的用户信息，请检查后重试哦！");
    	}
    	$user = $result['data'];
        $data = $request->all();
        $validator = self::updateValidate($data);
    	if ($validator->fails()) { 
       		$msg = $validator->messages();
       		return self::getInvalidMsg($msg);
    	}
    	self::updateUser($user, $data);
    	return "success";
	}

	public function destroy($id) {
		if (Gate::denies('userCDSU')) {       
    		return self::getErrorMsg("索厘！您没有这个权限呢！");
		}
    	$result = self::getUser($id);
    	if($result['code'] == 400) {
    		return self::getDisappearMsg("亲，查找不到对应的用户信息，请检查后重试哦！");
    	}
    	$user = $result['data'];
    	$user->delete();
    	return self::getSuccessMsg("删除成功了！");

	}

	public function getUser($id) {
		$result = array('code'=>200);
    	if (!$id) {
			$result['code'] = 400;
    	}
    	$user = User::find($id);
    	if(!$user) {
    		$result['code'] = 400;
    	}
    	$result['data'] = $user;
    	return $result;
    }

    public function getInvalidMsg($msg) {
    	$result['code'] = '400';
    	$data = array();
    	if($msg->has('name')) {
    		$data['name'] = $msg->first('name');
    	}
    	if($msg->has('email')) {
    		$data['email'] = $msg->first('email');
    	}
    	if($msg->has('password')) {
    		$data['password'] = $msg->first('password');
    	}
    	if($msg->has('role_id')) {
    		$data['role_id'] = $msg->first('role_id');
    	}
    	$result['data'] = $data;
    	return json_encode($result);
    }

    public function getDisappearMsg($msg) {
    	$result['code'] = '400';
    	$result['msg'] = $msg;
    	return json_encode($result);
    }

    public function getSuccessMsg($msg) {
    	$result['code'] = '200';
    	$result['msg'] = $msg;
    	return json_encode($result);
    }

    public function getErrorMsg($msg) {
    	$result['code'] = '500';
    	$result['msg'] = $msg;
    	return json_encode($result);
    }

    public function storeValidate($data) {
    	return $validator = Validator::make($data, [
        	'name' => 'required|max:255',
        	'email' => 'required|email|max:255|unique:users',
        	'password' => 'required|min:8',
        	'role_id' => 'required',
    	]);
    }

    public function updateValidate($data) {
    	return $validator = Validator::make($data, [
        	'name' => 'required|max:255',
        	'password' => 'required|min:8',
        	'role_id' => 'required',
    	]);
    }

    public function save($data) {
    	$user = new User;
    	$user->name = trim($data['name']);
    	$user->email = trim($data['email']);
    	$user->password = bcrypt(trim($data['password']));
    	$user->role_id = trim($data['role_id']);
        $user->save();
    }

    public function updateUser($user, $data) {
    	$user->name = trim($data['name']);
    	$user->password = bcrypt(trim($data['password']));
    	$user->role_id = trim($data['role_id']);
        $user->save();
    }
}
