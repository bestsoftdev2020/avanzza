<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('surname')->nullable();
            $table->string('telephone')->nullable();
            $table->string('handphone')->nullable();
            $table->string('address')->nullable();
            $table->string('taller_name')->nullable();
            $table->string('taller_address')->nullable();
            $table->string('taller_handphone')->nullable();
            $table->string('taller_owner')->nullable();
            $table->string('birthday')->nullable();
            $table->string('company_address')->nullable();
            $table->integer('role');
            $table->integer('city')->nullable();
            $table->integer('country')->nullable();
            $table->integer('category')->nullable();
            $table->string('email')->unique();
            $table->string('work_email')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
