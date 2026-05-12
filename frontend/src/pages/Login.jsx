// src/pages/Login.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const { login }    = useContext(AuthContext);
  const navigate     = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: '#faf9f7' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={6}>

            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.6rem', fontWeight: 300, color: '#1a1a1a', letterSpacing: '0.02em' }}>
                Welcome Back
              </h1>
              <p style={{ color: '#9e9889', fontSize: '0.85rem', letterSpacing: '0.06em', marginTop: 8 }}>
                Sign in to your Lumière account
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', padding: '48px 48px', boxShadow: '0 4px 24px rgba(0,0,0,.06)' }}>
              {error && (
                <Alert variant="danger" onClose={() => setError('')} dismissible style={{ marginBottom: 28 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 24 }}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="login-email"
                  />
                </div>

                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <label className="form-label" style={{ marginBottom: 0 }}>Password</label>
                    <Link to="#" style={{ fontSize: '0.75rem', color: '#b8975a', textDecoration: 'none', letterSpacing: '0.04em' }}>
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    id="login-password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-solid"
                  style={{ width: '100%', padding: '14px', fontSize: '0.8rem' }}
                  disabled={loading}
                  id="login-submit"
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <hr style={{ borderColor: '#eae8e3', margin: '32px 0' }} />

              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b6558', marginBottom: 0 }}>
                New to Lumière?{' '}
                <Link to="/register" style={{ color: '#b8975a', textDecoration: 'none', fontWeight: 600 }}>
                  Create an account
                </Link>
              </p>
            </div>

            {/* Demo credentials */}
            <div style={{ marginTop: 24, padding: '20px 24px', background: '#f5f4f1', border: '1px solid #eae8e3', borderRadius: '6px' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600, marginBottom: 10 }}>
                Demo Credentials
              </p>
              <p style={{ fontSize: '0.85rem', color: '#6b6558', marginBottom: 4 }}>
                <strong>Email:</strong> customer@example.com
              </p>
              <p style={{ fontSize: '0.85rem', color: '#6b6558', marginBottom: 0 }}>
                <strong>Password:</strong> password123
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;