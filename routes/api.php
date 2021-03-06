<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/sanctum/csrf-cookie', function () {
    return new Response('', 204);
});

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::post('/auth/reset-password', [ResetPasswordController::class, 'reset']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/auth/user', [AuthController::class, 'user']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function () {
    Route::get('/admin/users', [UserController::class, 'index']);
    Route::post('/admin/users', [UserController::class, 'store']);
    Route::get('/admin/users/{user}', [UserController::class, 'show']);
    Route::put('/admin/users/{user}', [UserController::class, 'update']);
});
