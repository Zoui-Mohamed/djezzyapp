<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('taches', function (Blueprint $table) {
            $table->id();
            $table->string('nomtache');
            $table->string('discriptiontache');
            $table->date('datedebuttache');
            $table->date('datefintache');
            $table->unsignedBigInteger('traficmanager_id');
            $table->foreign('traficmanager_id')->references('id')->on('traficmanagers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('taches');
    }
};
