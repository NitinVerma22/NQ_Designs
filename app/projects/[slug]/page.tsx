// File: app/projects/[slug]/page.tsx

"use client";
import { useState } from "react";
import { allProjects } from "../../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/app/components/Footer";

const IMAGES_PER_PAGE = 6;

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  const [page, setPage] = useState(1);

  if (!project) return notFound();

  const totalPages = Math.ceil(project.images.length / IMAGES_PER_PAGE);
  const start = (page - 1) * IMAGES_PER_PAGE;
  const currentImages = project.images.slice(start, start + IMAGES_PER_PAGE);

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">{project.description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-60 rounded overflow-hidden shadow-md"
          >
            <Image
              src={img}
              alt={`${project.title} ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span className="text-sm text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
      <Footer />
    </section>
  );
}
