export default function JobCard({ job }: any) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2">{job.title}</h3>

      <p className="text-gray-600 text-sm mb-4">
        📍 {job.location} • {job.experience}
      </p>

      <button
        onClick={() =>
          document
            .getElementById("apply-form")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Apply Now
      </button>
    </div>
  );
}