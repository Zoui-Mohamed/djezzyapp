<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meeting;


class Lancermeetingcontroller extends Controller
{
    public function lancermeeting(Request $request)
    {
        

        // Valider les données du formulaire
        $validatedData = $request->validate([
            'titremeeting' => 'required|string',
            'utilisateurmeeting' => 'required|string',
            'discriptionmeeting' => 'required|string',
            'membremeeting' => 'required|string',
            'datemeeting' => 'nullable|date',
            'chefprojet_id' => 'nullable|integer',
        ]);


        

        // Rechercher l'utilisateur avec le nom d'utilisateur et le rôle
        Meeting::create($validatedData);

        return response()->json(['message' => 'Form data submitted successfully']);

    }
}
