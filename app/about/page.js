// pages/about.js
import BlogsCard from '@/components/BlogsCard';
import NewsLetterCTA from '@/components/NewsLetterCTA';
import SocialProof from '@/components/SocialProof';
import Head from 'next/head';
import Image from 'next/image'
import { BsInfoSquareFill } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-500 to-black flex items-center justify-center">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon" />
      </Head>

      <div className="text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl mb-8">
          We&apos;re launching something exciting. Stay tuned!
        </p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="bg-black hover:bg-gray-700 px-6 py-2 rounded-md transition-colors duration-300"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
