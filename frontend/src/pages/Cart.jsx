// src/pages/Cart.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

/* Mock cart for Phase 1 */
const MOCK_CART = [
  { id: 1, product_id: 1, product_name: 'Linen Tote Bag', product_image: 'https://picsum.photos/seed/product1/120/120', price: 549, quantity: 1, stock: 10 },
  { id: 2, product_id: 5, product_name: 'Silk Scarf', product_image: 'https://picsum.photos/seed/product5/120/120', price: 890, quantity: 2, stock: 5 },
];

const Cart = () => {
  const { user }    = useContext(AuthContext);
  const navigate    = useNavigate();
  const [items, setItems] = useState(MOCK_CART);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setItems(prev => prev.map(it => it.id === id ? { ...it, quantity: qty } : it));
  };

  const removeItem = (id) => setItems(prev => prev.filter(it => it.id !== id));

  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);
  const shipping = subtotal >= 500 ? 0 : 80;
  const total    = subtotal + shipping;

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, marginBottom: 16 }}>
          Sign in to view your cart
        </h2>
        <p style={{ color: '#9e9889', marginBottom: 32, fontSize: '0.9rem' }}>
          Your cart items will appear here after signing in.
        </p>
        <Link to="/login" className="btn-primary-solid">Sign In</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: 16, opacity: 0.3 }}>🛍</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, marginBottom: 12 }}>
          Your cart is empty
        </h2>
        <p style={{ color: '#9e9889', marginBottom: 32, fontSize: '0.9rem' }}>
          Discover our curated collection and add items you love.
        </p>
        <Link to="/" className="btn-primary-solid">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <Container style={{ paddingTop: 48, paddingBottom: 80 }}>
      <h1 className="page-title">Shopping Cart</h1>
      <p className="page-subtitle">{items.length} item{items.length !== 1 ? 's' : ''}</p>

      <Row>
        {/* Cart Items */}
        <Col lg={8} className="mb-4">
          <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', overflow: 'hidden' }}>
            {items.map((item, idx) => (
              <div key={item.id} style={{
                display: 'flex', alignItems: 'center', gap: 20, padding: '24px',
                borderBottom: idx < items.length - 1 ? '1px solid #eae8e3' : 'none',
              }}>
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  style={{ width: 88, height: 88, objectFit: 'cover', borderRadius: '4px', flexShrink: 0 }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', marginBottom: 4, fontWeight: 400 }}>
                    {item.product_name}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#9e9889', marginBottom: 12 }}>
                    ₱{item.price.toFixed(2)} each
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      style={{ width: 28, height: 28, border: '1px solid #d4d0c8', background: '#fff', cursor: 'pointer', borderRadius: '2px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >−</button>
                    <span style={{ width: 32, textAlign: 'center', fontSize: '0.9rem', fontWeight: 500 }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                      style={{ width: 28, height: 28, border: '1px solid #d4d0c8', background: '#fff', cursor: 'pointer', borderRadius: '2px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >+</button>
                  </div>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 500, marginBottom: 8 }}>
                    ₱{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: '#9e9889', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'underline' }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <Link to="/" style={{ fontSize: '0.78rem', color: '#6b6558', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              ← Continue Shopping
            </Link>
          </div>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', padding: '28px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 400, marginBottom: 24 }}>
              Order Summary
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.88rem', color: '#6b6558' }}>
              <span>Subtotal</span>
              <span>₱{subtotal.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, fontSize: '0.88rem', color: '#6b6558' }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? <span style={{ color: '#2e7d5a' }}>Free</span> : `₱${shipping.toFixed(2)}`}</span>
            </div>

            {shipping > 0 && (
              <p style={{ fontSize: '0.78rem', color: '#b8975a', marginBottom: 16, background: '#fef9f2', padding: '10px 14px', borderRadius: '4px', border: '1px solid #f0e0c0' }}>
                Add ₱{(500 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}

            <hr style={{ borderColor: '#eae8e3', margin: '0 0 20px' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem' }}>
              <span>Total</span>
              <span>₱{total.toFixed(2)}</span>
            </div>

            <button
              className="btn-primary-solid"
              style={{ width: '100%', padding: '14px', fontSize: '0.8rem' }}
              onClick={() => navigate('/checkout')}
              id="proceed-checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;