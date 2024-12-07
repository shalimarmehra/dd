"use client";
import { useState } from "react";
import { MdTipsAndUpdates, MdUnsubscribe } from "react-icons/md";

const NewsLetterCTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-black w-full transition-colors duration-400">
      <div
        className="w-[90%] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 opacity-0 translate-y-[50px] transition-all duration-1000 ease-in-out"
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    setTimeout(() => {
                      el.style.opacity = "1";
                      el.style.transform = "translateY(0)";
                    }, 200);
                  }
                });
              },
              {
                threshold: 0.2,
                rootMargin: "50px",
              }
            );
            observer.observe(el);
          }
        }}
      >
        <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-4 sm:p-8 transition-colors duration-200">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200 relative inline-flex items-center gap-2 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-se-resize">
              <MdTipsAndUpdates />
              Stay Updated
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 transition-colors duration-200 font-sans">
              Subscribe to our newsletter for the latest updates, blogs, and
              exclusive content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={`w-full flex-grow px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base
    rounded-lg border border-gray-300 
    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
    dark:bg-gray-800 dark:border-gray-600 dark:text-white
    dark:placeholder-gray-400
    transition-all duration-200 ease-in-out`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 
    text-sm sm:text-base bg-black text-white font-mono
    rounded-lg hover:bg-gray-900 hover:scale-105 active:scale-95
    dark:bg-white dark:text-black dark:hover:bg-gray-100  
    focus:outline-none focus:ring-2
    focus:ring-black focus:ring-offset-2 
    dark:focus:ring-white dark:focus:ring-offset-gray-900
    transition-all duration-300 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-flex items-center justify-center
    before:content-[''] before:absolute before:w-full before:h-full 
    before:border-2 before:border-black before:rounded-lg
    before:transition-all before:duration-300
    hover:before:scale-105 hover:before:rotate-3
    relative`}
              >
                <MdUnsubscribe className="mr-2" />
                {status === "sending" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm sm:text-base text-green-600 dark:text-green-400 text-center transition-colors duration-200">
                Thank you for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm sm:text-base text-red-600 dark:text-red-400 text-center transition-colors duration-200">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterCTA;
