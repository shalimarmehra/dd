"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your launch date here
  const launchDate = new Date('2024-12-31T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
            Coming Soon
          </h1>
          
          <p className="text-xl md:text-2xl mb-12">
            Were working hard to bring you something amazing!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
            <div className="flex flex-col">
              <span className="text-4xl md:text-6xl font-bold">{timeLeft.days}</span>
              <span className="text-sm md:text-base">Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</span>
              <span className="text-sm md:text-base">Hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</span>
              <span className="text-sm md:text-base">Minutes</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-6xl font-bold">{timeLeft.seconds}</span>
              <span className="text-sm md:text-base">Seconds</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md transition-colors duration-300"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
