// app/dashboard/page.js
export { default } from "./ClientDashboard";

const Dashboard = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <h1 className="text-2xl mb-4">User Dashboard</h1>
          <p>Welcome to your dashboard! Here is your personal space.</p>
          {/* Add your user dashboard content here */}
        </div>
      </div>
    );
  };
  
  export {Dashboard};
  