<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Storage;
use App\Models\ImageMetaData;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\common\ReturnMsgUtil;

class ImageController extends Controller {
	public static $maxImageSize = 2 * 1024 * 1024;
    public static $imagePathPrefix = '/laravelBlog';
    public static $acceptImageTypes = array('jpg', 'jpeg', 'png', 'gif');
    public static $pixelLevels = array(1, 2, 3, 4, 5, 6, 7, 8, 9);

    public function index() {
    	$csrf_field = csrf_field();
    	$postUrl = route('image.store');
		$html = <<<CREATE
        <form method="POST" action="$postUrl" enctype="multipart/form-data">
		$csrf_field
    		<input type="file" name="myfile" />
    		<input type="submit" name="submit" value="Submit" />
</form>
CREATE;
    return $html;
    }

    public function store(Request $request) {
    	$result = self::imageValidate($request, "myfile");
    	if (!isset($result['statue']) || !$result['statue']) {
    		return $result;
    	}
        return self::save($result);
    }

    public function imageValidate(Request $request, $inputName) {
    	if (!$request->hasFile($inputName)) {
    		return ReturnMsgUtil::getErrorMsg("上传图片内容为空，请选择图片后重新上传！");
		}
		$image = $request->file($inputName);
		$imageSize = $image->getSize();
        if ($imageSize > self::$maxImageSize) {
            return ReturnMsgUtil::getErrorMsg("上传图片太大，图片最大仅支持2M，请重新上传！");
        }
        $imageType = $image->guessExtension();
        if (!in_array(strtolower($imageType), self::$acceptImageTypes)) {
            return ReturnMsgUtil::getErrorMsg("图片格式错误，只支持jpg，jpeg，png，gif格式的图片，请重新上传！");
        }
        $imagePath = $image->getRealPath();
        $imageMD5 = md5_file($imagePath);
        return array('statue'=>true, 'image'=>$image, 'imageMD5'=>$imageMD5);
    }


    public function save($imageInfo) {
        $image = $imageInfo['image'];
        $imageMD5 = $imageInfo['imageMD5'];
        $result = self::saveImage($image, $imageMD5);
        if (!$result['statue']) {
            return ReturnMsgUtil::getErrorMsg("图片存储异常，请急忙呼叫管理员！");
        }
        $result = self::saveMetadata($image, $imageMD5, $result['imagePath']);
        if (!$result) {
            return ReturnMsgUtil::getErrorMsg("图片元数据存储异常，请急忙呼叫管理员！");
        }
        return ReturnMsgUtil::getSuccessMsg("恭喜你！图片已经顺利存储啦！");
    }

    public function saveImage($image, $imageMD5) {
        $imagePath = self::getImagePath($image, $imageMD5);
        $imageTmpPath = $image->getRealPath();
        $result = Storage::put(
            $imagePath,
            file_get_contents($imageTmpPath)
        );
        return array('statue'=>$result, 'imagePath'=>$imagePath);
    }

    public function saveMetadata($image, $imageMD5, $imagePath) {
        $imagesize = getimagesize($image->getRealPath());
        $metaData = new ImageMetaData;
        $metaData->fileName = $image->getClientOriginalName();
        $metaData->width = isset($imagesize[0])?$imagesize[0]:0;
        $metaData->height = isset($imagesize[1])?$imagesize[1]:0;
        $metaData->imagesize = $image->getSize();
        $metaData->md5 = $imageMD5;
        $metaData->filePath = $imagePath;
        $result = $metaData->save();
        return $result;
    }

    public function getImagePath($image, $imageMD5) {
        $imagesize = getimagesize($image->getRealPath());
        $width = isset($imagesize[0])?$imagesize[0]:0;
        $height = isset($imagesize[1])?$imagesize[1]:0;
        $pixels = $width * $height;
        $folderName = self::getFolderName($pixels);
        $imageType = $image->guessExtension();
        return self::$imagePathPrefix . '/' . $folderName . '/' . $imageMD5 . '.' . $imageType;
    }

    public function getFolderName($pixels) {
        $tmpNum = intval($pixels/100000);
        if ($tmpNum == 0) {
            return "following";
        }
        if (in_array($tmpNum, self::$pixelLevels)) {
            return $tmpNum . "HT";
        }
        $tmpNum = intval($tmpNum/10);
        var_dump($tmpNum);
        if (in_array($tmpNum, self::$pixelLevels)) {
            return $tmpNum . "M";
        }
        return "above";
    }

}
