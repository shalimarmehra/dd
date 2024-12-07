import Image from "next/image";
import { FaBookReader } from "react-icons/fa";

const BlogHero = () => {
  return (
    <>
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden transition-all duration-500 ease-in-out transform hover:-translate-y-1 dark:bg-black p-5 mx-1 rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/imagesix.jpg"
            alt="Blog Hero"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 dark:from-black/80 dark:to-black/60 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full animate-fade-in transition-opacity duration-500">
            <span className="text-purple-400 dark:text-purple-300 font-semibold text-sm md:text-base mb-3 transform hover:translate-x-2 transition-all duration-300 ease-in-out">
              Featured Post
            </span>
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white dark:text-gray-100 max-w-2xl mb-4 animate-slide-up transition-all duration-500 hover:text-gray-200 line-clamp-2"
              title="Exploring the Latest Trends in Technology and Innovation"
            >
              Exploring the Latest Trends in Technology and Innovation
            </h1>
            <p
              className="text-gray-200 dark:text-gray-300 max-w-xl text-sm md:text-base mb-6 animate-slide-up delay-100 transition-colors duration-300 hover:text-white line-clamp-2"
              title="Dive into our comprehensive guide on emerging technologies,
              digital transformation, and the future of innovation in todays
              rapidly evolving landscape."
            >
              Dive into our comprehensive guide on emerging technologies,
              digital transformation, and the future of innovation in todays
              rapidly evolving landscape. lorem ipsum dolor sit amet,
              consectetur
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up delay-200 transition-all duration-300">
              <div className="flex items-center group">
                <Image
                  src="/second.jpg"
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full transition-all duration-300 group-hover:scale-110"
                />
                <div className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-white dark:text-gray-100 font-medium transition-colors duration-300 hover:text-purple-200">
                    John Doe
                  </p>
                  <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
                    Posted on Nov 29, 2024
                  </p>
                </div>
              </div>
              <button className="px-8 py-3 bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out text-black rounded-lg text-sm font-medium transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Read More
                <FaBookReader className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </>
  );
};

export default BlogHero;
