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
        Schema::create('projets', function (Blueprint $table) {
            $table->id();
            $table->string('titreprojet');
            $table->string('discriptionprojet');
            $table->date('datedebutprojet');
            $table->date('datefinprojet');
            $table->unsignedBigInteger('directeurgenerale_id');
            $table->foreign('directeurgenerale_id')->references('id')->on('directeurgenerales')->onDelete('cascade');
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
        Schema::dropIfExists('projets');
    }
};
