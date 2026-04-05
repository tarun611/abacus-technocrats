"use client";

import { useState } from "react";
import HexLoader from "@/components/HexLoader"; // ✅ ADD THIS

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
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

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  return (
    <>
      {/* ✅ HEX LOADER */}
      {loading && <HexLoader />}

      <main>

        {/* HERO */}
        <section className="bg-light py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-text">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Get in touch with us for planning, design, and project consultancy services.
          </p>
        </section>

        {/* CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div>
              <h2 className="text-xl font-semibold text-text">
                Office Address
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Abacus Technocrats Pvt. Ltd.<br />
                1001, Sears Tower,<br />
                Gulbai Tekra, Near Panchwati Cross Road,<br />
                Off C.G. Road,<br />
                Ahmedabad – 380006, Gujarat, India
              </p>

              <h2 className="text-xl font-semibold text-text mt-8">
                Contact Details
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                📞 +91 79 4002 0046<br />
                📞 +91 79 2642 2168<br />
                ✉️ abacus.epc@gmail.com
              </p>
            </div>

            {/* FORM */}
            <div>
              <h2 className="text-xl font-semibold text-text">
                Send a Message
              </h2>

              {/* STATUS */}
              {status.message && (
                <div
                  className={`mt-4 p-3 rounded text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition shadow-sm"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>
        </section>

        {/* MAP */}
        <section className="h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=Gulbai+Tekra+Ahmedabad&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </section>

      </main>
    </>
  );
}