"use client";

import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm mt-1">{project.category}</p>
          <p className="text-sm">{project.location}</p>
        </div>

      </div>
    </Link>
  );
}