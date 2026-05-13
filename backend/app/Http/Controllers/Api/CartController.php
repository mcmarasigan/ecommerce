<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    // GET /api/cart
    public function index(Request $request)
    {
        $items = CartItem::where('user_id', $request->user()->id)
            ->with('product')
            ->get()
            ->map(fn($item) => $this->cartItemResource($item));

        $subtotal = $items->sum(fn($i) => $i['subtotal']);

        return response()->json([
            'items'    => $items,
            'subtotal' => round($subtotal, 2),
            'count'    => $items->count(),
        ]);
    }

    // POST /api/cart/add
    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity'   => 'integer|min:1|max:99',
        ]);

        $product = Product::findOrFail($request->product_id);
        $qty     = $request->quantity ?? 1;

        if ($product->stock < $qty) {
            return response()->json(['message' => 'Not enough stock'], 422);
        }

        $item = CartItem::updateOrCreate(
            ['user_id' => $request->user()->id, 'product_id' => $product->id],
            ['quantity' => \DB::raw("quantity + {$qty}")]
        );

        return response()->json($this->cartItemResource($item->fresh('product')), 201);
    }

    // PUT /api/cart/{id}
    public function update(Request $request, CartItem $cartItem)
    {
        $this->authorizeItem($cartItem, $request);

        $request->validate(['quantity' => 'required|integer|min:1|max:99']);

        if ($cartItem->product->stock < $request->quantity) {
            return response()->json(['message' => 'Not enough stock'], 422);
        }

        $cartItem->update(['quantity' => $request->quantity]);

        return response()->json($this->cartItemResource($cartItem->load('product')));
    }

    // DELETE /api/cart/{id}
    public function remove(Request $request, CartItem $cartItem)
    {
        $this->authorizeItem($cartItem, $request);
        $cartItem->delete();
        return response()->json(['message' => 'Item removed']);
    }

    // DELETE /api/cart
    public function clear(Request $request)
    {
        CartItem::where('user_id', $request->user()->id)->delete();
        return response()->json(['message' => 'Cart cleared']);
    }

    // ── Helpers ────────────────────────────────────────────────────────────────

    private function cartItemResource(CartItem $item): array
    {
        return [
            'id'         => $item->id,
            'product_id' => $item->product_id,
            'quantity'   => $item->quantity,
            'product'    => [
                'id'         => $item->product->id,
                'name'       => $item->product->name,
                'price'      => $item->product->price,
                'image_url'  => $item->product->image_url,
                'stock'      => $item->product->stock,
            ],
            'subtotal'   => round($item->product->price * $item->quantity, 2),
        ];
    }

    private function authorizeItem(CartItem $item, Request $request): void
    {
        if ($item->user_id !== $request->user()->id) {
            abort(403, 'Unauthorized');
        }
    }
}
