// src/pages/Cart.jsx

import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { cartAPI } from '../api/api';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const res = await cartAPI.getCart();
      setCartItems(res.data.items);
      setTotal(res.data.total);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await cartAPI.removeItem(itemId);
      fetchCart();
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await cartAPI.updateQuantity(itemId, newQuantity);
      fetchCart();
    } catch (err) {
      console.error('Error updating quantity:', err);
    }
  };

  if (!user) {
    return (
      <Container className="text-center py-5">
        <h2>Please <Link to="/login">login</Link> to view your cart</h2>
      </Container>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Container className="text-center py-5">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Shopping Cart</h1>

      <Row>
        <Col md={8}>
          <Table responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.product_name}</td>
                  <td>₱{item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item.id, parseInt(e.target.value))
                      }
                      style={{ width: '60px' }}
                    />
                  </td>
                  <td>₱{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <hr />
              <h4>Total: ₱{total.toFixed(2)}</h4>
              <Button
                className="w-100 mt-3"
                variant="success"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>
              <Link to="/" className="btn btn-outline-primary w-100 mt-2">
                Continue Shopping
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;