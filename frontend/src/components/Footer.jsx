// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-5 mb-lg-0">
            <div className="footer-brand">Lumière</div>
            <p className="footer-tagline">
              Curated products for the discerning individual.<br />
              Quality over quantity, always.
            </p>
          </Col>

          <Col lg={2} md={3} sm={6} className="mb-4 mb-lg-0">
            <p className="footer-heading">Shop</p>
            <ul className="footer-links">
              <li><Link to="/">All Products</Link></li>
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/">Best Sellers</Link></li>
              <li><Link to="/">Sale</Link></li>
            </ul>
          </Col>

          <Col lg={2} md={3} sm={6} className="mb-4 mb-lg-0">
            <p className="footer-heading">Support</p>
            <ul className="footer-links">
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Shipping & Returns</Link></li>
              <li><Link to="/">Size Guide</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-lg-0">
            <p className="footer-heading">Account</p>
            <ul className="footer-links">
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/my-orders">My Orders</Link></li>
            </ul>
          </Col>

          <Col lg={2} md={6} sm={6} className="mb-4 mb-lg-0">
            <p className="footer-heading">Follow</p>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Pinterest</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2025 Lumière. All rights reserved.</span>
          <span>Designed by Ma. Clarissa C. Marasigan</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;