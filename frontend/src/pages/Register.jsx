// src/pages/Register.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
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
              <h2 style={{ marginBottom: 0, fontWeight: 700 }}>Create Account</h2>
              <p style={{ marginTop: 10, marginBottom: 0, fontSize: '0.95rem' }}>
                Join Brown Store Today
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
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    placeholder="At least 6 characters"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                      borderColor: '#8b6f47',
                      padding: '12px 15px',
                      fontSize: '1rem',
                    }}
                  />
                  <Form.Text style={{ color: '#666', fontSize: '0.85rem' }}>
                    Password must be at least 6 characters long
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: '#5c4033', fontWeight: 600 }}>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                    label="I agree to the Terms and Conditions"
                    required
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
                  {loading ? 'Creating Account...' : 'Sign Up'}
                </Button>

                <hr style={{ borderColor: '#e0d4c8' }} />

                <p style={{ textAlign: 'center', color: '#5c4033', marginBottom: 0 }}>
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    style={{
                      color: '#d4a574',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Login
                  </Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;