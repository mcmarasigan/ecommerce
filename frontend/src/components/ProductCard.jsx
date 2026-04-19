// src/components/ProductCard.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image_url || 'https://via.placeholder.com/300'}
        alt={product.name}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted">
          {product.description?.substring(0, 60)}...
        </Card.Text>
        <h5 className="text-success">₱{product.price.toFixed(2)}</h5>
        <p>
          <small className="text-secondary">
            Stock: {product.stock}
          </small>
        </p>
      </Card.Body>
      <Card.Footer className="bg-white">
        <Link to={`/product/${product.id}`} className="btn btn-sm btn-info me-2">
          View Details
        </Link>
        <Button
          size="sm"
          variant="success"
          onClick={() => onAddToCart(product.id, 1)}
          disabled={product.stock === 0}
        >
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;