"use client";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { signup } from "../auth/auth";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
  newErrors.email = "Email is required";
} else if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(email)) {
  const issues = [];
  if (email.length > 254) issues.push("Email is too long");
  if (!/^[a-zA-Z0-9._-]+/.test(email)) issues.push("Invalid characters before @");
  if (!/^[^@]+@[^@]+$/.test(email)) issues.push("Multiple @ symbols found");
  if (!/@gmail\.com$/.test(email)) issues.push("Only gmail.com domain is allowed");
  if (/@.*\..{2,}$/.test(email) && !/^.{1,64}@/.test(email)) issues.push("Local part exceeds 64 characters");
  
  newErrors.email = issues.length ? issues.join(". ") : "Email format is invalid";
}
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await signup(email, password);
        toast.success("Your account has been created successfully!");
        if (response?.error === 'EMAIL_EXISTS') {
          setErrors({ email: "This email is already used" });
        } else {
          router.push("/login");
        }
      } catch (error) {
        // console.error("Signup error:", error);
        setErrors({ submit: "This email is already used" });
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md lg:max-w-xl space-y-6 bg-transparent shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:shadow-[0px_16px_56px_0px_#2F302DB5] rounded-3xl p-8">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 font-['Playfair_Display'] flex items-center justify-center gap-3 relative hover:text-shadow-lg transition-all duration-300 group cursor-help [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] animate-fadeIn mb-10">
            Create an account
            <MdLogin className="transition-transform hover:scale-80" />
            <span className="relative">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 group-hover:w-full transition-all duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></span>
            </span>
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-justify">
          Create an account to unlock your full learning potential. Join our
          community of learners and get access to personalized content, progress
          tracking, and interactive features. Already have an account? Sign in
          below to continue your learning journey.✨
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
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
              {errors.email && (
                <p className="bg-red-50 p-2 text-center font-bold text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-black/10 dark:border-white/10 placeholder-gray-500 text-black dark:text-white bg-white/90 dark:bg-black/90 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-base"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
              {errors.password && (
                <p className="bg-red-50 px-2 py-1 text-center font-bold text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
              >
                Sign up
              </button>
              <Toaster />
              {errors.submit && (
                <p className="bg-red-50 p-2 text-center font-bold text-red-500 text-sm mt-1">{errors.submit}</p>
              )}

              <button
                type="button"
                onClick={() => router.push("/login")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 mt-2 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 dark:text-white dark:bg-black dark:hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 11-2 0V4H5v12h10v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"
                    clipRule="evenodd"
                  />
                  <path d="M16 12a1 1 0 01-1 1H9a1 1 0 110-2h6a1 1 0 011 1z" />
                </svg>
                Already have an account? Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}