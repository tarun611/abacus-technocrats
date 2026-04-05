"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const categories = [
  "All",
  "Institutional",
  "Oil & Gas",
  "PMC Projects",
  "Residential",
  "Educational",
  "Sports",
  "Hospitality",
  "Retail",
  "Special Projects",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
          Our Projects
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our diverse portfolio across multiple sectors and engineering disciplines.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? "bg-[#C5A46D] text-white border-[#C5A46D]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-[#F8F5F0]"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pt-6 pb-12 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found in this category.
          </p>
        )}
      </section>

    </main>
  );
}