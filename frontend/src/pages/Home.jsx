// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { productAPI, cartAPI } from '../api/api';
import ProductCard from '../components/ProductCard';

const Home = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await productAPI.getAll(page);
      setProducts(res.data.data || res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      if (minPrice || maxPrice) {
        const res = await productAPI.filterByPrice(minPrice || 0, maxPrice || 999999);
        setProducts(res.data.data || res.data);
      } else {
        fetchProducts();
      }
    } catch (err) {
      console.error('Error filtering:', err);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      await cartAPI.addItem(productId, quantity);
      onCartUpdate();
      alert('✓ Added to cart!');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add to cart');
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" style={{ color: '#8b6f47' }} />
      </Container>
    );
  }

  return (
    <Container fluid className="py-4">
      <Container>
        <h1 className="page-title">Best Selling Products</h1>
        <p className="page-subtitle">{products.length} Products</p>

        {/* Controls Bar */}
        <div className="controls-bar mb-4">
          <span className="products-count">{products.length} products found</span>
          <select
            className="sort-dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="latest">Best Match</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <Row>
          {/* Sidebar Filters */}
          <Col lg={3} md={4} className="mb-4">
            <div className="filter-section">
              <h6 className="filter-title">Filter</h6>

              <div className="filter-group">
                <h6 style={{ color: '#8b6f47', fontWeight: 600, marginBottom: 10 }}>Availability</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="inStock" />
                  <label className="form-check-label" htmlFor="inStock">
                    In stock (50)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="outStock" />
                  <label className="form-check-label" htmlFor="outStock">
                    Out of stock (50)
                  </label>
                </div>
              </div>

              <div className="filter-group">
                <h6 style={{ color: '#8b6f47', fontWeight: 600, marginBottom: 10 }}>Price</h6>
                <div className="d-flex gap-2 mb-3">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-sm"
                  onClick={handleFilter}
                  style={{ backgroundColor: '#d4a574', color: 'white', width: '100%' }}
                >
                  Apply Filter
                </button>
                <div className="price-display mt-3">Price: ₱0 - ₱1250</div>
              </div>

              <div className="filter-group">
                <h6 style={{ color: '#8b6f47', fontWeight: 600, marginBottom: 10 }}>Rating</h6>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div className="form-check" key={stars}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`rating${stars}`}
                    />
                    <label className="form-check-label" htmlFor={`rating${stars}`}>
                      {'★'.repeat(stars)} ({50})
                    </label>
                  </div>
                ))}
              </div>

              <div className="filter-group">
                <h6 style={{ color: '#8b6f47', fontWeight: 600, marginBottom: 10 }}>Warranty Period</h6>
                {['1 Month', '6 Month', '9 Month', '1 Year'].map((period) => (
                  <div className="form-check" key={period}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`warranty-${period}`}
                    />
                    <label className="form-check-label" htmlFor={`warranty-${period}`}>
                      {period} (50)
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Products Grid */}
          <Col lg={9} md={8}>
            <div className="products-container">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <p className="text-center w-100">No products found.</p>
              )}
            </div>

            {/* Pagination */}
            <div className="text-center mt-5">
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                ← Previous
              </button>
              <span style={{ color: '#8b6f47', fontWeight: 600, margin: '0 15px' }}>
                Page {page}
              </span>
              <button
                className="btn btn-outline-primary"
                onClick={() => setPage(page + 1)}
              >
                Next →
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;