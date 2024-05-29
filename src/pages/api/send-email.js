import { config } from "dotenv";
import nodemailer from "nodemailer";

// Load environment variables from .env file
config();

export const prerender = false;

export async function POST({ request }) {
  const data = await request.json();
  const { company, name, email, text, html } = data;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: name,
      to: process.env.EMAIL_USER,
      subject: company
        ? `${name} from ${company}`
        : `${name} sent you a message`,
      text: text,
      html: html,
    });

    return new Response(
      JSON.stringify({ message: "Email sent", messageId: info.messageId }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}