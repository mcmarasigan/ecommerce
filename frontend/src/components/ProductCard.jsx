// src/components/ProductCard.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const hasDiscount = product.original_price && product.original_price > product.price;
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.original_price) * 100)
    : null;

  const handleAdd = async () => {
    if (adding || product.stock === 0) return;
    setAdding(true);
    try {
      await onAddToCart(product.id, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (_) {}
    setAdding(false);
  };

  const renderStars = (rating = 4) =>
    '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));

  return (
    <div className="product-card">
      <div className="product-image">
        {hasDiscount && (
          <span className="discount-badge">–{discountPct}%</span>
        )}
        <img
          src={product.image_url || `https://picsum.photos/seed/${product.id}/400/400`}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category || 'General'}</p>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-price">
          <span className="price-current">₱{Number(product.price).toFixed(2)}</span>
          {hasDiscount && (
            <span className="price-original">₱{Number(product.original_price).toFixed(2)}</span>
          )}
        </div>

        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-count">({product.reviews_count || 0})</span>
        </div>

        <p className="stock-info">
          {product.stock > 0
            ? <span className="in-stock">In stock ({product.stock})</span>
            : <span className="out-of-stock">Out of stock</span>
          }
        </p>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn-view-details">
            Details
          </Link>
          <button
            className="btn-add-cart"
            onClick={handleAdd}
            disabled={product.stock === 0 || adding}
          >
            {added ? '✓ Added' : adding ? '...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;