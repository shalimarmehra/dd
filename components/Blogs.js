"use client";
import { useState, useEffect } from "react";
import { FaHeart, FaComment, FaBookmark, FaShare } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { MdArticle } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import { FaBlog } from "react-icons/fa";
import { motion } from "framer-motion";

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [likes, setLikes] = useState(125);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState(48);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("blogs-section");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "A Guide to Igniting Your Imagination",
          text: "Check out this amazing blog post!",  
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      alert("Copy this link: " + window.location.href);
    }
  };

  return (
    <div id="blogs-section" className="bg-white dark:bg-black font-sans p-4 transition-colors duration-300">
      <div className="max-w-7xl max-lg:max-w-3xl max-md:max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex"
        >
          <div className="flex-1">
            <div className="py-4">
              <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold tracking-wide text-gray-900 dark:text-gray-100 font-['Playfair_Display'] flex items-center justify-center gap-2 relative hover:text-shadow-lg transition-all duration-300 group cursor-help [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                <MdArticle className="transition-transform hover:scale-110 duration-300" />
                <span className="relative">
                  LATEST BLOGS
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 group-hover:w-full transition-all duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></span>
                </span>
              </h2>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
              {/* Blog posts with staggered animations */}
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: index * 0.2 
                  }}
                  className="flex max-lg:flex-col bg-white dark:bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="h-65 lg:w-1/2 overflow-hidden">
                  <Image
                    src="/first.jpg"
                    width={500}
                    height={500}
                    alt="Blog Post 1"
                    className="w-full h-full object-cover hover:scale-110 hover:rotate-3 transition duration-500 ease-in-out transform"
                  />
                </div>
                <div className="p-6 lg:w-1/2">
                  <h3 className="text-xl font-['Poppins'] font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 line-clamp-2 ">
                    A Guide to Igniting Your Imagination g elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in repr
                  </h3>
                  <span className="text-sm font-['Roboto'] block text-gray-400 dark:text-gray-500 mt-2 capitalize italic">
                    10 Feb 2023 | By John Doe
                  </span>
                  <p className="text-sm font-['Open_Sans'] text-gray-500 dark:text-gray-400 mt-4 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit.g elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in repr
                  </p>
                  <div className="w-full h-px bg-black dark:bg-gray-300 my-5"></div>

                  <div className="flex flex-wrap gap-6">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 text-gray-500 hover:text-blue-600 text-base md:text-lg
          ${isLiked ? "text-red-500 hover:text-red-600" : ""}`}
                    >
                      <FaHeart />
                      <span>{likes}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-base md:text-lg">
                      <FaComment />
                      <span>{comments}</span>
                    </button>

                    <button
                      onClick={handleBookmark}
                      className={`flex items-center gap-2 text-gray-500 hover:text-blue-600 text-base md:text-lg
          ${isBookmarked ? "text-blue-500" : ""}`}
                    >
                      <FaBookmark />
                    </button>

                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-base md:text-lg"
                    >
                      <FaShare />
                    </button>
                  </div>
                  <a
                    href="javascript:void(0);"
                    className="group mt-4 inline-flex items-center gap-2 text-black dark:text-white font-['Montserrat'] font-bold text-sm uppercase transform hover:translate-x-2 transition-transform duration-300 max-w-fit md:text-base relative"
                  >
                    <span className="after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      READ MORE
                    </span>
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
                  {/* Existing blog post content */}
                  {/* ... Rest of the blog post content remains same ... */}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-10">
  {[1, 2, 3, 4].map((item, index) => (
    <div key={index} className="flex flex-col bg-white dark:bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out animate-fade-in-up" style={{fontFamily: "'Poppins', sans-serif"}}>
      <div className="relative h-64 overflow-hidden">
        <Image
          src={`/${['first', 'second', 'third', 'fourth'][index]}.jpg`}
          width={500}
          height={500}
          alt={`Blog Post ${index + 1}`}
          className="w-full h-full object-cover transition duration-700 ease-in-out hover:scale-110 hover:rotate-2 hover:filter hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {["A Guide to Igniting Your Imagination", "Hacks to Supercharge Your Day", "Trends and Predictions", "Innovators Changing the Game"][index]}
        </h3>
        
        <span className="text-sm md:text-base font-medium text-gray-400 dark:text-gray-500 mt-2 tracking-wider">
          {["10 FEB", "7 JUN", "5 OCT", "10 DEC"][index]} 2023 | BY {["JOHN DOE", "MARK ADAIR", "SIMON KONECKI", "SIMON KONECKI"][index]}
        </span>
        
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.
        </p>
        
        <a
          href="javascript:void(0);"
          className="mt-auto pt-4 inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base hover:underline transform hover:translate-x-2 transition-all duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  ))}
</div> */
}
