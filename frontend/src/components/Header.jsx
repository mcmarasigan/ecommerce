// src/components/Header.jsx

import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const Header = ({ cartCount = 0 }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const hideSearch = ['/login', '/register'].includes(location.pathname);

  const handleLogout = () => { logout(); navigate('/'); };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <>
      {/* Announcement */}
      <div className="top-banner">
        Free shipping on orders over ₱500 &nbsp;·&nbsp; New arrivals every week
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" sticky="top" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a1a1a', fontWeight: 400 }}>
            Lumière
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ border: '1px solid #d4d0c8', borderRadius: '4px' }}
          />

          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Shop</Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/my-orders">Orders</Nav.Link>
                  {user.role === 'admin' && (
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                  )}
                </>
              )}
            </Nav>

            <Nav className="ms-auto align-items-center">
              {user ? (
                <>
                  <Nav.Link as={Link} to="/cart" style={{ position: 'relative' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                    {cartCount > 0 && (
                      <span className="cart-badge">{cartCount}</span>
                    )}
                  </Nav.Link>
                  <Nav.Link style={{ fontSize: '0.78rem', color: '#6b6558', letterSpacing: '0.06em' }}>
                    {user.name?.split(' ')[0]}
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    Sign Out
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
                  <Nav.Link as={Link} to="/register"
                    style={{
                      background: '#1a1a1a', color: '#fff !important',
                      borderRadius: '4px', padding: '8px 18px !important',
                      fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      marginLeft: '8px',
                    }}
                    className="nav-link-register"
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Bar */}
      {!hideSearch && (
        <div className="search-section">
          <Container>
            <form className="search-wrapper" onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input form-control"
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="btn-search">Search</button>
            </form>
          </Container>
        </div>
      )}

      <style>{`
        .nav-link-register { background: #1a1a1a !important; color: white !important; }
        .nav-link-register:hover { background: #b8975a !important; color: white !important; }
      `}</style>
    </>
  );
};

export default Header;