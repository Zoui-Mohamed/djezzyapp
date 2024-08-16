<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tache extends Model
{
    use HasFactory;

    protected $primarykey='id_tache';


    public function traficmanagers()
    {
        return $this->belongsTo(Traficmanager::class);
    }
}
