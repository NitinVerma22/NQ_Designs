"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Hammer, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Architecture",
    description:
      "Innovative, sustainable, and elegant building designs. Our architectural team specializes in creating unique concepts that balance aesthetics, functionality, and environmental responsibility. We collaborate closely with clients to understand their vision, site context, and requirements, ensuring every design is tailored to their needs. From initial sketches to detailed blueprints, we leverage the latest technology and design trends to deliver spaces that inspire and endure.",
    icon: <Building2 size={64} className="text-blue-600" />,
    image: "/images/architecture.png",
  },
  {
    title: "Construction",
    description:
      "End-to-end construction solutions with precision and quality. Our construction services cover every phase of your project, from initial planning and site preparation to final execution and handover. We utilize advanced techniques and high-quality materials to ensure durability, safety, and timely delivery. Our experienced team manages all aspects, coordinating seamlessly with architects and designers to bring your vision to life while maintaining strict quality standards and budget control. We are committed to transparent communication, proactive problem-solving, and delivering results that exceed expectations.",
    icon: <Hammer size={64} className="text-blue-600" />,
    image: "/images/construction.png",
  },
  {
    title: "Interior Design",
    description:
      "Modern interiors crafted for beauty and functionality. Our interior design services focus on creating harmonious spaces that reflect your personality and lifestyle. We blend aesthetics with practicality, ensuring every detail—from lighting to furniture selection—enhances the overall ambiance. Whether it's a residential or commercial project, our team delivers tailored solutions that maximize comfort, style, and usability. We stay updated with the latest trends and materials, offering creative layouts, color schemes, and decor ideas that transform ordinary spaces into extraordinary environments.",
    icon: <LayoutDashboard size={64} className="text-blue-600" />,
    image: "/images/interior_design.jpg",
  },
  {
    title: "Furniture Design",
    description:
      "Custom furniture solutions for every space. Our team crafts bespoke furniture pieces that blend seamlessly with your interiors, ensuring both comfort and style. From concept to installation, we focus on quality materials and innovative designs tailored to your needs. We offer a wide range of styles, finishes, and functionalities, from statement pieces to space-saving solutions. Our furniture is built to last, combining craftsmanship with modern manufacturing techniques to deliver exceptional results for homes, offices, and commercial spaces.",
    icon: <Building2 size={64} className="text-blue-600" />,
    image: "/images/furniture_design.png",
  },
  {
    title: "Renovation",
    description:
      "Transforming spaces with modern renovations. Our renovation services breathe new life into existing structures, enhancing both aesthetics and functionality. We handle everything from minor upgrades to complete overhauls, including structural changes, layout reconfigurations, and finishing touches. Our team works efficiently to minimize disruption, ensuring projects are completed on time and within budget. With a focus on quality craftsmanship and attention to detail, we help clients realize the full potential of their spaces, increasing value and comfort.",
    icon: <Hammer size={64} className="text-blue-600" />,
    image: "/images/renovation.jpg",
  },
];

export default function OurServices() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="space-y-16">
          {services.map((service, index) => {
            const isExpanded = expandedIndexes.includes(index);

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                } gap-10 items-center p-4 rounded-lg shadow-md md:shadow-none bg- white md:bg-transparent`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold text-yellow-900 mb-4">
                    {service.title}
                  </h3>

                  <p
                    className={`text-gray-600 mb-2 ${
                      isExpanded ? "" : "line-clamp-2"
                    } md:line-clamp-none`}
                  >
                    {service.description}
                  </p>

                  {/* Toggle button only on mobile */}
                  <div className="md:hidden mb-4 text-center md:text-left">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="inline-block py-2 px-6 text-sm text-white bg-yellow-800 rounded-md hover:bg-yellow-600 transition"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  </div>

                  {/* <div className="">
                    <Link
                      href="/services"
                      className="inline-block py-2 px-6 text-sm text-white bg-yellow-800 rounded-md hover:bg-blue-700 transition"
                    >
                      View More
                    </Link>
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
