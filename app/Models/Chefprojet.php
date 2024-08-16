<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chefprojet extends Model
{
    use HasFactory;

    protected $primarykey='id_chefprojet';


    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }

    public function projets()
    {
        return $this->hasMany(Projet::class);
    }

    public function employers()
    {
        return $this->belongsTo(Employer::class);
    }
}
