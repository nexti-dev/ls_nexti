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
        Schema::create('estante', function (Blueprint $table) {
            $table->id();
            $table->string('amostra', 255)->nullable();
            $table->foreignId('chamada_id')->constrained('chamadas');
            $table->foreignId('categoria_id')->constrained('categorias');
            $table->foreignId('tag_id')->constrained('tags');
            $table->foreignId('submissao_id')->constrained('submissoes');
            $table->foreignId('publicacao_id')->constrained('publicacoes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estante');
    }
};
