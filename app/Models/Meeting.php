<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $primarykey='id_meeting';


    public function chefprojets()
    {
        return $this->belongsTo(Chefprojet::class);
    }
}
