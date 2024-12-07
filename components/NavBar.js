"use client";
// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeToggle from "./theme-btn";
import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";
import { FaHome } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/50 shadow-lg w-full z-50 sticky top-0 p-2 backdrop-blur mb-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1 hover:opacity-90 transition-all"
            >
              <Image
                src="/dd1.png"
                alt="Tech Dossier"
                width={50}
                height={50}
                className="w-[50px] h-[50px] object-contain dark:invert"
              />
              <span className="text-2xl font-extrabold font-['Orbitron'] dark:text-gray-100 text-gray-800 hover:text-gray-600 dark:hover:text-gray-300">
                Dev Dossier
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white cursor-pointer relative flex items-center transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900 dark:after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-shadow-sm"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white cursor-pointer relative flex items-center transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900 dark:after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-shadow-sm"
            >
              <TbLogs className="mr-2" />
              Blogs
            </Link>
            {/* <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white cursor-pointer relative flex items-center transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900 dark:after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-shadow-sm"
            >
              <FaServicestack className="mr-2" />
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white cursor-pointer relative flex items-center transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900 dark:after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-shadow-sm"
            >
              <FaInfo className="mr-2" />
              About
            </Link> */}
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white cursor-pointer relative flex items-center transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900 dark:after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-shadow-sm"
            >
              <GrContact className="mr-2" />
              Contact Us
            </Link>

            {/* Social Media Links */}
            <SocialMediaLinks />

            {/* Multilanguage Language Functionality */}
            <button
              // onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {/* Added Globe Icon */}
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              {/* Existing dropdown arrow remains the same */}
              <svg
                // className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                className={`w-4 h-4 transition-transform 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <Link href={"/login"}>
              <Button
                style={{
                  padding: "0.8rem 1.5rem",
                  margin: "0.5rem",
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                Login
              </Button>
            </Link>

            <Link href={"/signup"}>
              <Button
                style={{
                  padding: "0.8rem 1.5rem",
                  margin: "0.5rem",
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                Signup
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <ThemeToggle />

              {/* Multilanguage Language Functionality */}
              <button
                // onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-2 py-2 ml-2 rounded-md bg-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Added Globe Icon */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                {/* Existing dropdown arrow remains the same */}
                <svg
                  className={`w-4 h-4 transition-transform 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <SheetTrigger>
                <span className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200 ease-in-out transform shadow-sm border border-transparent">
                  <svg
                    className="block h-6 w-6 hover:rotate-180 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              </SheetTrigger>
              <SheetContent onOpenAutoFocus={(open) => !open}>
                <SheetHeader>
                  <SheetTitle className="text-center font-poppins text-2xl font-semibold tracking-tight flex items-center justify-center dark:text-gray-100 light:text-gray-900 mt-[-10px]">
                  <Image
                src="/dd1.png"
                alt="Tech Dossier"
                width={50}
                height={50}
                className="w-[50px] h-[50px] object-contain dark:invert"
              />
              <span className="text-2xl font-extrabold font-['Orbitron'] dark:text-gray-100 text-gray-800 hover:text-gray-600 dark:hover:text-gray-300">
                Dev Dossier
              </span>
                  </SheetTitle>

                  {/* Search Bar */}
                  <div className="w-full max-w-sm min-w-[200px]">
                    <div className="relative flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Searching..."
                      />

                      <button
                        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        type="button"
                        onClick={() =>
                          document.querySelector('[data-state="open"]')?.click()
                        }
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  {/* Search Bar End */}

                  <SheetDescription asChild>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                          href="/"
                          className="group flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer transition-all duration-300 ease-in-out"
                          onClick={() =>
                            document
                              .querySelector('[data-state="open"]')
                              ?.click()
                          }
                        >
                          <FaHome className="mr-2" />
                          Home
                          <BiSolidRightArrow className="ml-auto" />
                        </Link>

                        <Link
                          href="/blogs"
                          className="group flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer transition-all duration-300 ease-in-out"
                          onClick={() =>
                            document
                              .querySelector('[data-state="open"]')
                              ?.click()
                          }
                        >
                          <TbLogs className="mr-2" />
                          Blogs
                          <BiSolidRightArrow className="ml-auto" />
                        </Link>

                        <Link
                          href="/contact"
                          className="group flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer transition-all duration-300 ease-in-out"
                          onClick={() =>
                            document
                              .querySelector('[data-state="open"]')
                              ?.click()
                          }
                        >
                          <GrContact className="mr-2" />
                          Contact Us
                          <BiSolidRightArrow className="ml-auto" />
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                          <Link
                            href="/login"
                            onClick={() =>
                              document
                                .querySelector('[data-state="open"]')
                                ?.click()
                            }
                          >
                            <Button
                              variant="outline"
                              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out border-2 border-blue-400 dark:border-blue-500 backdrop-blur-sm w-full sm:w-auto hover:text-white"
                            >
                              <span className="flex items-center justify-center">
                                💻 Login
                              </span>
                            </Button>
                          </Link>
                          <Link
                            href="/signup"
                            onClick={() =>
                              document
                                .querySelector('[data-state="open"]')
                                ?.click()
                            }
                          >
                            <Button
                              variant="outline"
                              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out border-2 border-cyan-400 dark:border-cyan-500 backdrop-blur-sm w-full sm:w-auto hover:text-white"
                            >
                              <span className="flex items-center justify-center">
                                🔐 Signup
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SheetDescription>
                  {/* Social Media Links */}
                  <div className="p-45">
                    <SocialMediaLinks />
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
