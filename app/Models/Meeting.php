<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $primarykey='id_meeting';

    protected $table='meetings';

    protected $fillable = [
        'datemeeting',
        'titremeeting',
        'utilisateurmeeting',
        'discriptionmeeting',
        'membremeeting',
        'chefprojet_id',
    ];

    public function chefprojets()
    {
        return $this->belongsTo(Chefprojet::class);
    }
}
