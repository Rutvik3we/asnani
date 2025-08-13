import nodemailer from "nodemailer";
import { type InsertContactSubmission } from "@shared/schema";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port) {
    throw new Error("SMTP_HOST and SMTP_PORT must be set");
  }

  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });

  return transporter;
}

export async function sendContactEmail(submission: InsertContactSubmission) {
  const ownerEmail = process.env.OWNER_EMAIL;
  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || ownerEmail;

  if (!ownerEmail) {
    throw new Error("OWNER_EMAIL must be set");
  }

  const transporter = createTransporter();

  const subject = `New Contact Form Submission - ${submission.firstName} ${submission.lastName}`;

  const text = `New contact form submission\n\n` +
    `Name: ${submission.firstName} ${submission.lastName}\n` +
    `Email: ${submission.email}\n` +
    `Phone: ${submission.phone}\n` +
    `Industry: ${submission.industry}\n` +
    `Message:\n${submission.message}\n`;

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Phone:</strong> ${submission.phone}</p>
    <p><strong>Industry:</strong> ${submission.industry}</p>
    <p><strong>Message:</strong></p>
    <p>${submission.message.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const info = await transporter.sendMail({
      to: ownerEmail,
      from: fromEmail || ownerEmail,
      replyTo: submission.email,
      subject,
      text,
      html,
    });
    console.log("Contact email sent", { messageId: info.messageId });
  } catch (err: any) {
    console.error("Failed to send contact email", { error: err?.message });
    throw err;
  }
} 