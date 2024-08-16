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
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->date('datemeeting');
            $table->string('titremeeting');
            $table->string('utilisateurmeeting');
            $table->string('discriptionmeeting');
            $table->unsignedBigInteger('chefprojet_id');
            $table->foreign('chefprojet_id')->references('id')->on('chefprojets')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meetings');
    }
};
