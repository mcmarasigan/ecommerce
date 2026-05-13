<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ── Users ───────────────────────────────────────────────────────────────
        User::updateOrCreate(
            ['email' => 'admin@lumiere.ph'],
            [
                'name'     => 'Admin User',
                'password' => Hash::make('admin123'),
                'role'     => 'admin',
            ]
        );

        User::updateOrCreate(
            ['email' => 'customer@example.com'],
            [
                'name'     => 'Demo Customer',
                'password' => Hash::make('password123'),
                'role'     => 'customer',
            ]
        );

        // ── Products ────────────────────────────────────────────────────────────
        $products = [
            ['name' => 'Linen Tote Bag',       'category' => 'Accessories',  'price' => 549,  'original_price' => 799,  'stock' => 24, 'rating' => 4.8, 'reviews_count' => 87,  'description' => 'A beautifully woven linen tote, perfect for everyday carry. Sustainably made with 100% natural fibers.',        'details' => ['Natural linen', 'Internal zipper pocket', 'Dimensions: 38 × 42 × 12 cm', 'Weight: 320g']],
            ['name' => 'Ceramic Mug',           'category' => 'Home & Living','price' => 390,  'original_price' => null, 'stock' => 15, 'rating' => 4.6, 'reviews_count' => 54,  'description' => 'Hand-thrown stoneware mug with a sand glaze finish. Each piece is unique and oven-safe.',                       'details' => ['Handcrafted stoneware', 'Dishwasher safe', 'Capacity: 350ml', '1-year warranty']],
            ['name' => 'Leather Wallet',        'category' => 'Accessories',  'price' => 890,  'original_price' => 1200, 'stock' => 10, 'rating' => 4.9, 'reviews_count' => 143, 'description' => 'Full-grain leather bifold wallet with RFID-blocking lining. Slim, durable, and ages beautifully.',               'details' => ['Full-grain leather', 'RFID-blocking', '6 card slots + 2 cash pockets', 'Handstitched seams']],
            ['name' => 'Scented Candle',        'category' => 'Gifts',        'price' => 295,  'original_price' => null, 'stock' => 40, 'rating' => 4.5, 'reviews_count' => 62,  'description' => 'Hand-poured soy candle with a cedarwood & amber fragrance. Burns clean for up to 45 hours.',                 'details' => ['100% soy wax', 'Cotton wick', 'Burn time: ~45 hours', 'Volume: 200g']],
            ['name' => 'Silk Scarf',            'category' => 'Accessories',  'price' => 890,  'original_price' => 1100, 'stock' => 8,  'rating' => 4.7, 'reviews_count' => 39,  'description' => 'Lightweight pure silk scarf with an abstract watercolor print. Versatile and machine-washable.',               'details' => ['100% pure silk', 'Machine washable (gentle)', 'Dimensions: 90 × 90 cm', 'Presented in a gift box']],
            ['name' => 'Bamboo Watch',          'category' => 'Accessories',  'price' => 1599, 'original_price' => 1999, 'stock' => 5,  'rating' => 4.4, 'reviews_count' => 28,  'description' => 'Minimalist timepiece crafted from sustainable bamboo. Japanese quartz movement, water-resistant.',             'details' => ['Sustainable bamboo case', 'Japanese quartz movement', 'Water-resistant 30m', '1-year warranty']],
            ['name' => 'Crystal Pendant',       'category' => 'Accessories',  'price' => 450,  'original_price' => null, 'stock' => 20, 'rating' => 4.6, 'reviews_count' => 51,  'description' => 'Handcrafted crystal quartz pendant on a gold-filled chain. Comes with a velvet pouch.',                      'details' => ['Natural crystal quartz', '18k gold-filled chain', 'Length: 45cm + 5cm extender', 'Velvet pouch included']],
            ['name' => 'Woolen Throw',          'category' => 'Home & Living','price' => 1250, 'original_price' => 1800, 'stock' => 12, 'rating' => 4.8, 'reviews_count' => 76,  'description' => 'Soft merino wool throw blanket with a herringbone weave. Ideal for cool evenings.',                          'details' => ['100% merino wool', 'Herringbone weave', 'Dimensions: 130 × 170 cm', 'Dry clean only']],
            ['name' => 'Marble Coaster Set',    'category' => 'Home & Living','price' => 680,  'original_price' => null, 'stock' => 18, 'rating' => 4.5, 'reviews_count' => 35,  'description' => 'Set of 4 natural marble coasters with gold rim detailing. No two pieces are identical.',                     'details' => ['Natural marble', 'Gold rim', 'Set of 4', 'Cork base to protect surfaces']],
            ['name' => 'Rattan Basket',         'category' => 'Home & Living','price' => 560,  'original_price' => null, 'stock' => 0,  'rating' => 4.3, 'reviews_count' => 22,  'description' => 'Handwoven rattan storage basket with leather handles. Multifunctional — use as a planter or storage.',          'details' => ['Handwoven rattan', 'Leather handles', 'Diameter: 30cm, Height: 25cm', 'Indoor use only']],
            ['name' => 'Copper Carafe',         'category' => 'Home & Living','price' => 1100, 'original_price' => 1400, 'stock' => 7,  'rating' => 4.7, 'reviews_count' => 48,  'description' => 'Hammered copper water carafe with matching cup. Keeps water naturally cool. Ayurvedic tradition.',            'details' => ['Pure copper, food-grade', 'Hand-hammered finish', 'Capacity: 1L + 250ml cup', 'Hand wash only']],
            ['name' => 'Pressed Flower Frame',  'category' => 'Gifts',        'price' => 380,  'original_price' => null, 'stock' => 30, 'rating' => 4.6, 'reviews_count' => 64,  'description' => 'Dried and pressed wildflower arrangement in a handmade wooden frame. A timeless botanical art piece.',     'details' => ['Dried wildflowers', 'Handmade wooden frame', 'Dimensions: 20 × 25 cm', 'UV-protective glass']],
            ['name' => 'Agate Bookends',        'category' => 'Home & Living','price' => 950,  'original_price' => 1200, 'stock' => 6,  'rating' => 4.8, 'reviews_count' => 31,  'description' => 'Polished natural agate slices mounted on iron bases. Each pair is uniquely patterned by nature.',            'details' => ['Natural agate stone', 'Iron base', 'Pair weight: ~1.8kg', 'Suitable for books up to 3kg']],
            ['name' => 'Dried Pampas Grass',    'category' => 'Gifts',        'price' => 220,  'original_price' => null, 'stock' => 50, 'rating' => 4.4, 'reviews_count' => 89,  'description' => 'Naturally dried pampas grass stems in a mixed bundle. Long-lasting — no watering needed.',                 'details' => ['Natural dried grass', 'Bundle of 5–8 stems', 'Length: 60–80cm', 'Keep away from direct sunlight']],
            ['name' => 'Linen Napkin Set',      'category' => 'Home & Living','price' => 320,  'original_price' => null, 'stock' => 35, 'rating' => 4.5, 'reviews_count' => 43,  'description' => 'Set of 4 stonewashed linen dinner napkins. Pre-washed for a soft, lived-in texture.',                    'details' => ['100% linen', 'Pre-washed, stone-washed texture', 'Set of 4, 45 × 45 cm each', 'Machine washable']],
            ['name' => 'Beeswax Food Wraps',    'category' => 'Lifestyle',    'price' => 280,  'original_price' => null, 'stock' => 45, 'rating' => 4.3, 'reviews_count' => 77,  'description' => 'Reusable beeswax food wraps — a sustainable alternative to cling film. Antibacterial and compostable.',  'details' => ['Organic cotton + beeswax', 'Antibacterial', 'Set of 3 sizes', 'Compostable at end of life']],
            ['name' => 'Cork Yoga Mat',         'category' => 'Lifestyle',    'price' => 1800, 'original_price' => 2200, 'stock' => 4,  'rating' => 4.7, 'reviews_count' => 57,  'description' => 'Natural cork and rubber yoga mat with grip-enhancing texture. Non-slip even when wet.',                   'details' => ['Natural cork surface', 'Natural rubber base', 'Dimensions: 183 × 61 cm, 4mm thick', 'Carrying strap included']],
            ['name' => 'Glass Water Bottle',    'category' => 'Lifestyle',    'price' => 490,  'original_price' => null, 'stock' => 22, 'rating' => 4.6, 'reviews_count' => 108, 'description' => 'Borosilicate glass water bottle with bamboo lid and protective sleeve. BPA-free and dishwasher safe.',     'details' => ['Borosilicate glass', 'Bamboo lid', 'Capacity: 500ml', 'Protective silicone sleeve']],
            ['name' => 'Lava Stone Diffuser',   'category' => 'Lifestyle',    'price' => 650,  'original_price' => 850,  'stock' => 14, 'rating' => 4.5, 'reviews_count' => 36,  'description' => 'Natural lava stone bracelet that doubles as a personal diffuser. Add a drop of essential oil.',          'details' => ['Natural lava stone beads', '8mm bead size', 'Elastic band, one size fits most', 'Includes 5ml lavender oil']],
            ['name' => 'Seed Paper Gift Cards', 'category' => 'Gifts',        'price' => 120,  'original_price' => null, 'stock' => 60, 'rating' => 4.4, 'reviews_count' => 92,  'description' => 'Handmade cards embedded with wildflower seeds. Plant the card after reading and watch it bloom.',          'details' => ['Handmade seed paper', 'Contains wildflower seeds', 'Set of 5 cards', 'Plant in any season']],
            ['name' => 'Wooden Phone Stand',    'category' => 'Lifestyle',    'price' => 350,  'original_price' => null, 'stock' => 25, 'rating' => 4.6, 'reviews_count' => 61,  'description' => 'Minimalist walnut phone stand. Angled for comfortable viewing at desk. Compatible with all phones.',   'details' => ['Solid walnut wood', 'Natural oil finish', 'Angle: 60°', 'Compatible with all phone sizes']],
            ['name' => 'Organic Honey Set',     'category' => 'Gifts',        'price' => 580,  'original_price' => null, 'stock' => 16, 'rating' => 4.9, 'reviews_count' => 124, 'description' => 'Curated set of 3 single-origin organic honeys from Philippine apiaries. Includes a wooden dipper.',       'details' => ['3 × 150g jars', 'Wild forest, mango blossom, coconut blossom', 'Organic certified', 'Wooden honey dipper included']],
            ['name' => 'Jute Placemats',        'category' => 'Home & Living','price' => 240,  'original_price' => null, 'stock' => 30, 'rating' => 4.3, 'reviews_count' => 29,  'description' => 'Set of 4 handwoven jute placemats with a fringe border. Natural, biodegradable, and heat-resistant.',  'details' => ['100% natural jute', 'Set of 4', 'Dimensions: 30 × 45 cm', 'Spot clean only']],
            ['name' => 'Coconut Shell Bowl',    'category' => 'Home & Living','price' => 180,  'original_price' => null, 'stock' => 38, 'rating' => 4.5, 'reviews_count' => 73,  'description' => 'Hand-polished coconut shell bowl. Each piece is unique. Use for snacks, jewelry, or décor.',           'details' => ['Upcycled coconut shell', 'Hand-polished, food-grade finish', 'Diameter: ~12cm', 'No two are alike']],
        ];

        foreach ($products as $data) {
            Product::create($data);
        }
    }
}
