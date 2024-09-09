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
    return Inertia::render('projectdjezzy/admin/admin', [
        'posts' => $posts
    ]);
})->name('posts.index');



Route::get('dg',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/directeurgeneral', [
        'dg' => $posts
    ]);
})->name('dg.index');



Route::get('chefprojet',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/chefdeprojet', [
        'chefprojet' => $posts
    ]);
})->name('chefprojet.index');

Route::get('employer',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/employer', [
        'employer' => $posts
    ]);
})->name('employer.index');

Route::get('traficmanager',function (){

    $posts = \App\Models\Post::all();
    return Inertia::render('projectdjezzy/admin/traficmanager', [
        'traficmanager' => $posts
    ]);
})->name('traficmanager.index');

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