"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

interface Project {
  name: string;
  type: string;
  location: string;
  images: string[]; // External URLs (e.g., Google Drive)
}

interface Props {
  projects: Project[];
}

export default function ProjectDropdown({ projects }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-center my-8">
      <button
        onClick={() => setOpen(!open)}
        className="px-6 py-3 bg-yellow-800 text-white rounded-lg hover:bg-gray-800 transition"
      >
        {open ? "Hide Our Projects" : "Show Our Projects"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-4"
              >
                <h3 className="text-xl font-semibold text-yellow-800">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Type:</strong> {project.type}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Location:</strong> {project.location}
                </p>
                <div className="flex gap-3 overflow-x-auto">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={project.name}
                      className="w-32 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
