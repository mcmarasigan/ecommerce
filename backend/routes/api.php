<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes — Lumière E-Commerce
|--------------------------------------------------------------------------
*/

// ── Public routes ──────────────────────────────────────────────────────────────

// Auth
Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login',    [AuthController::class, 'login']);
});

// Products (public — browsing doesn't require login)
Route::prefix('products')->group(function () {
    Route::get('/',           [ProductController::class, 'index']);
    Route::get('/categories', [ProductController::class, 'categories']);
    Route::get('/{product}',  [ProductController::class, 'show']);
});

// ── Authenticated routes ───────────────────────────────────────────────────────

Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::prefix('auth')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);
        Route::get('me',      [AuthController::class, 'me']);
    });

    // Cart
    Route::prefix('cart')->group(function () {
        Route::get('/',          [CartController::class, 'index']);
        Route::post('/add',      [CartController::class, 'add']);
        Route::put('/{cartItem}',    [CartController::class, 'update']);
        Route::delete('/{cartItem}', [CartController::class, 'remove']);
        Route::delete('/',       [CartController::class, 'clear']);
    });

    // Orders
    Route::prefix('orders')->group(function () {
        Route::get('/',         [OrderController::class, 'index']);
        Route::post('/',        [OrderController::class, 'store']);
        Route::get('/{order}',  [OrderController::class, 'show']);
    });

    // Admin (requires admin role)
    Route::prefix('admin')->middleware('admin')->group(function () {
        Route::get('/stats',                         [AdminController::class, 'stats']);
        Route::get('/orders',                        [AdminController::class, 'orders']);
        Route::put('/orders/{order}/status',         [AdminController::class, 'updateOrderStatus']);
        Route::post('/products',                     [AdminController::class, 'storeProduct']);
        Route::put('/products/{product}',            [AdminController::class, 'updateProduct']);
        Route::delete('/products/{product}',         [AdminController::class, 'deleteProduct']);
    });
});
