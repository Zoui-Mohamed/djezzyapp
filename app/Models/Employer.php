<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employer extends Authenticatable
{
    use HasFactory;
    protected $primarykey='id_employer';
    protected $table='employers';

    public function messages(){
        return $this->belongsToMany(Message::class,'employer_message','id_employer','id_message');
    }

    public function demandes(){
        return $this->belongsToMany(Demande::class,'employer_demande','id_employer','id_demande');
    }

    
}
