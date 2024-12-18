// app/adminDashboard/ClientAdminDashboard.js
'use client';

import AdminDashboard from './page';
import withAdminAuth from '../auth/withAdminAuth';

const ProtectedAdminDashboard = withAdminAuth(AdminDashboard);

const ClientAdminDashboard = () => {
  return <ProtectedAdminDashboard />;
};

export default ClientAdminDashboard;