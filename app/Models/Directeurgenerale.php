<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directeurgenerale extends Model
{
    use HasFactory;

    protected $primarykey='id_directuergenerale';


    public function projets()
    {
        return $this->hasMany(Projet::class);
    }

    public function evaluationprojets()
    {
        return $this->hasMany(Evaluationprojet::class);
    }

    public function employers()
    {
        return $this->belongsTo(Employer::class);
    }
}
