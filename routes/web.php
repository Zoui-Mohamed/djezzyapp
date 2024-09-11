<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Logincontroller;
use App\Http\Controllers\Evaluerprojectcontroller;
use App\Http\Controllers\Demandeemployercontroller;
use App\Http\Controllers\Lancermeetingcontroller;





Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
});

require __DIR__.'/auth.php';



Route::get('inscription',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/inscription', [
        'inscription' => $posts
    ]);
})->name('inscription.index');

Route::post('/inscription', [Logincontroller::class, 'customLogin'])->name('login.custom');
Route::post('/evaluerprojet', [Evaluerprojectcontroller::class, 'evaluerprojet'])->name('evaluerpro.custom');
Route::post('/demandeemployer', [Demandeemployercontroller::class, 'demandeemployer'])->name('demandeemployer.custom');
Route::post('/lancermeeting', [Lancermeetingcontroller::class, 'lancermeeting'])->name('lancermeeting.custom');



Route::get('posts',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceille', [
        'posts' => $posts
    ]);
})->name('posts.index');

Route::get('posts/acceulle',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceille', [
        'acceulle' => $posts
    ]);
})->name('acceulle.index');

Route::get('posts/gestioncompte',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/gestioncompte', [
        'gestioncompte' => $posts
    ]);
})->name('gestioncompte.index');

Route::get('posts/envoyerdemande',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/envoyerdemande', [
        'envoyerdemande' => $posts
    ]);
})->name('envoyerdemande.index');

Route::get('posts/envoyerdemande',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/envoyerdemande', [
        'envoyerdemande' => $posts
    ]);
})->name('envoyerdemande.index');

Route::get('posts/consulterprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/consulterprojet', [
        'consulterprojet' => $posts
    ]);
})->name('consulterprojet.index');

Route::get('posts/archiverprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/archiverprojet', [
        'archiverprojet' => $posts
    ]);
})->name('archiverprojet.index');

Route::get('posts/dashboard',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/dashboard', [
        'dashboard' => $posts
    ]);
})->name('dashboard.index');

Route::get('posts/calendrier',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/calendrier', [
        'calendrier' => $posts
    ]);
})->name('calendrier.index');




Route::get('dg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceulledg', [
        'dg' => $posts
    ]);
})->name('dg.index');

Route::get('dg/acceulledg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceulledg', [
        'acceulledg' => $posts
    ]);
})->name('acceulledg.index');


Route::get('dg/gestionprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/gestionprojet', [
        'gestionprojet' => $posts
    ]);
})->name('gestionprojet.index');

Route::get('dg/envoyerdemandedg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/envoyerdemandedg', [
        'envoyerdemandedg' => $posts
    ]);
})->name('envoyerdemandedg.index');

Route::get('dg/consulterprojetdg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/consulterprojetdg', [
        'consulterprojetdg' => $posts
    ]);
})->name('consulterprojetdg.index');

Route::get('dg/evaluerprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/evaluerprojet', [
        'evaluerprojet' => $posts
    ]);
})->name('evaluerprojet.index');

Route::get('dg/dashboarddg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/dashboarddg', [
        'dashboarddg' => $posts
    ]);
})->name('dashboarddg.index');

Route::get('dg/calendrierdg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/calendrierdg', [
        'calendrierdg' => $posts
    ]);
})->name('calendrierdg.index');

Route::get('chefprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceillecp', [
        'chefprojet' => $posts
    ]);
})->name('chefprojet.index');

Route::get('chefprojet/acceillecp',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceillecp', [
        'acceillecp' => $posts
    ]);
})->name('acceillecp.index');

Route::get('chefprojet/decomposerprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/decomposerprojet', [
        'decomposerprojet' => $posts
    ]);
})->name('decomposerprojet.index');

Route::get('chefprojet/lancermeeting',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/lancermeeting', [
        'lancermeeting' => $posts
    ]);
})->name('lancermeeting.index');

Route::get('chefprojet/consulterprojetcp',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/consulterprojetcp', [
        'consulterprojetcp' => $posts
    ]);
})->name('consulterprojetcp.index');

Route::get('chefprojet/dashboardcp',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/dashboardcp', [
        'dashboardcp' => $posts
    ]);
})->name('dashboardcp.index');

Route::get('chefprojet/calendriercp',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/calendriercp', [
        'calendriercp' => $posts
    ]);
})->name('calendriercp.index');

Route::get('employer',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceilleem', [
        'employer' => $posts
    ]);
})->name('employer.index');

Route::get('employer/acceilleem',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceilleem', [
        'acceilleem' => $posts
    ]);
})->name('acceilleem.index');

Route::get('employer/findetaches',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/findetaches', [
        'findetaches' => $posts
    ]);
})->name('findetaches.index');

Route::get('employer/envoyerdemandeem',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/envoyerdemandeem', [
        'envoyerdemandeem' => $posts
    ]);
})->name('envoyerdemandeem.index');

Route::get('employer/consulterprojetem',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/consulterprojetem', [
        'consulterprojetem' => $posts
    ]);
})->name('consulterprojetem.index');

Route::get('employer/dashboardem',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/dashboardem', [
        'dashboardem' => $posts
    ]);
})->name('dashboardem.index');

Route::get('employer/calendrierem',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/calendrierem', [
        'calendrierem' => $posts
    ]);
})->name('calendrierem.index');

Route::get('traficmanager',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceilletm', [
        'traficmanager' => $posts
    ]);
})->name('traficmanager.index');

Route::get('traficmanager/acceilletm',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/acceilletm', [
        'acceilletm' => $posts
    ]);
})->name('acceilletm.index');

Route::get('traficmanager/gestiontache',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/gestiontache', [
        'gestiontache' => $posts
    ]);
})->name('gestiontache.index');

Route::get('traficmanager/affecttaches',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/affecttaches', [
        'affecttaches' => $posts
    ]);
})->name('affecttaches.index');

Route::get('traficmanager/envoyerdemandetm',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/envoyerdemandetm', [
        'envoyerdemandetm' => $posts
    ]);
})->name('envoyerdemandetm.index');

Route::get('traficmanager/consulterprojettm',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/consulterprojettm', [
        'consulterprojettm' => $posts
    ]);
})->name('consulterprojettm.index');

Route::get('traficmanager/dashboardtm',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/dashboardtm', [
        'dashboardtm' => $posts
    ]);
})->name('dashboardtm.index');

Route::get('traficmanager/calendriertm',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/calendriertm', [
        'calendriertm' => $posts
    ]);
})->name('calendriertm.index');

Route::get('profile',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/profile', [
        'user' => $posts
    ]);
})->name('user.index');

Route::get('ajoutercompte',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/ajoutercompte', [
        'ajoutercompte' => $posts
    ]);
})->name('ajoutercompte.index');