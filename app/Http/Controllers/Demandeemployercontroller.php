<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demande;


class Demandeemployercontroller extends Controller
{
    public function demandeemployer(Request $request)
    {

        // Valider les données du formulaire
        $validatedData = $request->validate([
            'nomdemande' => 'required|string',
            'utlisateur' => 'required|string',
            'datedemande' => 'nullable|date',
            'discriptiondemande' => 'required|string',
            'employer_id' => 'nullable|integer',
        ]);
        


        // Rechercher l'utilisateur avec le nom d'utilisateur et le rôle
        Demande::create($validatedData);

        return response()->json(['message' => 'Form data submitted successfully']);

    }
}
