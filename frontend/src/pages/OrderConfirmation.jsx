// src/pages/OrderConfirmation.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { id } = useParams();
  const orderId = id || 'ORD-20250512-001';

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: '#faf9f7' }}>
      <Container>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', padding: '60px 0' }}>
          {/* Success icon */}
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: '#f0faf5', border: '2px solid #a8d8bc',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px', fontSize: '1.8rem',
          }}>
            ✓
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 300, marginBottom: 12, color: '#1a1a1a' }}>
            Thank You!
          </h1>
          <p style={{ color: '#6b6558', fontSize: '1rem', marginBottom: 8 }}>
            Your order has been placed successfully.
          </p>
          <p style={{ color: '#9e9889', fontSize: '0.82rem', letterSpacing: '0.06em', marginBottom: 40 }}>
            Order Reference: <strong style={{ color: '#1a1a1a' }}>{orderId}</strong>
          </p>

          <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', padding: '32px', marginBottom: 32, textAlign: 'left' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, marginBottom: 20 }}>
              What happens next?
            </h3>
            {[
              { icon: '📧', title: 'Confirmation Email', desc: 'You\'ll receive an order confirmation email shortly.' },
              { icon: '📦', title: 'Preparation', desc: 'Your items will be carefully packed within 1–2 business days.' },
              { icon: '🚚', title: 'Shipping', desc: 'Estimated delivery: 3–7 business days.' },
            ].map((step) => (
              <div key={step.title} style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{step.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: 2, color: '#1a1a1a' }}>{step.title}</p>
                  <p style={{ fontSize: '0.82rem', color: '#9e9889', marginBottom: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link to="/my-orders" className="btn-outline-dark" style={{ padding: '12px 28px' }}>
              View Orders
            </Link>
            <Link to="/" className="btn-primary-solid" style={{ padding: '12px 28px' }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderConfirmation;