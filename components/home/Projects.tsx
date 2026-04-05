"use client";

import { useState } from "react";

const categories = [
  "All",
  "Master Planning",
  "Health Care",
  "Institutional",
  "Residential",
  "Infrastructure",
  "Commercial",
  "Tourist",
];

const projects = [
  {
    title: "Commercial Complex",
    location: "Ahmedabad",
    category: "Commercial",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Residential Township",
    location: "Gujarat",
    category: "Residential",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Hospital Project",
    location: "India",
    category: "Health Care",
    image: "/images/projects/project3.jpg",
  },
  {
    title: "University Campus",
    location: "India",
    category: "Institutional",
    image: "/images/projects/project1.jpg",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-text">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-500">
            Delivering excellence across diverse sectors and project scales.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition duration-300"
            >
              
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                
                <div className="text-center text-white px-4">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {project.location}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}