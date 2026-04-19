// src/App.jsx

import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrders from "./pages/MyOrders";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AppContent() {
  const [cartCount, setCartCount] = useState(0);
  const { user } = useContext(AuthContext);

  const updateCartCount = async () => {
    try {
      if (user) {
        const res = await fetch("http://localhost:8000/api/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setCartCount(data.items?.length || 0);
      }
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };

  useEffect(() => {
    updateCartCount();
  }, [user]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={cartCount} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home onCartUpdate={updateCartCount} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/order-confirmation/:id"
            element={<OrderConfirmation />}
          />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
