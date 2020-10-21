<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'user' => Auth::user(),
        ], 200);
    }
}
