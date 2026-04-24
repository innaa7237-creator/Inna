import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the submission (useful for debugging)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      timestamp: new Date().toISOString(),
    });

    // If Resend is configured, send the actual email
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.RESEND_TO_EMAIL || email, // Fallback to sender for testing if TO is not set
        replyTo: email,
        subject: `[Website Contact] ${subject} - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">Нове повідомлення з сайту</h2>
            <p><strong>Від кого:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
            <p><strong>Тема:</strong> ${subject}</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Повідомлення:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #999; text-align: center;">Це повідомлення надіслано з вашого офіційного сайту Inna Andrusenko</p>
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      }
    } else {
      console.warn('RESEND_API_KEY is not set. Email was not sent, only logged.');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
