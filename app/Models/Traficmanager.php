<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traficmanager extends Model
{
    use HasFactory;

    protected $primarykey='id_traficmanager';


    public function taches()
    {
        return $this->hasMany(Tache::class);
    }

    public function employers()
    {
        return $this->belongsTo(Employer::class);
    }

}
