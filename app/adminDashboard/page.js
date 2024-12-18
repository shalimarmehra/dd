// app/adminDashboard/page.js
export { default } from "./ClientAdminDashboard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 className="text-2xl mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard! Manage your site here.</p>
        {/* Add your admin dashboard content here */}
      </div>
    </div>
  );
};

export {AdminDashboard};
