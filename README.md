# Lumière — E-Commerce Platform

A full-stack e-commerce application with an elegant minimalist design.
Built with **React** (frontend) and **Laravel** (backend — Phase 2).

> **Author:** Ma. Clarissa C. Marasigan
> **GitHub:** [@mcmarasigan](https://github.com/mcmarasigan)
> **Email:** maclarissamarasigan@gmail.com
> **Education:** BS Computer Science (Data Science), TIP-QC — August 2025

---

## 📌 Project Status

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1** — Frontend | ✅ Complete | React app with elegant UI, all pages functional with mock data |
| **Phase 2** — Backend  | ⏳ Planned  | Laravel REST API, MySQL, authentication, order processing |
| **Phase 3** — Integration & Deployment | 🔮 Future | Connect frontend + backend, testing, CI/CD, deploy |

---

## 🎯 Overview

This is a portfolio project demonstrating:

- Modern React development with Hooks and Context API
- Elegant minimalist UI/UX design
- Component-based architecture
- Client-side state management (Phase 1) → API integration (Phase 2)
- Full-stack development planning and phased delivery
- Professional Git/GitHub workflow

---

## ✨ Features (Phase 1 — Frontend Complete)

### User Features

**Authentication**
- User registration with client-side validation
- Login with session persistence (localStorage)
- Mock credentials — no backend required
- Admin and customer roles

**Product Browsing**
- 24 curated mock products across 4 categories
- Search by name or category
- Filter by availability, price range, and rating
- Sort by newest, price, or rating
- Pagination (12 products per page)

**Product Detail**
- Multi-image gallery with thumbnail navigation
- Quantity selector with stock awareness
- Tabbed sections: Details, Reviews, Shipping & Returns
- Trust badges (free shipping, returns, secure payment)
- Save to Wishlist (UI ready)

**Shopping Cart**
- Add/remove items with quantity controls
- Free shipping threshold (₱500)
- Real-time order subtotal and total

**Checkout (3-step)**
- Step 1: Shipping information form
- Step 2: Payment details (demo — no real processing)
- Step 3: Order review and confirmation

**Order Management**
- Order history with status timeline
- Status badges: Pending / Processing / Shipped / Delivered / Cancelled
- View order details

**Admin Dashboard**
- Revenue, order count, delivery, and average order stats
- Searchable and filterable orders table
- Per-order status management dropdown

### Design Features

**Elegant Minimalist Design System**
- Ivory background `#faf9f7` with charcoal `#1a1a1a` text
- Gold accent color `#b8975a` for highlights and CTAs
- `Cormorant Garamond` serif for headings and prices
- `Inter` sans-serif for UI and body text
- 1px borders instead of heavy shadows — clean and airy
- Subtle hover animations and micro-transitions
- Announcement banner, sticky navbar, integrated search bar

**Responsive Design**
- Mobile-first layouts
- 2-column product grid on mobile, auto-fill on desktop
- Collapsible sidebar filters
- Responsive admin table with horizontal scroll

---

## 🛠️ Tech Stack

### Frontend (Phase 1)

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI library |
| React Router | v6 | Client-side routing |
| Bootstrap | 5 | Grid and utility classes |
| React-Bootstrap | latest | Bootstrap React components |
| Axios | latest | HTTP client (Phase 2 ready) |
| Google Fonts | — | Cormorant Garamond + Inter |

### Planned (Phase 2 & 3)

| Tool | Purpose |
|------|---------|
| Laravel | REST API backend |
| MySQL | Relational database |
| Sanctum / JWT | API authentication |
| Stripe / PayMongo | Payment processing |
| Docker | Containerization |
| Vercel / Netlify | Frontend deployment |
| AWS / Heroku | Backend deployment |
| Jest + RTL | Unit and integration tests |

---

## 📁 Project Structure

```
ecommerce/
├── frontend/                      ← React app (Phase 1 — complete)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js             # Axios config + all API endpoints
│   │   ├── components/
│   │   │   ├── Header.jsx         # Navbar, banner, search
│   │   │   ├── Footer.jsx         # Multi-column footer
│   │   │   └── ProductCard.jsx    # Product grid card
│   │   ├── context/
│   │   │   └── AuthContext.jsx    # Mock auth (Phase 1) → real API (Phase 2)
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Product listing + filters
│   │   │   ├── ProductDetail.jsx  # Product page with gallery + tabs
│   │   │   ├── Cart.jsx           # Cart with qty controls
│   │   │   ├── Checkout.jsx       # 3-step checkout flow
│   │   │   ├── OrderConfirmation.jsx
│   │   │   ├── MyOrders.jsx       # Order history
│   │   │   ├── AdminDashboard.jsx # Admin panel
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx                # Root component + router
│   │   ├── App.css                # Full design system
│   │   └── index.css              # Base reset + font import
│   ├── package.json
│   └── README.md
│
├── backend/                       ← Laravel API (Phase 2 — planned)
│   └── (to be scaffolded)
│
└── README.md                      ← This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v14+
- npm v6+
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mcmarasigan/ecommerce.git
cd ecommerce

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Start the development server
npm start
```

The app opens at **http://localhost:3000**

### Demo Login

| Role     | Email                | Password    |
|----------|----------------------|-------------|
| Customer | customer@example.com | password123 |
| Admin    | admin@example.com    | admin123    |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Ivory | `#faf9f7` | Page background |
| White | `#ffffff` | Cards, navbar |
| Charcoal | `#1a1a1a` | Primary text, buttons |
| Stone 400 | `#9e9889` | Muted text, placeholders |
| Stone 600 | `#6b6558` | Secondary text |
| Accent Gold | `#b8975a` | Links, category labels, highlights |
| Accent Dark | `#9a7c48` | Hover states |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headings, Prices | Cormorant Garamond | 300–500 |
| UI, Body, Labels | Inter | 300–600 |

### Spacing & Shape
- Card border radius: `8px`
- Button border radius: `4px`
- Card border: `1px solid #eae8e3`
- Transitions: `all 0.25s ease`

---

## 🔄 API Integration (Phase 2 Ready)

The frontend is pre-wired for a Laravel backend. Update `src/api/api.js`:

```js
const API_BASE_URL = 'http://localhost:8000/api';
```

**Endpoints prepared:**

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me

GET    /api/products
GET    /api/products/{id}
GET    /api/products/search?q=
GET    /api/products/filter?min=&max=

GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update/{id}
DELETE /api/cart/remove/{id}

POST   /api/orders
GET    /api/orders
GET    /api/orders/{id}

POST   /api/payments/process

GET    /api/admin/orders
PUT    /api/admin/orders/{id}/status
```

To switch from mock data to the real API, update `AuthContext.jsx` (comments already in place) and replace mock arrays in `Home.jsx`, `Cart.jsx`, `MyOrders.jsx`, and `AdminDashboard.jsx` with API calls.

---

## 🔐 Security

### Phase 1 (Current)
- ✅ Client-side form validation
- ✅ Protected page messaging (login prompts)
- ✅ JWT token storage structure in place
- ✅ CORS headers pre-configured in `api.js`

### Phase 2 (Planned)
- Laravel Sanctum / JWT authentication
- Password hashing (bcrypt)
- SQL injection prevention via Eloquent ORM
- CSRF protection
- Rate limiting
- Input sanitization

---

## 📊 Performance

### Current (Phase 1)
- Client-side filtering and sorting (no redundant requests)
- Pagination (12 items/page)
- Lazy-loaded images with `picsum.photos` placeholders
- Minimal re-renders via `useCallback`

### Planned (Phase 3)
- Code splitting with React.lazy
- Image CDN and optimization
- API response caching
- Bundle size analysis

---

## 🧪 Testing (Phase 3)

```bash
# Install test dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test

# Coverage report
npm test -- --coverage
```

**Tests planned:**
- Auth login / register flows
- Product filtering and sorting
- Cart add / remove / quantity update
- Checkout step progression
- Component rendering
- API call mocking

---

## 📝 Git Workflow

### Branches
```
main        ← Production-ready (Phase 1 complete)
develop     ← Phase 2 development starts here
feature/*   ← New features
fix/*       ← Bug fixes
```

### Commit Convention
```
feat: Add product reviews
fix: Fix cart total rounding
style: Update button hover states
refactor: Extract filter logic to hook
docs: Update README
test: Add login form tests
```

---

## 🚀 Deployment (Phase 3)

### Frontend
```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel

# Or deploy to Netlify
npx netlify deploy --prod --dir=build
```

### Backend (Phase 2)
- AWS EC2, Heroku, or DigitalOcean
- MySQL on AWS RDS or PlanetScale
- Environment variables via `.env`

---

## 🐛 Known Limitations (Phase 1)

| Limitation | Resolution |
|-----------|------------|
| No real backend — mock data only | Phase 2: Laravel API |
| Payment form is UI demo only | Phase 2: Stripe / PayMongo |
| Admin actions reset on refresh | Phase 2: Persisted via API |
| No product image uploads | Phase 2: File storage |
| No email notifications | Phase 2: Laravel Mail |
| Reviews are UI-only | Phase 2: Reviews endpoint |

---

## 🎓 Skills Demonstrated

- **React 18** — Hooks, Context API, component composition
- **Elegant UI/UX** — Minimalist design system, responsive layouts
- **State management** — Client-side filtering, pagination, cart state
- **API design** — Pre-wired endpoint structure for full-stack integration
- **Git workflow** — Branching, conventional commits, pull requests
- **Code quality** — Component separation, comments, error handling

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'feat: Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License © 2025 Ma. Clarissa C. Marasigan

---

## 🆘 Troubleshooting

**`npm: command not found`**
→ Install Node.js from [nodejs.org](https://nodejs.org)

**Port 3000 already in use**
```bash
npx kill-port 3000
npm start
```

**Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS errors when calling API**
→ Backend will add CORS headers in Phase 2. Ensure `API_BASE_URL` in `api.js` points to your Laravel server.

---

*Last updated: May 2025 · Phase 1 ✅ · Phase 2 ⏳ · Phase 3 🔮*

⭐ If you found this project helpful, please give it a star on GitHub!
