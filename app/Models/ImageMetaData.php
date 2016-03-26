<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImageMetaData extends Model
{
    protected $fillable = [
        'fileName', 'width', 'height', 'imagesize', 'md5', 'filePath',
    ];
}
