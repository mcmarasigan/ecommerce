// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-3">
            <h5 style={{ color: '#d4a574', marginBottom: 15 }}>About Us</h5>
            <p>
              We provide quality products at the best prices. Your satisfaction is our priority.
            </p>
          </Col>
          <Col md={3} className="mb-3">
            <h5 style={{ color: '#d4a574', marginBottom: 15 }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/">Shop</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5 style={{ color: '#d4a574', marginBottom: 15 }}>Support</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Shipping Info</a></li>
              <li><a href="/">Returns</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5 style={{ color: '#d4a574', marginBottom: 15 }}>Follow Us</h5>
            <p>
              <a href="/" style={{ marginRight: 10 }}>Facebook</a>
              <a href="/" style={{ marginRight: 10 }}>Twitter</a>
              <a href="/">Instagram</a>
            </p>
          </Col>
        </Row>
        <hr style={{ borderColor: '#6c5744' }} />
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          &copy; 2025 Brown Store. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;