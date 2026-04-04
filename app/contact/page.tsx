"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace("your ", "")]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: "-", // optional for now
          message: formData.message + " | Subject: " + formData.subject,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error occurred. Try again.");
    }

    setLoading(false);
  };

  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Get in touch with us for planning, design, and project consultancy services.
        </p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>

            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              Office Address
            </h2>

            <p className="mt-4 text-gray-600">
              Abacus Technocrats Pvt. Ltd.<br />
              1001, Sears Tower,<br />
              Gulbai Tekra, Near Panchwati Cross Road,<br />
              Off C.G. Road,<br />
              Ahmedabad – 380006, Gujarat, India
            </p>

            <h2 className="text-2xl font-semibold text-[#0A1F44] mt-8">
              Contact Details
            </h2>

            <p className="mt-4 text-gray-600">
              📞 +91 79 4002 0046<br />
              📞 +91 79 2642 2168<br />
              ✉️ abacus.epc@gmail.com
            </p>

          </div>

          {/* RIGHT FORM */}
          <div>

            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#0A1F44] text-white px-6 py-3 rounded-md hover:bg-[#D4AF37] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-gray-600">{status}</p>
              )}

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
  );
}