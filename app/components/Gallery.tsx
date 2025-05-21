'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/interior2.jpg', alt: 'Living Room', rowSpan: 'row-span-2' },
  { src: '/images/residential/r1.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r4.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r2.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r10.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r6.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r8.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r3.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },
  { src: '/images/residential/r12.jpeg', alt: 'Modern Kitchen', rowSpan: 'row-span-1' },

  { src: '/images/furniture/f1.jpeg', alt: 'Minimal Bedroom', rowSpan: 'row-span-2' },
  { src: '/images/furniture/f2.jpeg', alt: 'Minimal Bedroom', rowSpan: 'row-span-2' },
  { src: '/images/furniture/f4.jpeg', alt: 'Minimal Bedroom', rowSpan: 'row-span-2' },
  { src: '/images/furniture/f5.jpeg', alt: 'Minimal Bedroom', rowSpan: 'row-span-2' },
  { src: '/images/furniture/f3.jpeg', alt: 'Minimal Bedroom', rowSpan: 'row-span-2' },
  { src: '/images/architecture/gorden.jpg', alt: 'Living Room', rowSpan: 'row-span-2' },
  { src: '/images/architecture/royal_court.png', alt: 'Living Room', rowSpan: 'row-span-2' },
  { src: '/images/architecture/royal1a.png', alt: 'Living Room', rowSpan: 'row-span-2' },
  { src: '/images/architecture/royal1b.png', alt: 'Living Room', rowSpan: 'row-span-2' },
  { src: '/images/architecture/retreat_centre.png', alt: 'Living Room', rowSpan: 'row-span-2' },
  { src: '/images/architecture/retreat_centre2.png', alt: 'Living Room', rowSpan: 'row-span-2' },
  
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
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Gallery() {
  return (
    <section className="px-6 py-12 bg-orange-50 to-[#cbc6bc] text-yellow-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-10 text-center tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Spaces Reimagined
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative overflow-hidden rounded-2xl shadow-xl ${image.rowSpan}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
               {/* View All Projects button */}
     
            </motion.div>
          ))}
          
        </div>
           <div className="mt-16 flex justify-center">
        <Link
          href="/projects"
          className="px-6 py-3 bg-yellow-800 text-white rounded-md text-sm font-medium hover:bg-yellow-600 transition"
        >
          View More
        </Link>
      </div>
      </div>
    </section>
  );
}
