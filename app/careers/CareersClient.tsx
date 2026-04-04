"use client";

import { useState, useRef } from "react";

export default function CareersClient() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const formRef = useRef<HTMLFormElement>(null);

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    document
      .getElementById("apply-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Application submitted successfully!",
        });

        formRef.current?.reset(); // ✅ SAFE RESET
        setSelectedPosition("");
        setPhone("");
        setFile(null);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong",
        });
      }
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Network error",
      });
    }

    setLoading(false);

    // Auto-clear after 5 sec
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  return (
    <main>

      {/* HERO */}
      <section className="bg-gray-900 pb-20 pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Careers at Abacus Technocrats Pvt. Ltd.
          </h1>

          <p className="mt-4 max-w-3xl text-gray-300">
            Join a professional engineering and consultancy environment focused
            on technical excellence and structured delivery.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-12">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Working With Us
            </h2>
            <p className="text-gray-600">
              Abacus Technocrats Pvt. Ltd. offers opportunities for professionals
              seeking to work on infrastructure projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Current Openings
            </h2>

            <div className="grid gap-6">
              {[
                "Planning Engineer",
                "BIM / Revit Modeller",
                "Site / PMC Engineer",
                "Tendering Engineer",
              ].map((job) => (
                <div key={job} className="border p-6 rounded-lg">
                  <h3 className="font-semibold">{job}</h3>

                  <button
                    onClick={() => handleApplyClick(job)}
                    className="mt-3 text-sm text-blue-600 hover:underline"
                  >
                    Apply for this role
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="md:col-span-1">
          <div
            id="apply-form"
            className="bg-white border rounded-xl p-6 sticky top-24"
          >
            <h2 className="text-xl font-semibold mb-4">
              Apply Now
            </h2>

            {/* ✅ STATUS MESSAGE */}
            {status.message && (
              <div
                className={`mb-4 p-3 rounded text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 text-sm">

              <input
                name="name"
                placeholder="Full Name"
                className="border p-3 rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-3 rounded"
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-3 rounded"
                required
              />

              <select
                name="position"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="border p-3 rounded bg-white"
                required
              >
                <option value="">Select Position</option>

                <optgroup label="Engineering">
                  <option>Planning Engineer</option>
                  <option>BIM / Revit Modeller</option>
                  <option>Site / PMC Engineer</option>
                  <option>Tendering Engineer</option>
                </optgroup>

                <optgroup label="Drafting">
                  <option>Draftsman - Structure</option>
                  <option>Draftsman - Architecture</option>
                </optgroup>

                <option>Other</option>
              </select>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />

              <button
                type="submit"
                disabled={!phone || phone.length < 10 || !file || loading}
                className={`py-3 rounded text-white ${
                  phone && phone.length >= 10 && file && !loading
                    ? "bg-black hover:bg-gray-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

            </form>

          </div>
        </div>

      </section>
    </main>
  );
}