<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flat extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'room',
        'bed',
        'wc',
        'mq',
        'image',
        'description',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
