<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::with('roles')->get();
    }

    public function show(User $user)
    {
        $user->load('roles');

        return $user;
    }

    public function update(User $user)
    {
        request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$user->id.',id'],
        ]);

        $user->name = request('name');
        $user->email = request('email');
        $user->save();

        return [
            'message' => 'Updated',
            'user' => $user,
        ];
    }
}
