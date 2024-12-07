"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogsCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="text-center mt-5" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200 relative inline-flex items-center gap-2 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          <IoIosTrendingUp />
          Top Trending Blogs
        </h2>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 transition-colors duration-200 font-sans p-3">
          Discover the latest trends and insights in our trending blog section.
          Stay updated with fresh, engaging content that keeps you ahead of the
          curve.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-[95%] mx-auto my-10">
        {[1, 2, 3].map((item) => (
          <Link
            href={`/blog/${item}`}
            key={item}
            className="cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={item * 100}
          >
            <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              <div className="relative overflow-hidden aspect-video">
                <span
                  className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full z-10"
                  style={{
                    backgroundColor:
                      item % 3 === 0
                        ? "#FF6B6B"
                        : item % 3 === 1
                        ? "#4ECDC4"
                        : "#FFD93D",
                  }}
                >
                  {item % 3 === 0
                    ? "Technology"
                    : item % 3 === 1
                    ? "Lifestyle"
                    : "Business"}
                </span>
                <Image
                  src={`/fourth.jpg`}
                  width={500}
                  height={500}
                  alt="Blog post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Instagram-like gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-lg font-bold text-white mb-2 drop-shadow-lg">
                    Blog Post Title
                  </h2>
                  <div className="flex items-center text-sm text-white/90">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      1.2k views
                    </span>
                    <span className="mx-2">•</span>
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;