<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluationprojet extends Model
{
    use HasFactory;

    protected $primarykey='id_evaluationprojet';
    
    protected $fillable = [
        'noteprojet',
        'commentairedeprojet',
        'id_directeurgenerale',
    ];

    public function directeurgenerales()
    {
        return $this->belongsTo(Directeurgenerale::class);
    }
}
