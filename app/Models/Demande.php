<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;
    protected $primarykey='id_demande';

    protected $table='demandes';

    protected $fillable = [
        'datedemande',
        'nomdemande',
        'utlisateur',
        'discriptiondemande',
        'employer_id',
    ];

    public function employers(){
        return $this->belongsToMany(Employer::class,'employer_demande','id_employer','id_demande');
    }
}
