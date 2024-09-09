<?php

namespace App\Http\Controllers;
// namespace App\Enums;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


// enum poste: string
// {
//     case Dg = 'directeurgenerale';
//     case Chefprojet = 'chefprojet';
//     case Employer = 'employer';
//     case Admin = 'administrator';
//     case Traficmanager = 'traficmanager';

// }


class Logincontroller extends Controller
{

    public function customLogin(Request $request)
    {
        // Valider les données du formulaire
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        // Rechercher l'utilisateur avec le nom d'utilisateur et le rôle
        $employer = Employer::where('username', $request->username)
                    ->first();


        // Vérifier si l'utilisateur existe et si le mot de passe est correct
        if ($employer && Hash::check($request->password, $employer->password)) {
            // Authentifier l'utilisateur
            Auth::login($employer);

            // Rediriger en fonction du rôle
            if ($employer->poste == 'admin') {
                return redirect()->route('posts.index');
            } elseif ($employer->poste == 'employer') {
                return redirect()->route('employer.index');
            }
            elseif ($employer->poste == 'chef de projet') {
                return redirect()->route('chefprojet.index');
            }elseif ($employer->poste == 'directeur general') {
                return redirect()->route('dg.index');
            }elseif ($employer->poste == 'trafic manager') {
                return redirect()->route('traficmanager.index');
            }
        } else {
            // Si les informations d'identification sont incorrectes
            return back()->withErrors(['login' => 'Invalid credentials.']);
        }
    }
}
