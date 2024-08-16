<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;

    protected $primarykey='id_projet';


    public function directeurgenerales()
    {
        return $this->belongsTo(Directeurgenerale::class);
    }

    public function chefprojets()
    {
        return $this->belongsTo(Chefprojet::class);
    }
}
