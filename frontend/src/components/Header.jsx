import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Form } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const Header = ({ cartCount = 0 }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = React.useState('');

  // Hide search on login/register pages
  const hideSearch = location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${search}`);
    }
  };

  return (
    <>
      <div className="top-banner">
        Welcome to Our E-Commerce Store | Free Shipping on Orders Over ₱500
      </div>

      <Navbar bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            🛍️ Brown Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/cart">
                    🛒 Cart <Badge bg="danger">{cartCount}</Badge>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/my-orders">My Orders</Nav.Link>
                  {user.role === 'admin' && (
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                  )}
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              )}
              {!user && (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Only show search on non-login/register pages */}
      {!hideSearch && (
        <div className="search-section">
          <Container>
            <Form onSubmit={handleSearch}>
              <Form.Group className="d-flex gap-2">
                <Form.Control
                  className="search-input"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ backgroundColor: '#d4a574', borderColor: '#d4a574' }}
                >
                  🔍 Search
                </button>
              </Form.Group>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;