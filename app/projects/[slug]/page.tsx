import { projects } from "@/lib/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ FIX: Await params (IMPORTANT)
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="pt-24 text-center">
        <h1 className="text-red-500 text-xl">Project not found</h1>
        <p className="text-gray-500 mt-2">Slug received: {slug}</p>
      </main>
    );
  }

  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-300">
          {project.category} | {project.location}
        </p>
      </section>

      {/* IMAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            Project Overview
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {project.description}
          </p>

        </div>
      </section>

    </main>
  );
}