<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEthereumDepositsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ethereum_deposits', function (Blueprint $table) {
            $table->id();
            $table->uuid('user_id')->index();
            $table->string('symbol', 10);
            $table->string('receiver_address');
            $table->string('sender_address');
            $table->string('system_address');
            $table->string('txn_id_1');
            $table->string('txn_id_2')->nullable();
            $table->decimal('received', 19, 8);
            $table->decimal('sent', 19, 8)->nullable();
            $table->decimal('network_fee', 19, 8)->nullable();
            $table->string('status');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('restrict')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ethereum_deposits');
    }
}
