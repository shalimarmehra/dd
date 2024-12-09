"use client"
// components/CustomCursor.js
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
  className="custom-cursor fixed pointer-events-none z-50 mix-blend-difference hidden sm:block"
  style={{
    left: `${position.x}px`,
    top: `${position.y}px`,
  }}
>
  <div className="h-8 w-8 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out" />
</div>
  );
};

export default CustomCursor;
