import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type");

    // ✅ CHECK ENV VARIABLES
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      return Response.json(
        { success: false, error: "Email configuration missing" },
        { status: 500 }
      );
    }

    // ✅ CREATE TRANSPORTER (COMMON)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================================================
    // ✅ CASE 1: CONTACT FORM (JSON)
    // =========================================================
    if (contentType?.includes("application/json")) {
      const body = await req.json();

      const { name, email, phone, message } = body;

      if (!name || !email || !phone || !message) {
        return Response.json(
          { success: false, error: "All fields are required" },
          { status: 400 }
        );
      }

      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: "New Contact Inquiry",
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      return Response.json({ success: true });
    }

    // =========================================================
    // ✅ CASE 2: CAREERS FORM (FORMDATA + FILE)
    // =========================================================
    const formData = await req.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const position = formData.get("position")?.toString();
    const resume = formData.get("resume") as File | null;

    if (!name || !email || !phone || !position || !resume) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: `"Careers Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Job Application - ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return Response.json({ success: true });

  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error?.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}