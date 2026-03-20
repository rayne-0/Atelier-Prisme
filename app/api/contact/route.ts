import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Provide a placeholder key if undefined so the app doesn't crash on build
// The user will need to add RESEND_API_KEY to their .env.local
const resendApiKey = process.env.RESEND_API_KEY || 're_placeholder';
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, brand, budget, projectType, message } = body;

    // Default sending domain from Resend for testing purposes
    // User will need to verify their own domain for production
    const { data, error } = await resend.emails.send({
      from: 'Atelier Prisme Website <onboarding@resend.dev>',
      to: ['partnerships@atelierprisme.com'],
      subject: `New Inquiry: ${brand} - ${projectType}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Inquiry Received</h2>
          <hr style="border: 1px solid #eee; margin-bottom: 20px;" />
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Brand/Agency:</strong> ${brand}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          
          <h3 style="margin-top: 30px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Project Details</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
       console.error("Resend Error:", error);
       // Return a mocked success response if the API key is missing (so the UI works visually for the demo)
       if (resendApiKey === 're_placeholder') {
          return NextResponse.json({ success: true, mocked: true });
       }
       return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Route Error:", error);
    // Return a mocked success response if the API key is missing
    if (resendApiKey === 're_placeholder') {
        return NextResponse.json({ success: true, mocked: true });
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
