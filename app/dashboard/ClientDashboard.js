// app/dashboard/ClientDashboard.js
'use client';

import Dashboard from './page';
import withAuth from '../auth/withAuth';

const ClientDashboard = () => {
  const ProtectedDashboard = withAuth(Dashboard);
  return <ProtectedDashboard />;
};

export default ClientDashboard;
