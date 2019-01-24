<?php

use Illuminate\Database\Seeder;
use Portfolio\Users\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createAdmins();
    }

    private function createAdmins()
    {
        $user = new User([
          'name' => 'Nizar El Berjawi',
          'email' => 'nizarberjawi12@gmail.com',
          'password' => bcrypt('secret'),
        ]);
        $user->save();
    }
}
