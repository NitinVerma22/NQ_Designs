 'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import { MdDensitySmall } from 'react-icons/md'

type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
};

const allProjects: Project[] = [
  // === Residential Projects ===
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r1.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r2.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r8.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r9.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r10.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r11.jpg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r14.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r15.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r16.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r17.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r3.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r4.jpeg',
  },
  {
    title: 'Modern Villa in Jaipur',
    description: 'Luxury villa with modern design and landscaping.',
    category: 'Residential',
    image: '/images/residential/r13.jpeg',
  },

  // Add more residential images here...

  // === Commercial Projects ===


  {
    title: 'Retail Mall Space',
    description: 'Commercial layout with optimized navigation.',
    category: 'Commercial',
    image: '/images/commercial/c4.jpg',
  },
  {
    title: 'Retail Mall Space',
    description: 'Commercial layout with optimized navigation.',
    category: 'Commercial',
    image: '/images/commercial/c5.jpg',
  },
  {
    title: 'Retail Mall Space',
    description: 'Commercial layout with optimized navigation.',
    category: 'Commercial',
    image: '/images/commercial/c6.jpg',
  },
  {
    title: 'Retail Mall Space',
    description: 'Commercial layout with optimized navigation.',
    category: 'Commercial',
    image: '/images/commercial/c7.jpg',
  },
  // Add more commercial...

  // === Furnitures ===
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f1.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f2.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f3.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f4.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f5.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f6.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f7.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f8.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f9.jpeg',
  },
  {
    title: 'Skyline Towers',
    description: 'Smart home Furnitures with green rooftop.',
    category: 'Furnitures',
    image: '/images/furniture/f10.jpeg',
  },
  // Add more Furnitures...

  // === Associated ===
  {

    title: 'Retreat Centre',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/retreat_centre.png',
  },
  {
    title: 'Retreat Centre 2',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/retreat_centre2.png',
  },
  {
    title: 'Retreat Centre 2',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/retreat_centre2.png',
  },
  {
    title: 'Royal Court ',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/royal_court.png',},
  {
    title: 'Royal Court ',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/royal_court2.png',},
  {
    title: 'Royal Court ',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/royal1a.png',},
  {
    title: 'Royal Court ',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/royal1b.png',},
  {
    title: 'Rustle Court',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/rustle_court.jpg',
  },
  {
    title: 'Rustle Court',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/rustle_court2.jpg',
  },
  {
    title: 'Gorden',
    description: 'Campus built for accessibility and sustainability.',
    category: 'Associated',
    image: '/images/architecture/gorden.jpg',
  },
  // Add more associated...
];

const categories = ['All', 'Residential', 'Commercial', 'Furnitures', 'Associated'];

export default function AllProjectsWithFilters() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <>
    <Header></Header>
    
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border transition text-sm ${
                selectedCategory === cat
                  ? 'bg-yellow-800 text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-100'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* No results fallback */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No projects found.</p>

        )}
      </div>
    </section>
    <Footer></Footer>
    <MobileNav></MobileNav>
    </>
  );
}
