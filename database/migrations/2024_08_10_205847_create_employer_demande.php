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
        Schema::create('employer_demande', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employer_id')->nullable()->index()->constrained('employers')->cascadeOnDelete();
            $table->foreignId('demande_id')->nullable()->index()->constrained('demandes')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employer_demande');
    }
};
