import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Projects
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Delivering diverse projects across institutional, infrastructure,
          commercial, and industrial sectors.
        </p>
      </section>

      {/* GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

        </div>
      </section>

    </main>
  );
}