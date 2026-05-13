<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // ── Orders ─────────────────────────────────────────────────────────────────

    // GET /api/admin/orders
    public function orders(Request $request)
    {
        $query = Order::with(['user', 'items'])
            ->latest();

        if ($status = $request->query('status')) {
            $query->where('status', $status);
        }

        if ($search = $request->query('q')) {
            $query->where(function ($q) use ($search) {
                $q->where('order_number', 'like', "%{$search}%")
                  ->orWhereHas('user', fn($u) => $u->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%"));
            });
        }

        return response()->json($query->paginate(20));
    }

    // PUT /api/admin/orders/{id}/status
    public function updateOrderStatus(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|in:pending,processing,shipped,delivered,cancelled',
        ]);

        $order->update(['status' => $request->status]);

        return response()->json($order->fresh(['user', 'items']));
    }

    // ── Products ───────────────────────────────────────────────────────────────

    // POST /api/admin/products
    public function storeProduct(Request $request)
    {
        $validated = $request->validate([
            'name'           => 'required|string|max:255',
            'description'    => 'nullable|string',
            'category'       => 'required|string|max:100',
            'price'          => 'required|numeric|min:0',
            'original_price' => 'nullable|numeric|min:0',
            'stock'          => 'required|integer|min:0',
            'image_url'      => 'nullable|url',
            'details'        => 'nullable|array',
            'is_active'      => 'boolean',
        ]);

        $product = Product::create($validated);
        return response()->json($product, 201);
    }

    // PUT /api/admin/products/{id}
    public function updateProduct(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name'           => 'string|max:255',
            'description'    => 'nullable|string',
            'category'       => 'string|max:100',
            'price'          => 'numeric|min:0',
            'original_price' => 'nullable|numeric|min:0',
            'stock'          => 'integer|min:0',
            'image_url'      => 'nullable|url',
            'details'        => 'nullable|array',
            'is_active'      => 'boolean',
        ]);

        $product->update($validated);
        return response()->json($product);
    }

    // DELETE /api/admin/products/{id}
    public function deleteProduct(Product $product)
    {
        $product->update(['is_active' => false]); // soft-disable instead of hard delete
        return response()->json(['message' => 'Product disabled']);
    }

    // ── Stats ──────────────────────────────────────────────────────────────────

    // GET /api/admin/stats
    public function stats()
    {
        $orders     = Order::all();
        $revenue    = Order::whereNotIn('status', ['cancelled'])->sum('total');
        $avgOrder   = Order::whereNotIn('status', ['cancelled'])->avg('total') ?? 0;
        $totalUsers = User::where('role', 'customer')->count();

        return response()->json([
            'total_orders'    => $orders->count(),
            'total_revenue'   => round($revenue, 2),
            'average_order'   => round($avgOrder, 2),
            'total_customers' => $totalUsers,
            'by_status'       => $orders->groupBy('status')
                ->map->count(),
        ]);
    }
}
