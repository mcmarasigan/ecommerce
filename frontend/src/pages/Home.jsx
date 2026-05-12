// src/pages/Home.jsx

import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

/* ── Mock products (Phase 1) ── */
const MOCK_PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: [
    'Linen Tote Bag', 'Ceramic Mug', 'Leather Wallet', 'Scented Candle',
    'Silk Scarf', 'Bamboo Watch', 'Crystal Pendant', 'Woolen Throw',
    'Marble Coaster Set', 'Rattan Basket', 'Copper Carafe', 'Pressed Flower Frame',
  ][i % 12],
  category: ['Accessories', 'Home & Living', 'Lifestyle', 'Gifts'][i % 4],
  price: parseFloat((Math.random() * 800 + 150).toFixed(2)),
  original_price: Math.random() > 0.5
    ? parseFloat((Math.random() * 800 + 950).toFixed(2))
    : null,
  stock: Math.random() > 0.2 ? Math.floor(Math.random() * 30 + 1) : 0,
  rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
  reviews_count: Math.floor(Math.random() * 200 + 10),
  description: 'A beautifully crafted piece that brings elegance and function together in perfect harmony.',
  image_url: `https://picsum.photos/seed/product${i + 1}/400/400`,
}));

const ITEMS_PER_PAGE = 12;

const Home = ({ onCartUpdate }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search') || '';

  const [sortBy, setSortBy]     = useState('latest');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [inStock, setInStock]   = useState(false);
  const [page, setPage]         = useState(1);
  const [notification, setNotification] = useState('');

  /* ── Filtering & Sorting ── */
  const filtered = MOCK_PRODUCTS.filter((p) => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase()) &&
        !p.category.toLowerCase().includes(query.toLowerCase())) return false;
    if (inStock && p.stock === 0) return false;
    if (minPrice && p.price < parseFloat(minPrice)) return false;
    if (maxPrice && p.price > parseFloat(maxPrice)) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.id - a.id;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => { setPage(1); }, [query, sortBy, minPrice, maxPrice, inStock]);

  /* ── Add to cart (mock) ── */
  const handleAddToCart = useCallback(async (productId) => {
    setNotification('Item added to cart');
    if (onCartUpdate) onCartUpdate();
    setTimeout(() => setNotification(''), 2500);
  }, [onCartUpdate]);

  const clearFilters = () => {
    setMinPrice(''); setMaxPrice(''); setInStock(false); setSortBy('latest');
  };

  return (
    <Container fluid className="py-0">
      <Container>
        {/* Toast notification */}
        {notification && (
          <div style={{
            position: 'fixed', top: 90, right: 24, zIndex: 9999,
            background: '#1a1a1a', color: 'white', padding: '12px 24px',
            borderRadius: '4px', fontSize: '0.82rem', letterSpacing: '0.06em',
            boxShadow: '0 4px 16px rgba(0,0,0,.18)', animation: 'fadeIn .3s ease',
          }}>
            ✓ {notification}
          </div>
        )}

        {/* Page header */}
        <div style={{ paddingTop: 48, marginBottom: 40 }}>
          {query ? (
            <>
              <h1 className="page-title">Search: "{query}"</h1>
              <p className="page-subtitle">{filtered.length} results found</p>
            </>
          ) : (
            <>
              <h1 className="page-title">Our Collection</h1>
              <p className="page-subtitle">{filtered.length} curated products</p>
            </>
          )}
        </div>

        <Row>
          {/* ── Sidebar ── */}
          <Col lg={3} md={4} className="mb-4">
            <div className="filter-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="filter-title" style={{ marginBottom: 0 }}>Filters</p>
                <button
                  onClick={clearFilters}
                  style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: '#9e9889', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  Clear
                </button>
              </div>
              <hr style={{ borderColor: '#eae8e3', margin: '16px 0 24px' }} />

              {/* Availability */}
              <div className="filter-group">
                <p className="filter-group-title">Availability</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inStock"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="inStock">In Stock Only</label>
                </div>
              </div>

              {/* Price */}
              <div className="filter-group">
                <p className="filter-group-title">Price Range (₱)</p>
                <div className="price-inputs">
                  <input
                    type="number"
                    className="price-input form-control"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    className="price-input form-control"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="filter-group">
                <p className="filter-group-title">Rating</p>
                {[5, 4, 3].map((r) => (
                  <div className="form-check" key={r}>
                    <input className="form-check-input" type="checkbox" id={`r${r}`} />
                    <label className="form-check-label" htmlFor={`r${r}`}>
                      {'★'.repeat(r)}{'☆'.repeat(5 - r)} & up
                    </label>
                  </div>
                ))}
              </div>

              {/* Category */}
              <div className="filter-group" style={{ marginBottom: 0 }}>
                <p className="filter-group-title">Category</p>
                {['Accessories', 'Home & Living', 'Lifestyle', 'Gifts'].map((cat) => (
                  <div className="form-check" key={cat}>
                    <input className="form-check-input" type="checkbox" id={`cat-${cat}`} />
                    <label className="form-check-label" htmlFor={`cat-${cat}`}>{cat}</label>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* ── Products ── */}
          <Col lg={9} md={8}>
            {/* Controls */}
            <div className="controls-bar">
              <span className="products-count">{filtered.length} Products</span>
              <select
                className="sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Grid */}
            {paginated.length > 0 ? (
              <div className="products-container">
                {paginated.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 0', color: '#9e9889' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>No products found</p>
                <p style={{ fontSize: '0.85rem' }}>Try adjusting your filters</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-bar">
                <button
                  className="page-btn"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    className={`page-btn ${n === page ? 'active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  className="page-btn"
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  →
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
      `}</style>
    </Container>
  );
};

export default Home;