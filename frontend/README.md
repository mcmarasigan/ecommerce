# Lumière — Frontend

React frontend for the Lumière e-commerce platform. Built with an elegant minimalist design system.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
# → http://localhost:3000

# Production build
npm run build
```

## Demo Credentials (Phase 1 — No backend required)

| Role     | Email                    | Password     |
|----------|--------------------------|--------------|
| Customer | customer@example.com     | password123  |
| Admin    | admin@example.com        | admin123     |

## Project Structure

```
src/
├── api/
│   └── api.js              # Axios config + API endpoints (ready for Phase 2)
├── components/
│   ├── Header.jsx          # Navbar + announcement banner + search
│   ├── Footer.jsx          # Footer with columns
│   ├── ProductCard.jsx     # Product display card
│   └── Header.css          # (styles live in App.css)
├── context/
│   └── AuthContext.jsx     # Auth state — mock in Phase 1, real API in Phase 2
├── pages/
│   ├── Home.jsx            # Product listing with filters, sorting, pagination
│   ├── ProductDetail.jsx   # Image gallery, qty selector, tabs
│   ├── Cart.jsx            # Cart with quantity controls + order summary
│   ├── Checkout.jsx        # 3-step: Shipping → Payment → Review
│   ├── OrderConfirmation.jsx
│   ├── MyOrders.jsx        # Order history with status badges
│   ├── AdminDashboard.jsx  # Stats + searchable orders table
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx                 # Router + layout
├── App.css                 # Design system (all tokens + component styles)
└── index.css               # Base reset + Google Fonts import
```

## Tech Stack

- **React 18** — UI library
- **React Router v6** — Client-side routing
- **Bootstrap 5 + React-Bootstrap** — Grid & utility classes
- **Axios** — HTTP client (ready for Phase 2 API calls)
- **Context API** — Auth state management
- **Google Fonts** — Cormorant Garamond (serif) + Inter (sans-serif)
