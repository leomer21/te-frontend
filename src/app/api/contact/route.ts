import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  // Optional honeypot for bots (should stay empty)
  website?: string;
};

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.website) {
    // Honeypot triggered; pretend success.
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const company = (payload.company ?? "").trim();
  const subject = (payload.subject ?? "Website contact").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }

  const host = requiredEnv("TE_SMTP_HOST");
  const port = Number(requiredEnv("TE_SMTP_PORT"));
  const user = requiredEnv("TE_SMTP_USER");
  const pass = requiredEnv("TE_SMTP_PASS");
  const to = process.env.TE_CONTACT_TO ?? "contact@trustengineers.space";
  const from = process.env.TE_EMAIL_FROM ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    `New website contact submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Subject: ${subject || "-"}`,
    ``,
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `[TrustEngineers] ${subject}`,
      text,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

