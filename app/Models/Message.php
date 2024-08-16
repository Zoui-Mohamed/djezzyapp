<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $primarykey='id_message';
    protected $table='message';

    public function employers(){
        return $this->belongsToMany(Employer::class,'employer_message','id_employer','id_message');
    }

    
}
