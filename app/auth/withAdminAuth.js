// app/auth/withAdminAuth.js
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';

const withAdminAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { isLoggedIn, userRole } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn || userRole !== 'admin') {
        router.push('/login'); // Redirect to login page if not logged in or not an admin
      }
    }, [isLoggedIn, userRole, router]);

    return (isLoggedIn && userRole === 'admin') ? <WrappedComponent {...props} /> : null;
  };
};

export default withAdminAuth;
