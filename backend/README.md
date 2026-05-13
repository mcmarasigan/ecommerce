# Lumière — Backend API

Laravel 13 REST API for the Lumière e-commerce platform.

## Quick Start

```bash
# Install dependencies
composer install

# Copy env
cp .env.example .env

# Generate app key
php artisan key:generate

# Run migrations + seed (24 products, 2 users)
php artisan migrate:fresh --seed

# Start development server
php artisan serve --port=8000
# → http://localhost:8000
```

## Demo Credentials

| Role     | Email                   | Password     |
|----------|-------------------------|--------------|
| Admin    | admin@lumiere.ph        | admin123     |
| Customer | customer@example.com    | password123  |

## API Endpoints

### Auth (Public)
```
POST   /api/auth/register     Register new customer
POST   /api/auth/login        Login → returns token
```

### Auth (Authenticated)
```
GET    /api/auth/me           Get current user
POST   /api/auth/logout       Revoke token
```

### Products (Public)
```
GET    /api/products                List products (paginated)
GET    /api/products/categories     All categories
GET    /api/products/{id}           Single product
```

**Query params for `/api/products`:**
| Param       | Type    | Example                     |
|-------------|---------|-----------------------------|
| `q`         | string  | `?q=linen`                  |
| `category`  | string  | `?category=Accessories`     |
| `in_stock`  | bool    | `?in_stock=1`               |
| `min_price` | number  | `?min_price=200`            |
| `max_price` | number  | `?max_price=1000`           |
| `min_rating`| number  | `?min_rating=4`             |
| `sort`      | string  | `?sort=price_asc` / `price_desc` / `rating` / `newest` |
| `per_page`  | integer | `?per_page=12` (max 50)     |

### Cart (Authenticated)
```
GET    /api/cart              Get cart items + subtotal
POST   /api/cart/add          Add product  { product_id, quantity? }
PUT    /api/cart/{id}         Update qty   { quantity }
DELETE /api/cart/{id}         Remove item
DELETE /api/cart              Clear cart
```

### Orders (Authenticated)
```
GET    /api/orders            My order history (paginated)
POST   /api/orders            Place order from cart
GET    /api/orders/{id}       Order details
```

### Admin (Admin only)
```
GET    /api/admin/stats                   Dashboard stats
GET    /api/admin/orders                  All orders (searchable)
PUT    /api/admin/orders/{id}/status      Update order status
POST   /api/admin/products                Create product
PUT    /api/admin/products/{id}           Update product
DELETE /api/admin/products/{id}           Disable product
```

## Authentication

Uses Laravel Sanctum token authentication.

```bash
# 1. Login to get token
POST /api/auth/login
{ "email": "customer@example.com", "password": "password123" }
→ { "user": {...}, "token": "1|abc123..." }

# 2. Use token in Authorization header for protected routes
Authorization: Bearer 1|abc123...
```

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Laravel | 13.x | Framework |
| Sanctum | 4.x | API token auth |
| SQLite | 3.x | Database (dev) |
| PHP | 8.3 | Runtime |

## Database Schema

```
users           id, name, email, password, role, timestamps
products        id, name, description, category, price, original_price, stock, rating, reviews_count, image_url, details (JSON), is_active, timestamps
cart_items      id, user_id, product_id, quantity, timestamps
orders          id, user_id, order_number, status, subtotal, shipping_fee, total, shipping_*, payment_*, notes, timestamps
order_items     id, order_id, product_id, product_name, unit_price, quantity, subtotal, timestamps
```

## Project Structure

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/Api/
│   │   │   ├── AuthController.php      register, login, logout, me
│   │   │   ├── ProductController.php   list, show, categories
│   │   │   ├── CartController.php      index, add, update, remove, clear
│   │   │   ├── OrderController.php     index, show, store
│   │   │   └── AdminController.php     stats, orders, products CRUD
│   │   └── Middleware/
│   │       └── AdminMiddleware.php     Blocks non-admin users
│   └── Models/
│       ├── User.php
│       ├── Product.php
│       ├── CartItem.php
│       ├── Order.php
│       └── OrderItem.php
├── database/
│   ├── migrations/
│   └── seeders/
│       └── DatabaseSeeder.php          24 products, 2 users
├── routes/
│   └── api.php                         All API routes
├── config/
│   └── cors.php                        Allows localhost:3000
└── .env
```

## Switching to MySQL (Production)

Update `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lumiere
DB_USERNAME=root
DB_PASSWORD=your_password
```

Then run:
```bash
mysql -u root -p -e "CREATE DATABASE lumiere;"
php artisan migrate:fresh --seed
```
