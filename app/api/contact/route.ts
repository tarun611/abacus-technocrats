export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ✅ Lazy import (kept as it is - good for Vercel)
    const nodemailer = (await import("nodemailer")).default;

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return NextResponse.json(
        { error: "Email config missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const contentType = req.headers.get("content-type") || "";

    // ================= CONTACT =================
    if (contentType.includes("application/json")) {
      const { name, email, phone, message } = await req.json();

      // ❌ MongoDB REMOVED
      // Only send email

      await transporter.sendMail({
        from: EMAIL_USER,
        to: EMAIL_TO,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Request</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    // ================= CAREERS =================
    const formData = await req.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const position = formData.get("position")?.toString();
    const resume = formData.get("resume") as File | null;

    const buffer = resume ? Buffer.from(await resume.arrayBuffer()) : null;

    // ❌ MongoDB REMOVED
    // Only send email

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `Job Application - ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
      `,
      attachments: resume
        ? [
            {
              filename: resume.name,
              content: buffer!,
            },
          ]
        : [],
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("API ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}