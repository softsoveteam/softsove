import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const SKIP_FIELDS = new Set(["project_name", "admin_email", "form_subject"]);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(success: boolean, message: string, status = 200) {
  return NextResponse.json({ success, message }, { status });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let fields: Record<string, string> = {};

  try {
    if (contentType.includes("application/json")) {
      const body = (await request.json()) as Record<string, unknown>;
      for (const [key, value] of Object.entries(body)) {
        if (value == null) continue;
        fields[key] = String(value);
      }
    } else {
      const text = await request.text();
      fields = Object.fromEntries(new URLSearchParams(text));
    }
  } catch {
    return json(false, "Invalid request body.", 400);
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const smtpHost = process.env.SMTP_HOST;

  if (!toEmail || !smtpHost) {
    return json(
      false,
      "Email is not configured. Set CONTACT_TO_EMAIL and SMTP_HOST in your environment.",
      500,
    );
  }

  const rows: string[] = [];
  let alt = false;
  for (const [rawKey, rawValue] of Object.entries(fields)) {
    if (!rawValue || SKIP_FIELDS.has(rawKey)) continue;
    const key = rawKey.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
    const value = escapeHtml(rawValue).replace(/\n/g, "<br>");
    const bg = alt ? " background-color: #f3f3f3;" : "";
    alt = !alt;
    rows.push(
      `<tr style="${bg}"><td style="padding: 10px; border: #e9e9e9 1px solid; width: 100px; vertical-align: top;"><strong>${escapeHtml(key)}:</strong></td><td style="padding: 10px; border: #e9e9e9 1px solid;">${value}</td></tr>`,
    );
  }

  if (!rows.length) {
    return json(false, "Please fill in the form before submitting.", 400);
  }

  const senderEmail =
    fields.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
      ? fields.email
      : undefined;

  const fromName = process.env.CONTACT_FROM_NAME || "Softsove";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || toEmail;
  const subject = process.env.CONTACT_SUBJECT || "Message from Softsove";

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: senderEmail,
      subject,
      html: `<table style="width: 100%;">${rows.join("")}</table>`,
    });

    return json(true, "Thank you! Email sent successfully.");
  } catch (error) {
    console.error("Contact form error:", error);
    return json(false, "Sorry, email could not be sent.", 500);
  }
}
