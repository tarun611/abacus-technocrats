import { jobs } from "../data/jobs";

export default function JobList() {
  return (
    <div className="grid gap-6">
      {jobs.map((job, index) => (
        <div key={index} className="border p-6 rounded-lg">
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.experience}</p>
          <p className="text-sm mt-2 text-gray-600">
            {job.description}
          </p>
        </div>
      ))}
    </div>
  );
}