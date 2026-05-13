<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // GET /api/products
    public function index(Request $request)
    {
        $query = Product::active();

        // Search
        if ($term = $request->query('q')) {
            $query->search($term);
        }

        // Category filter
        if ($category = $request->query('category')) {
            $query->where('category', $category);
        }

        // Availability filter
        if ($request->query('in_stock')) {
            $query->inStock();
        }

        // Price range
        if ($min = $request->query('min_price')) {
            $query->where('price', '>=', $min);
        }
        if ($max = $request->query('max_price')) {
            $query->where('price', '<=', $max);
        }

        // Min rating
        if ($rating = $request->query('min_rating')) {
            $query->where('rating', '>=', $rating);
        }

        // Sorting
        $sort = $request->query('sort', 'newest');
        match ($sort) {
            'price_asc'  => $query->orderBy('price', 'asc'),
            'price_desc' => $query->orderBy('price', 'desc'),
            'rating'     => $query->orderBy('rating', 'desc'),
            default      => $query->latest(),
        };

        $perPage = (int) $request->query('per_page', 12);
        $products = $query->paginate(min($perPage, 50));

        return response()->json($products);
    }

    // GET /api/products/{id}
    public function show(Product $product)
    {
        return response()->json($product);
    }

    // GET /api/products/categories
    public function categories()
    {
        $categories = Product::active()
            ->select('category')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        return response()->json($categories);
    }
}
