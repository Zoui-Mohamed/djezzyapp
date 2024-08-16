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
        Schema::create('evaluationprojets', function (Blueprint $table) {
            $table->id();
            $table->integer('noteprojet');
            $table->string('commentairedeprojet');
            $table->unsignedBigInteger('directeurgenerale_id');
            $table->foreign('directeurgenerale_id')->references('id')->on('directeurgenerales')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evaluationprojets');
    }
};
