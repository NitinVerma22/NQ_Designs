'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function DraggableWhatsAppButton() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Set initial position on bottom-right
  useEffect(() => {
    const bottomMargin = 80;
    const buttonSize = 56;
    const initialY = window.innerHeight - bottomMargin - buttonSize;
    const initialX = window.innerWidth - 20 - buttonSize;
    setPosition({ x: initialX, y: initialY });
  }, []);

  // Bounce like a ball every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        y: [0, -20, 0, -10, 0], // bounce steps
        transition: {
          duration: 0.6,
          times: [0, 0.2, 0.5, 0.7, 1],
          ease: 'easeOut',
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls]);

  // Drag logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !buttonRef.current) return;
      const newX = e.clientX - buttonRef.current.offsetWidth / 2;
      const newY = e.clientY - buttonRef.current.offsetHeight / 2;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      ref={buttonRef}
      onMouseDown={() => setIsDragging(true)}
      className="fixed z-50 w-14 h-14 rounded-full bg-green-500 cursor-grab active:cursor-grabbing flex items-center justify-center shadow-lg"
      animate={controls}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'fixed',
      }}
    >
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </motion.div>
  );
}
