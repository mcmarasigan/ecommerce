// src/pages/MyOrders.jsx

import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const MOCK_ORDERS = [
  {
    id: 'ORD-20250510-002',
    date: '2025-05-10',
    status: 'delivered',
    total: 1549.00,
    items: [
      { name: 'Linen Tote Bag', qty: 1, price: 549 },
      { name: 'Ceramic Mug', qty: 2, price: 500 },
    ],
  },
  {
    id: 'ORD-20250505-001',
    date: '2025-05-05',
    status: 'shipped',
    total: 890.00,
    items: [{ name: 'Silk Scarf', qty: 1, price: 890 }],
  },
  {
    id: 'ORD-20250428-003',
    date: '2025-04-28',
    status: 'processing',
    total: 2250.00,
    items: [
      { name: 'Bamboo Watch', qty: 1, price: 1500 },
      { name: 'Scented Candle', qty: 3, price: 750 },
    ],
  },
];

const STATUS_LABELS = {
  pending:    { label: 'Pending',    cls: 'status-pending' },
  processing: { label: 'Processing', cls: 'status-processing' },
  shipped:    { label: 'Shipped',    cls: 'status-shipped' },
  delivered:  { label: 'Delivered',  cls: 'status-delivered' },
  cancelled:  { label: 'Cancelled',  cls: 'status-cancelled' },
};

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, marginBottom: 16 }}>
          Sign in to view your orders
        </h2>
        <Link to="/login" className="btn-primary-solid">Sign In</Link>
      </div>
    );
  }

  return (
    <Container style={{ paddingTop: 48, paddingBottom: 80 }}>
      <h1 className="page-title">My Orders</h1>
      <p className="page-subtitle">{MOCK_ORDERS.length} orders placed</p>

      {MOCK_ORDERS.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#9e9889' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>No orders yet</p>
          <Link to="/" className="btn-primary-solid">Start Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {MOCK_ORDERS.map((order) => {
            const s = STATUS_LABELS[order.status] || STATUS_LABELS.pending;
            return (
              <div key={order.id} style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', overflow: 'hidden' }}>
                {/* Order Header */}
                <div style={{ padding: '20px 24px', borderBottom: '1px solid #f5f4f1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600 }}>
                      Order ID
                    </span>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', marginBottom: 0, marginTop: 2 }}>
                      {order.id}
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600 }}>
                      Date
                    </span>
                    <p style={{ fontSize: '0.88rem', marginBottom: 0, marginTop: 2 }}>
                      {new Date(order.date).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600, display: 'block', marginBottom: 4 }}>
                      Status
                    </span>
                    <span className={`status-badge ${s.cls}`}>{s.label}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600 }}>
                      Total
                    </span>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', marginBottom: 0, marginTop: 2 }}>
                      ₱{order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <div style={{ padding: '16px 24px' }}>
                  {order.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < order.items.length - 1 ? '1px solid #f5f4f1' : 'none', fontSize: '0.88rem', color: '#6b6558' }}>
                      <span>{item.name} × {item.qty}</span>
                      <span>₱{(item.price).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ padding: '16px 24px', borderTop: '1px solid #f5f4f1', display: 'flex', gap: 12 }}>
                  <Link to={`/order-confirmation/${order.id}`} className="btn-outline-dark" style={{ padding: '8px 20px', fontSize: '0.72rem' }}>
                    View Details
                  </Link>
                  {order.status === 'delivered' && (
                    <button className="btn-accent" style={{ padding: '8px 20px', fontSize: '0.72rem' }}>
                      Leave Review
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default MyOrders;