// src/pages/AdminDashboard.jsx

import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const MOCK_ORDERS = [
  { id: 'ORD-20250512-001', customer: 'Maria Santos', email: 'maria@example.com', date: '2025-05-12', status: 'pending',    total: 1928.00, items: 3 },
  { id: 'ORD-20250510-002', customer: 'Jose Reyes',   email: 'jose@example.com',  date: '2025-05-10', status: 'delivered',  total: 1549.00, items: 2 },
  { id: 'ORD-20250508-003', customer: 'Ana Cruz',     email: 'ana@example.com',   date: '2025-05-08', status: 'shipped',    total: 890.00,  items: 1 },
  { id: 'ORD-20250505-004', customer: 'Carlo Dela Cruz', email: 'carlo@example.com', date: '2025-05-05', status: 'processing', total: 3200.00, items: 5 },
  { id: 'ORD-20250501-005', customer: 'Liza Manalang', email: 'liza@example.com', date: '2025-05-01', status: 'cancelled',  total: 600.00,  items: 1 },
];

const STATUSES = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
const STATUS_LABELS = {
  pending:    { label: 'Pending',    cls: 'status-pending' },
  processing: { label: 'Processing', cls: 'status-processing' },
  shipped:    { label: 'Shipped',    cls: 'status-shipped' },
  delivered:  { label: 'Delivered',  cls: 'status-delivered' },
  cancelled:  { label: 'Cancelled',  cls: 'status-cancelled' },
};

const StatCard = ({ label, value, sub, color }) => (
  <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', padding: '24px 28px' }}>
    <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9e9889', fontWeight: 600, marginBottom: 12 }}>{label}</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, color: color || '#1a1a1a', marginBottom: 4 }}>{value}</p>
    <p style={{ fontSize: '0.78rem', color: '#9e9889', marginBottom: 0 }}>{sub}</p>
  </div>
);

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  const updateStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const filtered = orders.filter(o => {
    if (filterStatus !== 'all' && o.status !== filterStatus) return false;
    if (search && !o.customer.toLowerCase().includes(search.toLowerCase()) && !o.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalRevenue = orders.reduce((s, o) => o.status !== 'cancelled' ? s + o.total : s, 0);

  return (
    <Container style={{ paddingTop: 48, paddingBottom: 80 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Lumière Store Management</p>
        </div>
        <div style={{ fontSize: '0.8rem', color: '#9e9889', textAlign: 'right' }}>
          <p style={{ marginBottom: 2 }}>Logged in as</p>
          <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 0 }}>{user?.name || 'Admin'}</p>
        </div>
      </div>

      {/* Stats */}
      <Row className="mb-4 g-3">
        <Col sm={6} lg={3}>
          <StatCard label="Total Revenue" value={`₱${totalRevenue.toLocaleString('en-PH', { minimumFractionDigits: 0 })}`} sub="All time" color="#2e7d5a" />
        </Col>
        <Col sm={6} lg={3}>
          <StatCard label="Total Orders" value={orders.length} sub={`${orders.filter(o => o.status === 'pending').length} pending`} />
        </Col>
        <Col sm={6} lg={3}>
          <StatCard label="Delivered" value={orders.filter(o => o.status === 'delivered').length} sub="Successfully delivered" color="#b8975a" />
        </Col>
        <Col sm={6} lg={3}>
          <StatCard label="Avg. Order" value={`₱${(totalRevenue / orders.filter(o => o.status !== 'cancelled').length).toFixed(0)}`} sub="Per order" />
        </Col>
      </Row>

      {/* Orders Table */}
      <div style={{ background: '#fff', border: '1px solid #eae8e3', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Table Header Controls */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #eae8e3', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search orders or customers..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: '1px solid #d4d0c8', borderRadius: '4px', padding: '9px 14px', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', outline: 'none', flex: 1, minWidth: 200 }}
          />
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            style={{ border: '1px solid #d4d0c8', borderRadius: '4px', padding: '9px 14px', fontSize: '0.82rem', fontFamily: 'Inter, sans-serif', outline: 'none', color: '#6b6558', cursor: 'pointer', background: '#fff' }}
          >
            <option value="all">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{STATUS_LABELS[s].label}</option>)}
          </select>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="elegant-table" style={{ minWidth: 700 }}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? filtered.map(order => {
                const s = STATUS_LABELS[order.status];
                return (
                  <tr key={order.id}>
                    <td style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem' }}>{order.id}</td>
                    <td>
                      <p style={{ fontSize: '0.88rem', fontWeight: 500, marginBottom: 2 }}>{order.customer}</p>
                      <p style={{ fontSize: '0.75rem', color: '#9e9889', marginBottom: 0 }}>{order.email}</p>
                    </td>
                    <td style={{ fontSize: '0.85rem', color: '#6b6558' }}>
                      {new Date(order.date).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td style={{ fontSize: '0.85rem', color: '#6b6558' }}>{order.items} item{order.items !== 1 ? 's' : ''}</td>
                    <td style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>₱{order.total.toFixed(2)}</td>
                    <td><span className={`status-badge ${s.cls}`}>{s.label}</span></td>
                    <td>
                      <select
                        value={order.status}
                        onChange={e => updateStatus(order.id, e.target.value)}
                        style={{ border: '1px solid #d4d0c8', borderRadius: '4px', padding: '6px 10px', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif', cursor: 'pointer', outline: 'none', background: '#fff', color: '#1a1a1a' }}
                      >
                        {STATUSES.map(s => <option key={s} value={s}>{STATUS_LABELS[s].label}</option>)}
                      </select>
                    </td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: '#9e9889', fontSize: '0.88rem' }}>
                    No orders match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ padding: '16px 24px', borderTop: '1px solid #eae8e3', fontSize: '0.78rem', color: '#9e9889' }}>
          Showing {filtered.length} of {orders.length} orders
        </div>
      </div>

      {/* Phase 2 Notice */}
      <div style={{ marginTop: 32, background: '#f5f4f1', border: '1px solid #eae8e3', borderRadius: '8px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: '1.2rem' }}>⚙️</span>
        <div>
          <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>Phase 2: Backend Integration Coming Soon</p>
          <p style={{ fontSize: '0.78rem', color: '#9e9889', marginBottom: 0 }}>
            Real data from Laravel API, product management, and analytics will be added in Phase 2.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AdminDashboard;