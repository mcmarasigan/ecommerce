// src/api/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  me: () => api.get('/auth/me'),
};

export const productAPI = {
  getAll: (page = 1) =>
    api.get(`/products?page=${page}`),
  getById: (id) =>
    api.get(`/products/${id}`),
  search: (query) =>
    api.get(`/products/search?q=${query}`),
  filterByPrice: (minPrice, maxPrice) =>
    api.get(`/products/filter?min=${minPrice}&max=${maxPrice}`),
};

export const cartAPI = {
  getCart: () =>
    api.get('/cart'),
  addItem: (productId, quantity) =>
    api.post('/cart/add', { product_id: productId, quantity }),
  removeItem: (itemId) =>
    api.delete(`/cart/remove/${itemId}`),
  updateQuantity: (itemId, quantity) =>
    api.put(`/cart/update/${itemId}`, { quantity }),
};

export const orderAPI = {
  createOrder: (shippingAddress) =>
    api.post('/orders', { shipping_address: shippingAddress }),
  getMyOrders: () =>
    api.get('/orders'),
  getOrderById: (id) =>
    api.get(`/orders/${id}`),
};

export const paymentAPI = {
  processPayment: (orderId, paymentToken) =>
    api.post('/payments/process', { order_id: orderId, token: paymentToken }),
};

export const adminAPI = {
  getAllOrders: () =>
    api.get('/admin/orders'),
  updateOrderStatus: (orderId, status) =>
    api.put(`/admin/orders/${orderId}/status`, { status }),
};

export default api;