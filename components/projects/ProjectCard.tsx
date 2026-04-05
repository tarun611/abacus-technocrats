"use client";

import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-500 cursor-pointer bg-white">

        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* CATEGORY BADGE */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur text-[#2B2B2B] text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200">
            {project.category}
          </span>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 text-white">
          
          <h3 className="text-lg font-semibold leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-gray-200 mt-1">
            {project.location}
          </p>

        </div>

      </div>
    </Link>
  );
}