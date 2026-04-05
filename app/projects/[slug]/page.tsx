"use client";

import { useState, use } from "react";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ FIX: unwrap params using React.use()
  const { slug } = use(params);

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const [activeImage, setActiveImage] = useState(
    project.images?.[0] || project.image
  );

  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            {project.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {project.category} • {project.location}
          </p>

        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <img
            src={activeImage}
            alt={project.title}
            className="w-full h-[420px] object-cover rounded-2xl shadow-md"
          />

          {project.images && (
            <div className="mt-6 grid grid-cols-3 md:grid-cols-5 gap-4">

              {project.images.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 transition ${
                    activeImage === img
                      ? "border-[#C5A46D]"
                      : "border-transparent hover:border-gray-300"
                  }`}
                />
              ))}

            </div>
          )}

        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-[#2B2B2B]">
            Project Overview
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {project.description || "Project details will be updated soon."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="bg-[#F8F5F0] px-4 py-2 rounded-full text-sm text-gray-600">
              {project.client}
            </span>

            <span className="bg-[#F8F5F0] px-4 py-2 rounded-full text-sm text-gray-600">
              {project.category}
            </span>

            <span className="bg-[#F8F5F0] px-4 py-2 rounded-full text-sm text-gray-600">
              {project.location}
            </span>

          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.service?.map((s: string, i: number) => (
              <span
                key={i}
                className="bg-[#C5A46D]/10 text-[#C5A46D] px-3 py-1 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}