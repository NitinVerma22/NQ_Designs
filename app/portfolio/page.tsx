// app/portfolio/page.tsx

import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { allProjects } from "@/constants/projectsData";
import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "All Projects - Your Company Name",
  description: "View our full portfolio of architecture, interior, and construction projects.",
};

export default function Portfolio() {
  return (
    <main className=" px-4 sm:px-8 md:px-16 py-12 w-full max-w-screen-xl mx-auto">
      <section className="space-y-6 text-center">
        <motion.h1
          {...fadeIn({ direction: "up", delay: 0.2 })}
          className="text-4xl sm:text-5xl font-bold"
        >
          Our Complete Portfolio
        </motion.h1>
        <motion.p
          {...fadeIn({ direction: "up", delay: 0.4 })}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground"
        >
          Explore our full collection of projects across residential, commercial, and custom categories.
        </motion.p>
      </section>

      <motion.section
        {...fadeIn({ direction: "up", delay: 0.6 })}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {allProjects.map((project) => (
          <motion.div
            key={project.slug}
            className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.type} – {project.location}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      <motion.section {...fadeIn({ direction: "up", delay: 0.8 })} className="text-center mt-12">
        <Link href="/contact">
          <Button className="text-lg px-8 py-4">Start Your Project</Button>
        </Link>
      </motion.section>
    </main>
  );
}
