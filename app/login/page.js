"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdLogin } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../auth/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting login...");
      await login(email, password, setError);
      const userRole = email === "shalimarmehra01@gmail.com" ? "admin" : "user";
      console.log("Login successful, redirecting...");
      toast.success("Hey there! You're logged in.");
      console.log("User logged in status: ", userRole);
      if (userRole === "admin") {
        router.push("/adminDashboard");
      } else {
        router.push("/dashboard");
      }
      console.log("User logged in");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md lg:max-w-xl space-y-6 bg-transparent shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:shadow-[0px_16px_56px_0px_#2F302DB5] rounded-3xl p-8">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 font-['Playfair_Display'] flex items-center justify-center gap-3 relative hover:text-shadow-lg transition-all duration-300 group cursor-help [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] animate-fadeIn mb-10">
            Sign in to your account
            <MdLogin className="transition-transform hover:scale-80" />
            <span className="relative">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 group-hover:w-full transition-all duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></span>
            </span>
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-justify">
          Welcome back! Let&apos;s make this chapter of your learning journey a
          memorable one. Sign in to your account to continue. If you don&apos;t
          have an account yet, you can create one by clicking the button below.
          Happy learning! 🚀
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-black/10 dark:border-white/10 placeholder-gray-500 text-black dark:text-white bg-white/90 dark:bg-black/90 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-base"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-black/10 dark:border-white/10 placeholder-gray-500 text-black dark:text-white bg-white/90 dark:bg-black/90 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-base"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p className="bg-red-50 p-2 text-center font-bold text-red-500 text-sm mt-1">
                  {error}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-black/10 dark:border-white/10 rounded focus:ring-black dark:focus:ring-white"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-black dark:text-white"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
              >
                Sign in
              </button>
              <Toaster />

              <button
                type="button"
                onClick={() => (window.location.href = "/signup")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 mt-2 border border-transparent text-sm font-medium rounded-md text-black bg-gradient-to-r from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 dark:text-white dark:from-gray-900 dark:to-black dark:hover:from-gray-800 dark:hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                  <path d="M16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Create new account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
