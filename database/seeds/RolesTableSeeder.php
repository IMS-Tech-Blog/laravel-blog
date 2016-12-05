<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(array(
    		array('id' => 1, 'roleName' => '管理员'),
    		array('id' => 2, 'roleName' => '普通用户'),
		));
    }
}
