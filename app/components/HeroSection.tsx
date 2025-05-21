"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  {
    id: "section1",
    image: "/images/hero1.png",
    title: "Welcome to NQ Design",
    subtitle: "We Build Dreams with Precision",
  },
  {
    id: "section2",
    image: "/images/hero2.jpeg",
    title: "Interior Excellence",
    subtitle: "Modern, Elegant, Functional",
  },
  {
    id: "section3",
    image: "/images/hero3.jpeg",
    title: "Architectural Brilliance",
    subtitle: "Innovation meets Aesthetics",
  },
];

export default function StaticHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = sections.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = sections[currentIndex];

  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
      <Image
        src={currentSlide.image}
        alt={currentSlide.title}
        fill
        className="object-contain md:object-cover transition-all duration-700"
        priority
      />
      <motion.div
        key={currentSlide.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40"
      >
        <h1 className="text-3xl md:text-6xl font-bold drop-shadow-lg">
          {currentSlide.title}
        </h1>
        <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
          {currentSlide.subtitle}
        </p>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
