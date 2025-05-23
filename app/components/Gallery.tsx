'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/interior2.jpg', alt: 'Living Room' },
  { src: '/images/residential/r1.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r4.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r2.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r10.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r6.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r8.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r3.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/residential/r12.jpeg', alt: 'Modern Kitchen' },
  { src: '/images/furniture/f1.jpeg', alt: 'Minimal Bedroom' },
  { src: '/images/furniture/f2.jpeg', alt: 'Minimal Bedroom' },
  { src: '/images/furniture/f4.jpeg', alt: 'Minimal Bedroom' },
  { src: '/images/furniture/f5.jpeg', alt: 'Minimal Bedroom' },
  { src: '/images/furniture/f3.jpeg', alt: 'Minimal Bedroom' },
  { src: '/images/architecture/gorden.jpg', alt: 'Living Room' },
  { src: '/images/architecture/royal_court.png', alt: 'Living Room' },
  { src: '/images/architecture/royal1a.png', alt: 'Living Room' },
  { src: '/images/architecture/royal1b.png', alt: 'Living Room' },
  { src: '/images/architecture/retreat_centre.png', alt: 'Living Room' },
  { src: '/images/architecture/retreat_centre2.png', alt: 'Living Room' },
];

const imageVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -40 : 40,
    y: 30,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Gallery() {
  return (
    <section className="px-4 sm:px-6 py-12 bg-orange-50 text-yellow-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-10 text-center tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Spaces Reimagined
        </motion.h2>

        {/* Responsive Masonry-style grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full overflow-hidden rounded-2xl shadow-xl break-inside-avoid"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out overflow-hidden"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-10 mb-10 flex justify-center">
          <Link
            href="/projects"
            className="px-6 pt-3 pb-6 bg-yellow-800 text-white rounded-md text-sm font-medium hover:bg-yellow-600 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
