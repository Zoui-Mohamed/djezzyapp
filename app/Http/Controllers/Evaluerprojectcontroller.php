<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Evaluationprojet;


class Evaluerprojectcontroller extends Controller
{
    public function evaluerprojet(Request $request)
    {


        // Valider les données du formulaire
        $validatedData = $request->validate([
            'noteprojet' => 'required|integer',
            'commentairedeprojet' => 'required|string',
            'id_directeurgenerale' => 'nullable|integer',
        ]);
        

        // Rechercher l'utilisateur avec le nom d'utilisateur et le rôle
        Evaluationprojet::create($validatedData);

        return response()->json(['message' => 'Form data submitted successfully'], 2);

    }
}
