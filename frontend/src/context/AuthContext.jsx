// src/context/AuthContext.jsx
// Phase 1: mock auth — no backend required.
// Phase 2: swap mock functions for real API calls via authAPI.

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const MOCK_USERS = [
  { id: 1, name: 'Clarissa Marasigan', email: 'customer@example.com', role: 'customer', password: 'password123' },
  { id: 2, name: 'Admin User',         email: 'admin@example.com',    role: 'admin',    password: 'admin123' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('lumiere_user');
      if (stored) setUser(JSON.parse(stored));
    } catch (_) {}
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Phase 1: mock login
    const found = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Invalid email or password');
    const { password: _p, ...safeUser } = found;
    localStorage.setItem('lumiere_user', JSON.stringify(safeUser));
    setUser(safeUser);
    return safeUser;

    // Phase 2: replace with real API call:
    // const res = await authAPI.login(email, password);
    // localStorage.setItem('token', res.data.token);
    // setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem('lumiere_user');
    localStorage.removeItem('token');
    setUser(null);
  };

  const register = async (name, email, password) => {
    // Phase 1: mock register — creates a temporary session
    const newUser = { id: Date.now(), name, email, role: 'customer' };
    localStorage.setItem('lumiere_user', JSON.stringify(newUser));
    setUser(newUser);
    return newUser;

    // Phase 2: replace with real API call:
    // const res = await authAPI.register(name, email, password);
    // localStorage.setItem('token', res.data.token);
    // setUser(res.data.user);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};