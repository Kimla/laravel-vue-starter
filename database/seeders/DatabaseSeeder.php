<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin'),
        ]);

        User::factory()->create([
            'name' => 'User',
            'email' => 'user@user.com',
            'password' => bcrypt('user'),
        ]);
    }
}
