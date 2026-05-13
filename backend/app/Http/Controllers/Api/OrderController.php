<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    // GET /api/orders  — current user's orders
    public function index(Request $request)
    {
        $orders = Order::where('user_id', $request->user()->id)
            ->with('items')
            ->latest()
            ->paginate(10);

        return response()->json($orders);
    }

    // GET /api/orders/{id}
    public function show(Request $request, Order $order)
    {
        if ($order->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        return response()->json($order->load('items.product'));
    }

    // POST /api/orders  — place order from cart
    public function store(Request $request)
    {
        $request->validate([
            'shipping_first_name' => 'required|string|max:100',
            'shipping_last_name'  => 'required|string|max:100',
            'shipping_email'      => 'required|email|max:255',
            'shipping_phone'      => 'nullable|string|max:30',
            'shipping_address'    => 'required|string|max:255',
            'shipping_city'       => 'required|string|max:100',
            'shipping_province'   => 'nullable|string|max:100',
            'shipping_postal'     => 'required|string|max:20',
            'payment_method'      => 'in:card,cod',
            'payment_last4'       => 'nullable|digits:4',
            'notes'               => 'nullable|string|max:500',
        ]);

        $cartItems = CartItem::where('user_id', $request->user()->id)
            ->with('product')
            ->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'Your cart is empty'], 422);
        }

        // Validate stock
        foreach ($cartItems as $item) {
            if ($item->product->stock < $item->quantity) {
                return response()->json([
                    'message' => "'{$item->product->name}' only has {$item->product->stock} left in stock.",
                ], 422);
            }
        }

        $subtotal = $cartItems->sum(fn($i) => $i->product->price * $i->quantity);
        $shipping  = $subtotal >= 500 ? 0 : 80;
        $total     = $subtotal + $shipping;

        $order = DB::transaction(function () use ($request, $cartItems, $subtotal, $shipping, $total) {
            $order = Order::create([
                'user_id'             => $request->user()->id,
                'status'              => 'pending',
                'subtotal'            => $subtotal,
                'shipping_fee'        => $shipping,
                'total'               => $total,
                'shipping_first_name' => $request->shipping_first_name,
                'shipping_last_name'  => $request->shipping_last_name,
                'shipping_email'      => $request->shipping_email,
                'shipping_phone'      => $request->shipping_phone,
                'shipping_address'    => $request->shipping_address,
                'shipping_city'       => $request->shipping_city,
                'shipping_province'   => $request->shipping_province,
                'shipping_postal'     => $request->shipping_postal,
                'payment_method'      => $request->payment_method ?? 'card',
                'payment_last4'       => $request->payment_last4,
                'notes'               => $request->notes,
            ]);

            // Create order items & decrement stock
            foreach ($cartItems as $item) {
                $order->items()->create([
                    'product_id'   => $item->product_id,
                    'product_name' => $item->product->name,
                    'unit_price'   => $item->product->price,
                    'quantity'     => $item->quantity,
                    'subtotal'     => $item->product->price * $item->quantity,
                ]);

                $item->product->decrement('stock', $item->quantity);
            }

            // Clear cart
            CartItem::where('user_id', $request->user()->id)->delete();

            return $order;
        });

        return response()->json($order->load('items'), 201);
    }
}
