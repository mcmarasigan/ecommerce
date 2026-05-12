# 🛍️ E-Commerce Platform

A full-stack e-commerce application built with React (frontend) and Laravel (backend). Currently in **Phase 1: Frontend Development**.

---

## 📌 Project Status

### ✅ Phase 1: Frontend (Current)
- [x] React project setup with routing
- [x] Authentication context and forms
- [x] Product browsing and filtering
- [x] Shopping cart functionality
- [x] Checkout flow
- [x] Order management pages
- [x] Admin dashboard layout
- [x] Responsive design
- [x] Brown theme styling
- [x] GitHub repository setup

### ⏳ Phase 2: Backend (Planned)
- [ ] Laravel API setup
- [ ] Database schema
- [ ] Authentication endpoints
- [ ] Product management
- [ ] Order processing
- [ ] Payment integration
- [ ] Admin API endpoints

### 🔮 Phase 3: Integration & Deployment
- [ ] Connect frontend to backend API
- [ ] Testing (unit, integration)
- [ ] Performance optimization
- [ ] Deployment (frontend + backend)
- [ ] CI/CD pipeline

---

## 🎯 Project Overview

This is a **portfolio project** demonstrating:
- Modern React development with Hooks and Context API
- Responsive UI/UX design
- Component-based architecture
- State management
- API integration patterns
- Professional code organization
- Git/GitHub workflow
- Full-stack development planning

**Current Phase:** Frontend is fully functional with mock data. Ready to integrate with Laravel backend in Phase 2.

---

## 📋 Features (Phase 1)

### User Features
✅ **Authentication**
- User registration with validation
- Secure login with JWT token support
- Persistent login state
- Logout functionality

✅ **Product Browsing**
- Browse all products with pagination
- Search products by name
- Filter by price range
- Filter by availability, rating, warranty
- Product cards with discount badges
- Stock information display

✅ **Shopping Cart**
- Add items to cart
- Remove items from cart
- Update quantities
- Cart total calculation
- Persistent cart state
- Empty cart message

✅ **Checkout**
- Multi-step checkout process
- Shipping information form
- Payment information form
- Order creation
- Order confirmation page

✅ **Order Management**
- View order history
- Track order status
- Order details display
- Date and total information

✅ **Admin Dashboard**
- View all orders layout
- Order status management interface
- Ready for backend integration

### Design Features
✅ **Brown Theme**
- Professional brown (#8b6f47) primary color
- Cream (#f5f1ed) background
- Gold (#d4a574) accents
- Consistent branding throughout

✅ **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Works on all screen sizes

✅ **User Experience**
- Intuitive navigation
- Clear product cards
- Professional sidebar filters
- Smooth transitions
- Loading states
- Error handling

---

## 🛠️ Tech Stack

### Frontend (Phase 1)
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Bootstrap 5** - CSS framework
- **React-Bootstrap** - Bootstrap components
- **Axios** - HTTP client (prepared for API calls)
- **Context API** - State management for auth

### Development Tools
- **npm** - Package manager
- **Git/GitHub** - Version control
- **VS Code** - Code editor
- **Create React App** - Project scaffolder

### Future (Phase 2 & 3)
- **Laravel** - Backend framework
- **MySQL** - Database
- **Stripe/PayMongo** - Payment processing
- **Docker** - Containerization
- **Jest/React Testing Library** - Testing

---

## 📁 Project Structure

```
ecommerce/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Navigation + search
│   │   │   ├── Footer.jsx          # Footer
│   │   │   ├── ProductCard.jsx     # Product display
│   │   │   ├── CartItem.jsx        # Cart item component
│   │   │   └── Header.css          # Header styles
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Product listing
│   │   │   ├── Login.jsx           # Login form
│   │   │   ├── Register.jsx        # Registration form
│   │   │   ├── ProductDetail.jsx   # Product details (WIP)
│   │   │   ├── Cart.jsx            # Shopping cart
│   │   │   ├── Checkout.jsx        # Checkout form
│   │   │   ├── OrderConfirmation.jsx # Confirmation page
│   │   │   ├── MyOrders.jsx        # Order history
│   │   │   └── AdminDashboard.jsx  # Admin panel
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Auth state management
│   │   ├── api/
│   │   │   └── api.js              # API configuration (ready for backend)
│   │   ├── App.jsx                 # Main component
│   │   ├── App.css                 # Global styles
│   │   ├── index.js                # React entry point
│   │   └── index.css               # Base styles
│   ├── package.json
│   ├── .gitignore
│   └── README.md
├── backend/                         # To be created in Phase 2
│   └── (Laravel project)
├── README.md                        # This file
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org/))
- npm v6+ (comes with Node.js)
- Git ([Download](https://git-scm.com/))
- Code editor (VS Code recommended)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/mcmarasigan/ecommerce.git
cd ecommerce
```

#### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

This installs:
- react
- react-router-dom
- bootstrap
- react-bootstrap
- axios

#### 3. Start the development server

```bash
npm start
```

The app opens at `http://localhost:3000`

#### 4. Build for production

```bash
npm run build
```

Creates optimized build in `frontend/build/` folder

---

## 💻 Usage Guide

### Home Page
1. Open app → Home page loads
2. Browse products in grid
3. Use search bar to find products
4. Use sidebar filters:
   - **Availability** - In stock / Out of stock
   - **Price** - Min/Max price range
   - **Rating** - 1-5 stars
   - **Warranty** - 1 month to 1 year

### Create Account
1. Click **Sign Up** in navbar
2. Fill form:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Confirm Password
3. Accept terms
4. Click **Sign Up**

### Login
1. Click **Login** in navbar
2. Enter email and password
3. Click **Login**
4. Now see: Cart, My Orders, Logout

### Add to Cart
1. On product card, click **Add to Cart**
2. See confirmation message
3. Cart count updates in navbar
4. Click cart icon to view

### Shopping Cart
1. View all items with quantities
2. Update quantities using input
3. Remove items with **Remove** button
4. See total price
5. Click **Proceed to Checkout**

### Checkout
1. Enter shipping info:
   - First/Last name
   - Email
   - Address
   - City
   - Postal code
2. Enter payment info (demo):
   - Card number
   - Expiry date
   - CVC
3. Click **Complete Purchase**
4. See confirmation page

### View Orders
1. Click **My Orders** in navbar
2. See all past orders
3. View order status, date, total

### Admin Dashboard
1. Login with admin account
2. Click **Admin** in navbar
3. View all orders
4. Update order statuses (Phase 2)

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary Brown | #8b6f47 | Buttons, text, brand |
| Dark Brown | #5c4033 | Headers, emphasis |
| Light Brown | #a0826d | Secondary text |
| Accent Gold | #d4a574 | CTA buttons, highlights |
| Cream Background | #f5f1ed | Page background |
| Text Dark | #2c2c2c | Body text |

### Typography
- **Font Family:** Segoe UI, Tahoma, Geneva, sans-serif
- **Headings:** 700 weight (bold)
- **Body:** 400 weight
- **Accents:** 600 weight (semi-bold)

### Spacing
- Grid gap: 20px (desktop), 15px (mobile)
- Card padding: 15-20px
- Section padding: 30px
- Border radius: 8px

### Responsive Breakpoints
- **Mobile:** < 576px (1 column, 2-column grid)
- **Tablet:** 576px - 768px (2 columns, 2-column grid)
- **Desktop:** > 768px (3+ columns, sidebar filters)

---

## 🔄 API Integration (Phase 2)

### Ready for Backend
The frontend is structured to connect to a Laravel backend API:

```javascript
// src/api/api.js - Already set up

const API_BASE_URL = 'http://localhost:8000/api';

// Ready to connect to:
// POST   /api/auth/register
// POST   /api/auth/login
// GET    /api/auth/me
// GET    /api/products
// GET    /api/products/{id}
// POST   /api/cart/add
// etc.
```

### What Needs to Be Built (Phase 2)
- Laravel API endpoints
- Database schema
- Authentication system
- Product management
- Cart/Order processing
- Admin functionality

---

## 📝 Component Documentation

### Authentication (AuthContext)
Manages user login state and provides auth functions to entire app.

```javascript
const { user, login, logout, register } = useContext(AuthContext);
```

### Header Component
Navigation bar with:
- Logo/brand
- Navigation links
- Search bar (hidden on login/register)
- Cart count badge
- User menu

### ProductCard Component
Displays individual product with:
- Product image
- Name and category
- Price (current + original)
- Rating
- Stock status
- Add to cart button

### Home Page
Main shopping page with:
- Search functionality
- Sidebar filters
- Product grid
- Pagination
- Sorting options

---

## 🔐 Security (Current Phase)

### Frontend Security
✅ JWT token storage in localStorage
✅ Protected routes (require login)
✅ Form validation
✅ Password confirmation
✅ CORS headers ready

### Backend Security (Phase 2)
- [ ] Password hashing
- [ ] SQL injection prevention
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Input sanitization

---

## 📊 Performance

### Current Optimizations
- Lazy loading components
- Pagination (20 products per page)
- Image optimization
- Efficient filtering
- Context API for state

### Future Optimizations (Phase 3)
- Code splitting
- Image lazy loading
- Caching strategies
- Bundle size optimization
- Production build optimization

---

## 🐛 Known Issues & Limitations (Phase 1)

### Current Limitations
- ⚠️ No backend API yet (using mock data flow)
- ⚠️ Payment processing is placeholder
- ⚠️ Admin dashboard not functional
- ⚠️ No email notifications
- ⚠️ No image uploads
- ⚠️ No product reviews

### To Be Fixed in Phase 2
- Backend API integration
- Real payment processing
- Admin functionality
- Email notifications
- Image management
- Reviews/ratings system

---

## 🧪 Testing (Phase 3)

### Testing Plan
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test

# Coverage report
npm test -- --coverage
```

### Tests to Write
- [ ] Auth login/register
- [ ] Product filtering
- [ ] Cart add/remove
- [ ] Checkout process
- [ ] Order management
- [ ] Component rendering
- [ ] API calls

---

## 📚 Git Workflow

### Branches
```
main          ← Production ready (current: Phase 1 complete)
develop       ← Development (Phase 2 starts here)
feature/*     ← New features
fix/*         ← Bug fixes
```

### Commit Messages
```bash
feat: Add product search functionality
fix: Fix cart total calculation
docs: Update README
style: Format code with prettier
refactor: Reorganize component structure
test: Add login form tests
```

### Making Changes
```bash
# Create feature branch
git checkout -b feature/product-reviews

# Make changes
git add .
git commit -m "feat: Add product reviews"

# Push
git push origin feature/product-reviews

# Create Pull Request on GitHub
```

---

## 🚀 Deployment (Phase 3)

### Frontend Deployment Options
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**
- **AWS S3 + CloudFront**

### Steps 
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Backend Deployment (Phase 2)
- AWS EC2 / Heroku / DigitalOcean
- Database hosting (AWS RDS / Heroku PostgreSQL)
- Environment variables setup

---

## 📖 Learning Resources

### React
- [React Official Docs](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react)
- [Context API](https://react.dev/reference/react/useContext)

### Bootstrap & Styling
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [ES6 Features](https://es6.io/)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

### Git & GitHub
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Branching](https://learngitbranching.js.org/)

### Full Stack
- [Laravel Documentation](https://laravel.com/docs) - Coming Phase 2
- [RESTful API Design](https://restfulapi.net/)
- [Database Design](https://www.microsoft.com/en-us/sql-server/learning-center)

---

## 🤝 Contributing

### How to Contribute
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Guidelines
- Write clear commit messages
- Add comments for complex logic
- Follow existing code style
- Test your changes
- Update documentation

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

```
MIT License

Copyright (c) 2025 Ma. Clarissa C. Marasigan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

**Ma. Clarissa C. Marasigan**

- 📧 Email: maclarissamarasigan@gmail.com
- 🐙 GitHub: [@mcmarasigan](https://github.com/mcmarasigan)
- 🌐 Portfolio: [mcmarasigan.github.io](https://mcmarasigan.github.io)
- 📍 Location: Metro Manila, Philippines
- 🎓 Education: BS Computer Science (Data Science), TIP-QC, August 2025

---

## 🎯 Next Steps

### Phase 2: Backend Development
- [ ] Set up Laravel project
- [ ] Create database schema
- [ ] Build API endpoints
- [ ] Implement authentication
- [ ] Create admin functionality
- [ ] Add payment processing

### Phase 3: Integration & Deployment
- [ ] Connect frontend to backend
- [ ] Add unit tests
- [ ] Performance optimization
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Deploy backend (Heroku/AWS)
- [ ] Set up CI/CD pipeline
- [ ] Monitor and maintain

---

## 🆘 Support & Troubleshooting

### Common Issues

**Issue: "npm: command not found"**
- Solution: Install Node.js from nodejs.org

**Issue: "Port 3000 already in use"**
```bash
# Kill process on port 3000
npx kill-port 3000
```

**Issue: "Module not found"**
```bash
# Reinstall dependencies
rm -r node_modules package-lock.json
npm install
```

**Issue: "CORS error when calling API"**
- Solution: Backend will add CORS headers in Phase 2

### Getting Help
- Check GitHub Issues
- Review documentation
- Email: maclarissamarasigan@gmail.com

---

## 🎓 Skills Demonstrated

✅ **Frontend Development**
- React Hooks & Context API
- Component composition
- State management
- Routing

✅ **UI/UX Design**
- Responsive design
- Color theory
- Component design
- User experience

✅ **Development Tools**
- Git/GitHub
- npm package management
- Development environment setup
- Browser DevTools

✅ **Code Quality**
- Clean code principles
- Code organization
- Comments & documentation
- Error handling

✅ **Problem Solving**
- Debugging
- Feature implementation
- Responsive design challenges
- Form validation

---

## 📢 Feedback & Suggestions

Have suggestions? Found a bug? 

Create an issue on GitHub: [Issues](https://github.com/mcmarasigan/ecommerce/issues)

---

## 🙏 Acknowledgments

- Inspired by modern e-commerce platforms like Naas eMart
- Bootstrap 5 for responsive components
- React community for excellent documentation
- Open source community

---

**Last Updated:** April 2025
**Status:** Phase 1 ✅ | Phase 2 ⏳ | Phase 3 🔮

⭐ **If you found this project helpful, please give it a star on GitHub!**

Made with ❤️ by Ma. Clarissa C. Marasigan

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
