"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiArrowRight, FiBook } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system theme preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section
      className={` relative ${
        darkMode ? " /* bg-[#BFD8D8]*/ " : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {darkMode ? (
          <FiSun className="w-6 h-6" />
        ) : (
          <FiMoon className="w-6 h-6" />
        )}
      </button>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-85 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse delay-75" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto my-10 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[Montserrat] tracking-tight">
            Code, Create, Conquer:
            <span className="text-blue-600 dark:text-blue-400 font-serif italic typing">
              {[..." Your Journey in Tech Starts Here"].map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  {char}
                </span>
              ))}
            </span>
            <style jsx>{`
              .typing span {
                opacity: 0;
                animation: typing 0.1s forwards;
              }

              @keyframes typing {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}</style>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 font-['Quicksand'] tracking-wide leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-zinc-600 dark:first-letter:text-zinc-100 sm:text-base sm:mb-4 text-justify px-7 sm:px-0">
            Stay updated with the latest tech trends, programming tutorials, and
            industry insights. Our blog covers everything from web development
            and AI to cybersecurity and cloud computing, helping developers and
            tech enthusiasts level up their skills.
          </p>
          <Link href="/blogs">
            <button className="bg-black hover:bg-gray-900 dark:bg-[#E1E1E2] dark:hover:bg-gray-200 text-white dark:text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
              <FiBook />
              View Our Blogs
              <FiArrowRight />
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 m-5"
        >
          <Image
            src="/imagefive.jpg"
            alt="Hero"
            width={900}
            height={900}
            className="w-full rounded-3xl object-cover cursor-pointer animate-fade-in invert hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl hover:border-gray-300"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
