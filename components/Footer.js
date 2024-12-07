import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";
import { SlUserFollowing } from "react-icons/sl";
import { GrContactInfo } from "react-icons/gr";
import { GiQuickSlash } from "react-icons/gi";

// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-6">
            <div className="flex flex-row items-center justify-center sm:justify-start">
              <Image
                src="/dd1.png"
                alt="Tech Dossier"
                width={50}
                height={50}
                className="w-[50px] h-[48px] object-contain invert mr-2"
              />
              <h3 className="text-lg font-bold relative inline-block cursor-pointer">
                <span className="relative group">
                  Dev Dossier
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h3>
            </div>
            <p className="text-gray-400 dark:text-gray-300 text-justify">
              Transform your ideas into reality with my web development
              services. From sleek designs to powerful functionality, I provide
              custom solutions tailored to your needs. Explore my blog for the
              latest insights and tips in web development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 hidden md:block">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left relative inline-block cursor-pointer">
              <span className="relative group">
                <GiQuickSlash className="mr-2 inline-block" />
                <span className="relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="\"
                  className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="\blogs"
                  className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="\contact"
                  className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-center relative cursor-pointer">
              <span className="relative group flex items-center justify-center sm:justify-start">
                <span className="relative">
                  <GrContactInfo className="mr-2" />
                </span>
                <span className="relative">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
            </h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-center sm:text-left">
              <li>New Delhi, India</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: contact@devdossier.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center relative cursor-pointer">
              <span className="relative group flex items-center justify-center sm:justify-start">
                <SlUserFollowing className="mr-2 relative group">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </SlUserFollowing>
                <span className="relative group">
                  Follow Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
            </h3>
            <div className="bg-white dark:bg-black items-start rounded-lg p-2 sm:p-10">
              <SocialMediaLinks />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 md:mt-12 pt-8">
          <p className="text-center text-gray-400 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Dev Dossier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
