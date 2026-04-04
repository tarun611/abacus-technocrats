"use client";

import { useState } from "react";

export default function ApplyForm() {
  const [fileName, setFileName] = useState("");

  return (
    <div id="apply-form" className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Apply Now
      </h2>

      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Position Applied For"
          className="border p-3 rounded"
          required
        />

        {/* Resume Upload */}
        <div className="border p-3 rounded bg-white">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setFileName(e.target.files?.[0]?.name || "")
            }
          />

          {fileName && (
            <p className="text-sm text-gray-500 mt-2">
              Selected: {fileName}
            </p>
          )}
        </div>

        <textarea
          placeholder="Message (Optional)"
          className="border p-3 rounded h-32"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}