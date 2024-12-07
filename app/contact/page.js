import React from "react";
import {
  MdEmail,
  MdGavel,
  MdMarkUnreadChatAlt,
  MdPrivacyTip,
} from "react-icons/md";
import SimpleDivider from "../../components/SimpleDivider";
import BlogsCard from "@/components/BlogsCard";
import SocialProof from "@/components/SocialProof";
import NewsLetterCTA from "@/components/NewsLetterCTA";
import Image from "next/image";
import Link from "next/link";
import { IoMdSend } from "react-icons/io";
import { BsFillChatFill } from "react-icons/bs";
import ScrollToTop from "@/components/ScrollToTop";
import { FaMessage } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <ScrollToTop />
      {/* contact Form */}

      <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold tracking-wide text-gray-900 dark:text-gray-100 font-['Playfair_Display'] flex items-center justify-center gap-2 relative hover:text-shadow-lg transition-all duration-300 group cursor-help [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] animate-fadeIn mb-10">
        <MdMarkUnreadChatAlt className="animate-pulse transition-transform hover:scale-110" />
        <span className="relative">
          CONTACT
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 group-hover:w-full transition-all duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></span>
        </span>
      </h1>

      <SimpleDivider type="gradient" />

      <p className="text-center text-base md:text-lg font-bold text-gray-600 dark:text-gray-300 mb-6 mt-4 w-full max-w-full online-flex justify-items-center">
        <BsFillChatFill className="inline mr-2" />
        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-600 dark:after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full cursor-help">
          Fill in the form to start a conversation.
        </span>
      </p>
      <div className="relative flex items-center justify-center md:min-h-0 min-h-screen w-full bg-white dark:bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <form
              className="p-4 flex flex-col justify-center space-y-4"
              method="POST"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center"
                >
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  pattern="[A-Za-z]{3,15}"
                  title="Name must be 3-15 characters long and contain only letters"
                  required
                  className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:ring-opacity-50 transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                >
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email ID"
                  pattern="[a-zA-Z0-9]{3,40}@gmail.com"
                  minLength="3"
                  maxLength="40"
                  className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:ring-opacity-50 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="mobile"
                  className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                >
                  Mobile Number <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  minLength={10}
                  title="Please enter valid 10 digit mobile number"
                  className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:ring-opacity-50 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-600 dark:text-gray-400 mb-1"
                >
                  Message <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:ring-opacity-50 transition-colors"
                  required
                  minLength="10"
                  maxLength="500"
                  pattern="^[a-zA-Z0-9\s\.,!?-]*$"
                  title="Please enter a message between 10-500 characters. Only letters, numbers, and basic punctuation allowed."
                ></textarea>
              </div>

              <button
                type="submit"
                formMethod="POST"
                className="w-full md:w-auto bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 text-white dark:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-600 focus:ring-opacity-50 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Message
                <IoMdSend className="text-xl" />
              </button>

              <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-4 text-center">
                By contacting us, you agree to our{" "}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Link
                    className="font-bold text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors inline-flex items-center"
                    href="/termsandcondition"
                  >
                    <MdGavel className="mr-1" />
                    <span>Terms of service</span>
                  </Link>
                  <span>&</span>
                  <Link
                    className="font-bold text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors inline-flex items-center"
                    href="/privacypolicy"
                  >
                    <MdPrivacyTip className="mr-1" />
                    <span>Privacy Policy</span>
                  </Link>
                </div>
              </span>

              <SimpleDivider type="gradient" />

              <div className="p-4 md:p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                <p className="text-center text-base md:text-xl font-bold text-gray-600 dark:text-gray-300 mb-6 mt-4 w-full max-w-full online-flex justify-items-center">
                  <BsFillChatFill className="inline mr-2" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-600 dark:after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full cursor-help">
                    Get In Touch With Us Now !
                  </span>
                </p>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <div className="text-center">
                          <h3 className="font-bold mb-2 flex items-center justify-center gap-2">
                            <FaMessage />
                            Message us
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Mon to Friday, 11AM - 11PM
                          </p>
                          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                            <Image
                              src="/Message.gif"
                              width={50}
                              height={50}
                              alt="Gmail gif"
                              className="w-4 h-4 ml-1"
                            />
                            <div
                              className="ml-3 text-sm md:text-base tracking-wide font-semibold bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded hover:font-bold hover:scale-105 transition-all"
                              title="+44 1234567890"
                            >
                              +44 1234567890
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <h3 className="font-bold mb-2 flex items-center justify-center gap-2">
                            <MdEmail />
                            Email Support
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Email us & we&apos;ll get back to you within 24
                            hours.
                          </p>
                          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                            <Image
                              src="/Gmail.gif"
                              width={50}
                              height={50}
                              alt="Gmail gif"
                              className="w-4 h-4 ml-1"
                            />
                            <div
                              className="ml-3 text-sm md:text-base tracking-wide font-semibold bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded flex items-center hover:font-bold hover:scale-105 transition-all"
                              title="example@gmail.com"
                            >
                              example@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-8">
                        <div className="flex items-center justify-center mb-1">
                          <h3 className="text-lg font-semibold">
                            Chat Support
                          </h3>
                          <div className="flex items-center ml-2">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                new Date().getHours() >= 11 &&
                                new Date().getHours() < 23 &&
                                new Date().getDay() >= 1 &&
                                new Date().getDay() <= 5
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              }`}
                            ></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date().getHours() >= 11 &&
                              new Date().getHours() < 23 &&
                              new Date().getDay() >= 1 &&
                              new Date().getDay() <= 5
                                ? "Online"
                                : "Offline"}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Available Mon to Friday, 11AM - 11PM (GMT)
                        </p>
                      </div>
                    </div>
                    <button className="w-full py-2 px-4 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Start Chat</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Stuff */}
      <SimpleDivider type="gradient" />
      <BlogsCard />
      <SimpleDivider type="gradient" />
      <SocialProof />
      <SimpleDivider type="gradient" />
      <NewsLetterCTA />
      <SimpleDivider type="gradient" />
    </>
  );
};

export default page;
