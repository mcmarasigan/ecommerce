// src/pages/ProductDetail.jsx

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const MOCK_PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: ['Linen Tote Bag', 'Ceramic Mug', 'Leather Wallet', 'Scented Candle', 'Silk Scarf', 'Bamboo Watch', 'Crystal Pendant', 'Woolen Throw', 'Marble Coaster Set', 'Rattan Basket', 'Copper Carafe', 'Pressed Flower Frame'][i % 12],
  category: ['Accessories', 'Home & Living', 'Lifestyle', 'Gifts'][i % 4],
  price: parseFloat((Math.random() * 800 + 150).toFixed(2)),
  original_price: Math.random() > 0.5 ? parseFloat((Math.random() * 800 + 950).toFixed(2)) : null,
  stock: Math.random() > 0.2 ? Math.floor(Math.random() * 30 + 1) : 0,
  rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
  reviews_count: Math.floor(Math.random() * 200 + 10),
  description: 'A beautifully crafted piece that brings elegance and function together in perfect harmony. Made from sustainably sourced materials with meticulous attention to detail, this item is designed to elevate everyday living.',
  details: ['Sustainably sourced materials', 'Handcrafted finish', 'Dimensions: 30 × 20 × 10 cm', 'Weight: 450g', '1-year warranty included'],
  image_url: null,
}));

const ProductDetail = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];
  const [qty, setQty]       = useState(1);
  const [added, setAdded]   = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  const images = [
    `https://picsum.photos/seed/product${product.id}/600/600`,
    `https://picsum.photos/seed/product${product.id}a/600/600`,
    `https://picsum.photos/seed/product${product.id}b/600/600`,
  ];
  const [activeImg, setActiveImg] = useState(0);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const renderStars = (r = 4) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
  const hasDiscount = product.original_price && product.original_price > product.price;
  const discountPct = hasDiscount ? Math.round((1 - product.price / product.original_price) * 100) : null;

  const tabStyle = (tab) => ({
    background: 'none', border: 'none', padding: '12px 0', marginRight: 32,
    fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
    fontFamily: 'Inter, sans-serif', fontWeight: 500,
    color: activeTab === tab ? '#1a1a1a' : '#9e9889',
    borderBottom: activeTab === tab ? '2px solid #1a1a1a' : '2px solid transparent',
    transition: 'all .2s',
  });

  return (
    <Container style={{ paddingTop: 40, paddingBottom: 80 }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: 36, fontSize: '0.78rem', color: '#9e9889' }}>
        <Link to="/" style={{ color: '#9e9889', textDecoration: 'none' }}>Shop</Link>
        <span style={{ margin: '0 10px' }}>›</span>
        <span style={{ color: '#6b6558' }}>{product.category}</span>
        <span style={{ margin: '0 10px' }}>›</span>
        <span style={{ color: '#1a1a1a' }}>{product.name}</span>
      </nav>

      <Row>
        {/* Images */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <div style={{ display: 'flex', gap: 12 }}>
            {/* Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {images.map((img, i) => (
                <img key={i} src={img} alt="" onClick={() => setActiveImg(i)}
                  style={{ width: 72, height: 72, objectFit: 'cover', cursor: 'pointer', borderRadius: '4px', border: `2px solid ${activeImg === i ? '#1a1a1a' : 'transparent'}`, opacity: activeImg === i ? 1 : 0.6, transition: 'all .2s' }}
                />
              ))}
            </div>
            {/* Main image */}
            <div style={{ flex: 1, aspectRatio: '1', background: '#f5f4f1', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={images[activeImg]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </Col>

        {/* Info */}
        <Col lg={6}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8975a', fontWeight: 500, marginBottom: 12 }}>
            {product.category}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, color: '#1a1a1a', marginBottom: 20, lineHeight: 1.2 }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <span style={{ color: '#b8975a', fontSize: '0.9rem' }}>{renderStars(product.rating)}</span>
            <span style={{ fontSize: '0.82rem', color: '#9e9889' }}>{product.rating} ({product.reviews_count} reviews)</span>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 28 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 500, color: '#1a1a1a' }}>
              ₱{product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <>
                <span style={{ fontSize: '1rem', color: '#9e9889', textDecoration: 'line-through' }}>
                  ₱{product.original_price.toFixed(2)}
                </span>
                <span style={{ background: '#1a1a1a', color: '#fff', fontSize: '0.7rem', padding: '3px 8px', letterSpacing: '0.06em', borderRadius: '2px' }}>
                  −{discountPct}%
                </span>
              </>
            )}
          </div>

          <p style={{ fontSize: '0.92rem', color: '#6b6558', lineHeight: 1.8, marginBottom: 32 }}>
            {product.description}
          </p>

          {/* Stock */}
          <p style={{ fontSize: '0.8rem', marginBottom: 24, fontWeight: 500 }}>
            {product.stock > 0
              ? <span style={{ color: '#2e7d5a' }}>✓ In Stock ({product.stock} available)</span>
              : <span style={{ color: '#c0392b' }}>✗ Out of Stock</span>
            }
          </p>

          {/* Qty + Add to Cart */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d4d0c8', borderRadius: '4px', overflow: 'hidden' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 44, height: 48, border: 'none', background: '#fff', fontSize: '1.2rem', cursor: 'pointer', color: '#6b6558' }}>−</button>
              <span style={{ width: 44, textAlign: 'center', fontSize: '0.95rem', fontWeight: 500 }}>{qty}</span>
              <button onClick={() => setQty(q => Math.min(product.stock, q + 1))} disabled={qty >= product.stock} style={{ width: 44, height: 48, border: 'none', background: '#fff', fontSize: '1.2rem', cursor: 'pointer', color: '#6b6558' }}>+</button>
            </div>
            <button
              className="btn-primary-solid"
              style={{ flex: 1, padding: '13px', fontSize: '0.78rem' }}
              onClick={handleAdd}
              disabled={product.stock === 0}
              id="detail-add-cart"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </div>

          {/* Wishlist */}
          <button style={{ background: 'none', border: '1px solid #d4d0c8', borderRadius: '4px', padding: '11px', width: '100%', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', color: '#6b6558', fontFamily: 'Inter, sans-serif' }}>
            ♡ Save to Wishlist
          </button>

          {/* Trust icons */}
          <div style={{ display: 'flex', gap: 20, marginTop: 28, paddingTop: 24, borderTop: '1px solid #eae8e3' }}>
            {[['🚚', 'Free shipping', 'on ₱500+'], ['↩', 'Easy returns', '30-day policy'], ['🔒', 'Secure payment', 'SSL encrypted']].map(([icon, t, s]) => (
              <div key={t} style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '1.2rem', marginBottom: 4 }}>{icon}</div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>{t}</p>
                <p style={{ fontSize: '0.68rem', color: '#9e9889', marginBottom: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Tabs */}
      <div style={{ marginTop: 60, borderTop: '1px solid #eae8e3', paddingTop: 40 }}>
        <div style={{ borderBottom: '1px solid #eae8e3', marginBottom: 32 }}>
          <button style={tabStyle('details')} onClick={() => setActiveTab('details')}>Product Details</button>
          <button style={tabStyle('reviews')} onClick={() => setActiveTab('reviews')}>Reviews ({product.reviews_count})</button>
          <button style={tabStyle('shipping')} onClick={() => setActiveTab('shipping')}>Shipping & Returns</button>
        </div>

        {activeTab === 'details' && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {product.details.map((d, i) => (
              <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid #f5f4f1', fontSize: '0.9rem', color: '#6b6558', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ color: '#b8975a' }}>—</span> {d}
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'reviews' && (
          <div style={{ color: '#9e9889', fontSize: '0.9rem', textAlign: 'center', padding: '40px 0' }}>
            Reviews will be available after backend integration.
          </div>
        )}

        {activeTab === 'shipping' && (
          <div style={{ maxWidth: 560, fontSize: '0.9rem', color: '#6b6558', lineHeight: 1.9 }}>
            <p><strong>Free Shipping</strong> on orders over ₱500. Standard delivery 3–7 business days.</p>
            <p><strong>Returns</strong> accepted within 30 days of delivery. Items must be unused and in original packaging.</p>
            <p><strong>Exchanges</strong> — contact us at support@lumiere.ph within 30 days.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductDetail;