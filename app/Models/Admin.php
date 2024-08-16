<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $primarykey='id_admin';


    public function comptes()
    {
        return $this->hasMany(Compte::class);
    }

    public function employers()
    {
        return $this->belongsTo(Employer::class);
    }
}
