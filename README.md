# 🛍️ Lumière — E-Commerce Platform

A full-stack e-commerce application built with **React** (frontend) and **Laravel** (backend).
Phases 1 and 2 are complete. Phase 3 (integration + deployment) is next.

> **Author:** Ma. Clarissa C. Marasigan
> **GitHub:** [@mcmarasigan](https://github.com/mcmarasigan)
> **Email:** maclarissamarasigan@gmail.com
> **Education:** BS Computer Science (Data Science), TIP-QC — August 2025

---

## 📌 Project Status

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1** — Frontend | ✅ Complete | React app with elegant minimalist UI, all pages functional with mock data |
| **Phase 2** — Backend API | ✅ Complete | Laravel REST API, SQLite, Sanctum auth, 21 endpoints, 24 seeded products |
| **Phase 3** — Integration & Deployment | ⏳ Next | Wire frontend to API, payment integration, testing, deploy |

---

## ✅ Phase 1: Frontend

**Stack:** React 18, React Router v6, Bootstrap 5, React-Bootstrap, Axios, Google Fonts

### Pages
| Page | Description |
|------|-------------|
| `/` | Product listing — search, filter (category, price, rating, stock), sort, paginate |
| `/product/:id` | Product detail — image gallery, qty selector, tabs, trust badges |
| `/cart` | Cart with quantity controls, free shipping threshold |
| `/checkout` | 3-step: Shipping → Payment → Review |
| `/order-confirmation/:id` | Post-order confirmation with next steps |
| `/my-orders` | Order history with status badges |
| `/admin` | Admin dashboard — stats cards, orders table, status management |
| `/login` | Minimal login form |
| `/register` | Registration form |

### Design System
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#faf9f7` Ivory | Page background |
| Primary | `#1a1a1a` Charcoal | Text, buttons |
| Accent | `#b8975a` Gold | Links, labels, highlights |
| Heading font | Cormorant Garamond | Headings, prices |
| Body font | Inter | UI, labels, body text |

### Demo Credentials (Frontend — mock auth)
| Role | Email | Password |
|------|-------|----------|
| Customer | customer@example.com | password123 |
| Admin | admin@example.com | admin123 |

---

## ✅ Phase 2: Backend API

**Stack:** Laravel 13, Laravel Sanctum, SQLite (dev), PHP 8.3

**Running at:** `http://localhost:8000`

### Quick Start
```bash
cd backend
composer install
php artisan migrate:fresh --seed
php artisan serve --port=8000
```

### Demo Credentials (Backend — real database)
| Role | Email | Password |
|------|-------|----------|
| Admin | admin@lumiere.ph | admin123 |
| Customer | customer@example.com | password123 |

### API Endpoints (21 total)

**Public**
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/products                 ?q= &category= &in_stock= &min_price= &max_price= &min_rating= &sort= &per_page=
GET    /api/products/categories
GET    /api/products/{id}
```

**Authenticated** (`Authorization: Bearer <token>`)
```
GET    /api/auth/me
POST   /api/auth/logout
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/{id}
DELETE /api/cart/{id}
DELETE /api/cart
GET    /api/orders
POST   /api/orders
GET    /api/orders/{id}
```

**Admin only**
```
GET    /api/admin/stats
GET    /api/admin/orders
PUT    /api/admin/orders/{id}/status
POST   /api/admin/products
PUT    /api/admin/products/{id}
DELETE /api/admin/products/{id}
```

### Database Schema
```
users         id, name, email, password, role (customer|admin)
products      id, name, description, category, price, original_price,
              stock, rating, reviews_count, image_url, details (JSON), is_active
cart_items    id, user_id, product_id, quantity
orders        id, user_id, order_number, status, subtotal, shipping_fee, total,
              shipping_* (address fields), payment_method, payment_last4
order_items   id, order_id, product_id, product_name, unit_price, quantity, subtotal
```

### Switching to MySQL (Production)
Update `backend/.env`:
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

---

## ⏳ Phase 3: Integration & Deployment

- [ ] Connect React frontend to Laravel API (`src/api/api.js` → real endpoints)
- [ ] Replace mock auth in `AuthContext.jsx` with Sanctum token auth
- [ ] Replace mock data in `Home.jsx`, `Cart.jsx`, `MyOrders.jsx`, `AdminDashboard.jsx`
- [ ] Payment integration (Stripe / PayMongo)
- [ ] Image upload support (Laravel Storage)
- [ ] Order status email notifications (Laravel Mail)
- [ ] Unit + integration testing (Jest, PHPUnit)
- [ ] Frontend deployment (Vercel / Netlify)
- [ ] Backend deployment (Railway / Heroku / AWS)
- [ ] CI/CD pipeline

---

## 🗂️ Project Structure

```
ecommerce/
├── frontend/                        ← React app (Phase 1 ✅)
│   ├── src/
│   │   ├── api/api.js               # Axios config — ready for Phase 3 wiring
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── context/AuthContext.jsx  # Mock auth → real API in Phase 3
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── OrderConfirmation.jsx
│   │   │   ├── MyOrders.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   ├── App.css                  # Full design system (CSS variables)
│   │   └── index.css
│   └── README.md
│
├── backend/                         ← Laravel API (Phase 2 ✅)
│   ├── app/
│   │   ├── Http/Controllers/Api/
│   │   │   ├── AuthController.php
│   │   │   ├── ProductController.php
│   │   │   ├── CartController.php
│   │   │   ├── OrderController.php
│   │   │   └── AdminController.php
│   │   ├── Http/Middleware/
│   │   │   └── AdminMiddleware.php
│   │   └── Models/
│   │       ├── User.php
│   │       ├── Product.php
│   │       ├── CartItem.php
│   │       ├── Order.php
│   │       └── OrderItem.php
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/DatabaseSeeder.php
│   ├── routes/api.php
│   ├── config/cors.php
│   └── README.md
│
└── README.md                        ← This file
```

---

## 🚀 Running Locally

```bash
# Terminal 1 — Backend
cd ecommerce/backend
php artisan serve --port=8000

# Terminal 2 — Frontend
cd ecommerce/frontend
npm start
```

| URL | Service |
|-----|---------|
| http://localhost:3000 | React frontend |
| http://localhost:8000 | Laravel API |

---

## 🛠️ Full Tech Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Frontend | React 18 | UI library |
| Frontend | React Router v6 | Client-side routing |
| Frontend | Bootstrap 5 | Grid + utilities |
| Frontend | Axios | HTTP client |
| Frontend | Google Fonts | Cormorant Garamond + Inter |
| Backend | Laravel 13 | REST API framework |
| Backend | Laravel Sanctum | Token authentication |
| Backend | SQLite / MySQL | Database |
| Backend | PHP 8.3 | Runtime |
| Version control | Git / GitHub | Source control |

---

## 🔐 Security

| Feature | Status |
|---------|--------|
| Token-based API auth (Sanctum) | ✅ |
| Password hashing (bcrypt) | ✅ |
| Role-based access control (admin middleware) | ✅ |
| SQL injection prevention (Eloquent ORM) | ✅ |
| CORS configured for frontend origin | ✅ |
| Input validation on all endpoints | ✅ |
| DB transaction for order placement | ✅ |
| Stock validation before order creation | ✅ |

---

## 🎓 Skills Demonstrated

- **React 18** — Hooks, Context API, component composition, client-side state
- **Laravel 13** — MVC, Eloquent ORM, Sanctum, middleware, migrations, seeders
- **REST API design** — 21 endpoints with filtering, pagination, and auth
- **Database design** — normalized schema with proper relationships
- **Elegant UI/UX** — custom design system, responsive layouts, micro-animations
- **Git workflow** — branching, conventional commits
- **Full-stack planning** — phased delivery, API-first architecture

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'feat: Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License © 2025 Ma. Clarissa C. Marasigan

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Install Node.js from nodejs.org |
| Port 3000 in use | `npx kill-port 3000` |
| Port 8000 in use | `npx kill-port 8000` |
| Module not found | `rm -rf node_modules && npm install` |
| SQLite driver missing | Uncomment `extension=pdo_sqlite` in `php.ini` |
| CORS errors | Ensure `config/cors.php` lists your frontend URL |

---

*Last updated: May 2025 · Phase 1 ✅ · Phase 2 ✅ · Phase 3 ⏳*

⭐ If you found this project helpful, please give it a star on GitHub!

Made with ❤️ by Ma. Clarissa C. Marasigan
