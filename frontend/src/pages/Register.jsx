// src/pages/Register.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate     = useNavigate();

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim())                return setError('Please enter your full name.');
    if (form.password.length < 6)         return setError('Password must be at least 6 characters.');
    if (form.password !== form.confirmPassword) return setError('Passwords do not match.');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: '#faf9f7', padding: '40px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={6}>

            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.6rem', fontWeight: 300, color: '#1a1a1a' }}>
                Create Account
              </h1>
              <p style={{ color: '#9e9889', fontSize: '0.85rem', letterSpacing: '0.06em', marginTop: 8 }}>
                Join Lumière and discover curated elegance
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', padding: '48px', boxShadow: '0 4px 24px rgba(0,0,0,.06)' }}>
              {error && (
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    id="reg-name"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    id="reg-email"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="At least 6 characters"
                    value={form.password}
                    onChange={handleChange}
                    required
                    id="reg-password"
                  />
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    id="reg-confirm"
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: '0.83rem', color: '#6b6558' }}>
                    <input type="checkbox" required style={{ marginTop: 2, accentColor: '#1a1a1a' }} />
                    <span>
                      I agree to the{' '}
                      <Link to="#" style={{ color: '#b8975a', textDecoration: 'none' }}>Terms of Service</Link>
                      {' '}and{' '}
                      <Link to="#" style={{ color: '#b8975a', textDecoration: 'none' }}>Privacy Policy</Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary-solid"
                  style={{ width: '100%', padding: '14px', fontSize: '0.8rem' }}
                  disabled={loading}
                  id="reg-submit"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <hr style={{ borderColor: '#eae8e3', margin: '32px 0' }} />

              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b6558', marginBottom: 0 }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#b8975a', textDecoration: 'none', fontWeight: 600 }}>
                  Sign In
                </Link>
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;