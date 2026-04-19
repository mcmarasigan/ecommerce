// src/pages/Login.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card style={{ boxShadow: '0 4px 12px rgba(91, 64, 51, 0.2)' }}>
            <Card.Header
              style={{
                background: 'linear-gradient(135deg, #5c4033 0%, #8b6f47 100%)',
                color: 'white',
                padding: '30px 20px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ marginBottom: 0, fontWeight: 700 }}>Login</h2>
              <p style={{ marginTop: 10, marginBottom: 0, fontSize: '0.95rem' }}>
                Welcome back to Brown Store
              </p>
            </Card.Header>

            <Card.Body style={{ padding: '40px 30px' }}>
              {error && (
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#5c4033', fontWeight: 600 }}>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      borderColor: '#8b6f47',
                      padding: '12px 15px',
                      fontSize: '1rem',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#5c4033', fontWeight: 600 }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      borderColor: '#8b6f47',
                      padding: '12px 15px',
                      fontSize: '1rem',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    style={{ color: '#5c4033' }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mb-3"
                  style={{
                    backgroundColor: '#d4a574',
                    borderColor: '#d4a574',
                    color: 'white',
                    padding: '12px',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>

                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <Link
                    to="#"
                    style={{
                      color: '#d4a574',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>

                <hr style={{ borderColor: '#e0d4c8' }} />

                <p style={{ textAlign: 'center', color: '#5c4033', marginBottom: 0 }}>
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    style={{
                      color: '#d4a574',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Card.Body>
          </Card>

          {/* Demo Info */}
          <div
            style={{
              marginTop: 30,
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <p style={{ color: '#5c4033', fontWeight: 600, marginBottom: 10 }}>
              Demo Credentials:
            </p>
            <p style={{ color: '#666', marginBottom: 5 }}>
              <strong>Email:</strong> customer@example.com
            </p>
            <p style={{ color: '#666', marginBottom: 0 }}>
              <strong>Password:</strong> password123
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;