'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// If the file exists at a different path, update the import accordingly.
// Example: If it's in 'app/components/AnimatedOnScroll.tsx', use:
import AnimatedOnScroll from '../components/AnimatedOnScroll';
// Otherwise, create the file at '../../components/AnimatedOnScroll.tsx' if it doesn't exist.
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { div } from 'framer-motion/client';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

const projects = [
  {
    id: 'apartments',
    title: 'Retreat Centre I',
    image: '/images/portfolio/retreat_centre1.jpeg',
    description: 'Modern and stylish apartment interiors.',
    href: '/projects/apartments',
  },
  {
    id: 'villas',
    title: 'Retreat Centre II',
    image: '/images/portfolio/retreat2.png',
    description: 'Modern and stylish apartment interiors.',

    href: '/projects/villas',
  },
  {
    id: 'commercial',
    title: 'Royal Court',
    image: '/images/portfolio/royal_court.png',
    description: 'Office, retail and co-working spaces.',
    href: '/projects/commercial',
  },
];

const PortfolioPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <Header></Header>

      <main className="space-y-24 px-16 py-12 w-[100vw] md:w-[85vw] mx-auto">
        {/* About Section */}
        <AnimatedOnScroll>
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About NQ Designs Pvt. Ltd.</h2>
                <p className="text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                NQ Designs Pvt. Ltd. is a premier architecture and interior design firm committed to transforming spaces into inspir
                
                
                
                ing experiences. With a deep focus on innovation, elegance, and functionality, we create homes and commercial spaces that stand the test of time.
                </p>
                {/* Show more text on mobile when "Read More" is clicked */}
                {showMore && (
                <p className="text-gray-600 leading-relaxed mt-2 md:hidden">
                  NQ Designs Pvt. Ltd. is a premier architecture and interior design firm committed to transforming spaces into inspiring experiences. With a deep focus on innovation, elegance, and functionality, we create homes and commercial spaces that stand the test of time.
                </p>
                )}
              {/* Responsive "Read More" button for mobile only */}
              <div className="block md:hidden mt-4">
                <button
                  className="text-blue-600 underline"
                  onClick={() => setShowMore((prev) => !prev)}
                  type="button"
                >
                  {showMore ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
            <Image
              src="/images/porfolio_hero.png"
              alt="NQ Designs office"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            {/* Managing Director */}
          </section>
        </AnimatedOnScroll>
        <section className="p-4 rounded-2xl shadow-lg">
          <div className='flex justify-center text-yellow-600 text-2xl py-8 '>Managing Director</div>
          <div className="max-w-6xl mx-auto ">
            <motion.div
              className="flex flex-col md:flex-row items-center  bg-gray-100 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Image Box */}
              <div className="w-full md:w-1/2 h-100 relative bg-[#d8e0f4]">
                <Image
                  src="/images/md.jpg"
                  alt="Managing Director"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Box */}
              <div className="w-full md:w-1/2 p-8 text-gray-800">
                <h3 className="text-3xl font-bold mb-4 text-yellow-800">
                  Mrs. Nida Qadir
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Managing Director
                </p>
                <p className="text-base leading-relaxed text-gray-700 line-clamp-2 md:line-clamp-none">
                  As the Founder and Managing Director of NQ Design Pvt. Ltd., I’ve always believed that great design is where vision meets purpose. With a background in architecture, construction, and interior design, my goal has been to lead projects that are not only aesthetically beautiful but also deeply functional and enduring.
                  At NQ Design, I work closely with our clients and team to ensure each space we create reflects elegance, efficiency, and individuality. From structural planning to the final interior touches, I’m passionate about turning ideas into timeless environments that enhance how people live and work.            </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <AnimatedOnScroll>
          <section>
            <h2 className="text-3xl text-yellow-800 font-bold mb-8">Our Top Projects</h2>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Link href={project.href} className="group block">
                    <div className="rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedOnScroll>

        {/* View All Projects button */}
        <div className="mt-16 flex justify-center">
        <Link
          href="/projects"
          className="px-6 py-3 bg-yellow-800 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          View All Projects
        </Link>
      </div>

        {/* Customer Review */}
        <AnimatedOnScroll>
          <section className="bg-gray-50 p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
              “NQ Designs transformed our apartment into a luxurious and functional space. Their attention to detail and professionalism is unmatched.”
            </blockquote>
            <p className="mt-4 font-semibold">— Priya Sharma, Lucknow</p>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
              “NQ Designs transformed our apartment into a luxurious and functional space. Their attention to detail and professionalism is unmatched.”
            </blockquote>
            <p className="mt-4 font-semibold">— Priya Sharma, Lucknow</p>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4">
              “Working with NQ Designs was a seamless experience. They understood our vision and delivered beyond our expectations.”
            </blockquote>
            <p className="mt-4 font-semibold">— Ramesh Babu, Lucknow</p>
          </section>
        </AnimatedOnScroll>

        {/* CTA Section */}
        <AnimatedOnScroll>
          <section className="grid md:grid-cols-2 items-center gap-8 bg-[#9d8977] p-8 rounded-2xl shadow">
            <video
              src="/videos/contact-hero.mp4"
              poster="/images/hero1.jpeg"
              width={800}
              height={500}
              className="rounded-2xl object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline

            >
              <source src="/videos/contact-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Space?</h2>
              <p className="text-white mb-6">
                Let's bring your dream space to life with our expert design and architecture services.
              </p>
              <Link
                href="/contact"
                className="inline-block text-white bg-yellow-800 px-6 py-3 rounded-full hover:bg-yellow-700 hover:text-white transition"
              >
                Get Free Consultation
              </Link>
            </div>

          </section>
        </AnimatedOnScroll>
      </main>
      <MobileNav></MobileNav>
      <Footer></Footer>
    </div>
  );
};

export default PortfolioPage;
