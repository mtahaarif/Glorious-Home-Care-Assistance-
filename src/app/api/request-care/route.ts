import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, location, careType, message } = body;

    // Basic server-side validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required fields." },
        { status: 400 }
      );
    }

    // Send the email using Resend
// Send the email using Resend
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Use onboarding@resend.dev for testing until you verify glorioushomecareca.com in Resend
      from: process.env.RESEND_FROM_EMAIL || "Glorious Home Care <onboarding@resend.dev>",
      to: ["admin@glorioushomecareca.com"], // Routing directly to your admin team
      
      // FIX: Changed from reply_to to replyTo
      replyTo: email, 
      
      subject: `New Care Request from ${name} - ${location || "Website"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1b1b1b;">
          <h2 style="color: #c72439;">New In-Home Care Request</h2>
          <p>A new care request has been submitted through the Glorious Home Care website.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td><td style="border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td><td style="border-bottom: 1px solid #f0f0f0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td style="border-bottom: 1px solid #f0f0f0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Location:</strong></td><td style="border-bottom: 1px solid #f0f0f0;">${location || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Care Type:</strong></td><td>${careType || "Not specified"}</td></tr>
          </table>
          <h3 style="margin-top: 20px; color: #1b1b1b;">Situation Description:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; line-height: 1.6;">${message || "No message provided."}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try calling us directly." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Care request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error processing care request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try calling us directly." },
      { status: 500 }
    );
  }
}