// src/pages/Checkout.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const STEPS = ['Shipping', 'Payment', 'Review'];

const Checkout = () => {
  const { user }   = useContext(AuthContext);
  const navigate   = useNavigate();
  const [step, setStep]   = useState(0);
  const [error, setError] = useState('');
  const [placing, setPlacing] = useState(false);

  const [shipping, setShipping] = useState({
    firstName: '', lastName: '', email: user?.email || '',
    phone: '', address: '', city: '', postal: '', province: '',
  });

  const [payment, setPayment] = useState({
    cardNumber: '', expiry: '', cvc: '', cardName: '',
  });

  const orderTotal = 1928.00; // Demo

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setError('');
    const { firstName, lastName, email, address, city, postal } = shipping;
    if (!firstName || !lastName || !email || !address || !city || !postal) {
      return setError('Please fill in all required fields.');
    }
    setStep(1);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setError('');
    const { cardNumber, expiry, cvc, cardName } = payment;
    if (!cardNumber || !expiry || !cvc || !cardName) {
      return setError('Please fill in all payment details.');
    }
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    setPlacing(true);
    await new Promise(r => setTimeout(r, 1500)); // Simulate API
    navigate('/order-confirmation/ORD-20250512-001');
  };

  const inputStyle = {
    border: '1px solid #d4d0c8',
    borderRadius: '4px',
    padding: '12px 16px',
    fontSize: '0.9rem',
    width: '100%',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    color: '#1a1a1a',
    background: '#fff',
    transition: 'border-color .2s',
  };

  return (
    <Container style={{ paddingTop: 48, paddingBottom: 80 }}>
      {/* Step Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, marginBottom: 56 }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={s}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: i <= step ? '#1a1a1a' : '#eae8e3',
                color: i <= step ? '#fff' : '#9e9889',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.82rem', fontWeight: 600, transition: 'all .3s',
              }}>
                {i < step ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: i === step ? '#1a1a1a' : '#9e9889', fontWeight: i === step ? 600 : 400 }}>
                {s}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: '1px', background: i < step ? '#1a1a1a' : '#eae8e3', margin: '0 12px', marginBottom: 24, transition: 'background .3s' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <Row className="justify-content-center">
        <Col lg={7}>
          {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}

          {/* ── Step 0: Shipping ── */}
          {step === 0 && (
            <form onSubmit={handleShippingSubmit}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, marginBottom: 32 }}>
                Shipping Information
              </h2>

              <Row className="mb-3">
                <Col>
                  <label className="form-label">First Name *</label>
                  <input style={inputStyle} placeholder="Jane" value={shipping.firstName} onChange={e => setShipping(p => ({ ...p, firstName: e.target.value }))} />
                </Col>
                <Col>
                  <label className="form-label">Last Name *</label>
                  <input style={inputStyle} placeholder="Doe" value={shipping.lastName} onChange={e => setShipping(p => ({ ...p, lastName: e.target.value }))} />
                </Col>
              </Row>

              <div className="mb-3">
                <label className="form-label">Email Address *</label>
                <input type="email" style={inputStyle} placeholder="your@email.com" value={shipping.email} onChange={e => setShipping(p => ({ ...p, email: e.target.value }))} />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" style={inputStyle} placeholder="+63 912 345 6789" value={shipping.phone} onChange={e => setShipping(p => ({ ...p, phone: e.target.value }))} />
              </div>

              <div className="mb-3">
                <label className="form-label">Street Address *</label>
                <input style={inputStyle} placeholder="123 Rizal Street, Barangay..." value={shipping.address} onChange={e => setShipping(p => ({ ...p, address: e.target.value }))} />
              </div>

              <Row className="mb-3">
                <Col>
                  <label className="form-label">City *</label>
                  <input style={inputStyle} placeholder="Manila" value={shipping.city} onChange={e => setShipping(p => ({ ...p, city: e.target.value }))} />
                </Col>
                <Col>
                  <label className="form-label">Province</label>
                  <input style={inputStyle} placeholder="Metro Manila" value={shipping.province} onChange={e => setShipping(p => ({ ...p, province: e.target.value }))} />
                </Col>
                <Col>
                  <label className="form-label">Postal Code *</label>
                  <input style={inputStyle} placeholder="1000" value={shipping.postal} onChange={e => setShipping(p => ({ ...p, postal: e.target.value }))} />
                </Col>
              </Row>

              <button type="submit" className="btn-primary-solid" style={{ width: '100%', padding: '14px', marginTop: 16 }}>
                Continue to Payment
              </button>
            </form>
          )}

          {/* ── Step 1: Payment ── */}
          {step === 1 && (
            <form onSubmit={handlePaymentSubmit}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, marginBottom: 8 }}>
                Payment Details
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#9e9889', marginBottom: 32, letterSpacing: '0.04em' }}>
                This is a demo — no real payment will be processed.
              </p>

              <div className="mb-3">
                <label className="form-label">Name on Card</label>
                <input style={inputStyle} placeholder="Jane Doe" value={payment.cardName} onChange={e => setPayment(p => ({ ...p, cardName: e.target.value }))} />
              </div>

              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input style={inputStyle} placeholder="4242 4242 4242 4242" maxLength={19} value={payment.cardNumber}
                  onChange={e => {
                    const v = e.target.value.replace(/\D/g, '').slice(0, 16);
                    const fmt = v.match(/.{1,4}/g)?.join(' ') || v;
                    setPayment(p => ({ ...p, cardNumber: fmt }));
                  }}
                />
              </div>

              <Row className="mb-4">
                <Col>
                  <label className="form-label">Expiry Date</label>
                  <input style={inputStyle} placeholder="MM / YY" maxLength={7} value={payment.expiry}
                    onChange={e => {
                      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                      if (v.length >= 2) v = v.slice(0, 2) + ' / ' + v.slice(2);
                      setPayment(p => ({ ...p, expiry: v }));
                    }}
                  />
                </Col>
                <Col>
                  <label className="form-label">CVC</label>
                  <input style={inputStyle} placeholder="123" maxLength={3} value={payment.cvc} onChange={e => setPayment(p => ({ ...p, cvc: e.target.value.replace(/\D/g, '') }))} />
                </Col>
              </Row>

              <div style={{ display: 'flex', gap: 12 }}>
                <button type="button" className="btn-outline-dark" style={{ flex: 1, padding: '13px' }} onClick={() => setStep(0)}>
                  ← Back
                </button>
                <button type="submit" className="btn-primary-solid" style={{ flex: 2, padding: '13px' }}>
                  Review Order
                </button>
              </div>
            </form>
          )}

          {/* ── Step 2: Review ── */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, marginBottom: 32 }}>
                Review Your Order
              </h2>

              {/* Shipping summary */}
              <div style={{ background: '#f5f4f1', borderRadius: '6px', padding: '20px 24px', marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600 }}>Ship To</span>
                  <button onClick={() => setStep(0)} style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: '#b8975a', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#1a1a1a', marginBottom: 0 }}>
                  {shipping.firstName} {shipping.lastName}<br />
                  {shipping.address}, {shipping.city} {shipping.postal}<br />
                  {shipping.email}
                </p>
              </div>

              {/* Payment summary */}
              <div style={{ background: '#f5f4f1', borderRadius: '6px', padding: '20px 24px', marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600 }}>Payment</span>
                  <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: '#b8975a', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#1a1a1a', marginBottom: 0 }}>
                  Card ending in {payment.cardNumber.slice(-4)} · {payment.cardName}
                </p>
              </div>

              {/* Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28, fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem' }}>
                <span>Order Total</span>
                <span>₱{orderTotal.toFixed(2)}</span>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn-outline-dark" style={{ flex: 1, padding: '13px' }} onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button
                  className="btn-accent"
                  style={{ flex: 2, padding: '13px' }}
                  onClick={handlePlaceOrder}
                  disabled={placing}
                  id="place-order"
                >
                  {placing ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
