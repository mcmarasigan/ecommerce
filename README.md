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
