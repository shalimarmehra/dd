"use client";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { useEffect } from "react";

const SocialProof = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "50px"
    });

    const section = document.querySelector('.social-proof-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: (
        <FaLinkedin className="text-[#0077B5] transition-all hover:scale-125 hover:rotate-12 duration-300" />
      ),
      url: "https://www.linkedin.com/company/dev-dossier",
      stats: "5K+",
      label: "Connections",
    },
    {
      platform: "Instagram",
      icon: (
        <FaInstagram className="text-[#E1306C] transition-all hover:scale-125 hover:rotate-12 duration-300" />
      ),
      url: "https://www.instagram.com/devdossier/",
      stats: "10.5K",
      label: "Followers",
    },
    
    {
      platform: "X",
      icon: (
        <FaXTwitter className="text-[#1DA1F2] transition-all hover:scale-125 hover:rotate-12 duration-300" />
      ),
      url: "https://x.com/DevDossier",
      stats: "8.2K",
      label: "Followers",
    },
    {
      platform: "YouTube",
      icon: (
        <FaYoutube className="text-[#FF0000] transition-all hover:scale-125 hover:rotate-12 duration-300" />
      ),
      url: "https://www.youtube.com/@DevDossier",
      stats: "15K",
      label: "Subscribers",
    },
  ];

  return (
    <section className={`social-proof-section bg-gray-50 dark:bg-black py-8 sm:py-16 px-4 sm:px-8 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out`}>
      <h2
        className={`text-3xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6 sm:mb-8 uppercase flex items-center justify-center font-['Playfair_Display']`}
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
      >
        <IoShareSocial className={`text-2xl sm:text-2xl mr-4 transition-all duration-500`} />
        <span className={`group relative hover:after:w-full after:w-0 after:h-0.5 after:absolute after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-500 cursor-help`}>
          Connect With Me
        </span>
      </h2>
      <div className={`max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md
                min-w-[150px] sm:min-w-[200px] text-center
                transition-all duration-700 ease-in-out hover:-translate-y-2 hover:scale-105
                hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-600`}
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
            }}
          >
            <div
              className={`text-3xl sm:text-4xl mb-3 sm:mb-4 dark:text-gray-200 
                    transition-transform duration-500 hover:rotate-6`}
            >
              {social.icon}
            </div>
            <div
              className={`flex flex-col gap-1 sm:gap-2 
                    transition-opacity duration-500 hover:opacity-80`}
            >
              <span
                className={`text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100
                       transition-colors duration-500`}
              >
                {social.stats}
              </span>
              <span
                className={`text-xs sm:text-sm text-gray-600 dark:text-gray-300
                       transition-colors duration-500`}
              >
                {social.label}
              </span>
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .social-proof-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-proof-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default SocialProof;