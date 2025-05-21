"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `Partner ${i + 1}`,
  logo: `/partners/logo${(i % 10) + 1}.png`, // logo1.png to logo10.png repeated
}));

export default function OurPartners() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Lovely Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={50}
                className="object-contain max-h-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
