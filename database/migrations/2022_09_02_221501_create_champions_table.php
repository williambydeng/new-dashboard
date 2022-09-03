<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('champions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('specie'); 
            $table->integer('tribeId');
            $table->integer('rarityId'); 
            $table->integer('regionId');
            $table->string('image'); 
            $table->integer('idealPressure'); 
            $table->integer('brawl');
            $table->integer('agility'); 
            $table->integer('cunning');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('champions');
    }
};
