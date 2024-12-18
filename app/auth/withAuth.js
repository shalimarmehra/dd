/* eslint-disable react/display-name */
// app/auth/withAuth.js
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/login'); // Redirect to login page if not logged in
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
