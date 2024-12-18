// app/auth/AuthContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login as firebaseLogin } from './auth'; // Import login from auth.js

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // Manage user roles
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in and get user role
    const loggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    if (loggedIn && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const login = async (email, password) => {
    try {
      await firebaseLogin(email, password);
      setIsLoggedIn(true);
      const userRole = email === 'shalimarmehra01@gmail.com' ? 'admin' : 'user'; // Example role assignment
      setUserRole(userRole);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userRole', userRole);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    router.push('/login'); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
