// components/Preloader.js
import React from "react";

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="relative max-w-[90vw] w-full sm:w-auto">
        <div className="flex space-x-2 justify-center items-center h-16 p-4 rounded-lg backdrop-blur-sm transition-colors duration-300">
          <div className="w-2 sm:w-2.5 h-8 sm:h-10 bg-zinc-950 dark:bg-zinc-400 rounded-full animate-[pulse_1s_ease-in-out_infinite] shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-colors duration-300"></div>
          <div className="w-2 sm:w-2.5 h-12 sm:h-14 bg-zinc-950 dark:bg-zinc-400 rounded-full animate-[pulse_1s_ease-in-out_0.2s_infinite] shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-colors duration-300"></div>
          <div className="w-2 sm:w-2.5 h-8 sm:h-10 bg-zinc-950 dark:bg-zinc-400 rounded-full animate-[pulse_1s_ease-in-out_0.4s_infinite] shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
