import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Lost Cabins Website <onboarding@resend.dev>',
      to: 'rihenww@gmail.com',
      replyTo: email,
      subject: `New Inquiry from ${name} - Lost Cabins`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f6f8f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f6f8f6; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #34673f; padding: 35px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 500; letter-spacing: 1px;">Lost Cabins</h1>
                      <p style="color: #c9dfcf; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">New Inquiry Received</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 35px;">
                      <p style="color: #555555; font-size: 16px; line-height: 24px; margin: 0 0 25px 0;">You have received a new contact form submission from the website.</p>
                      
                      <!-- Details Table -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 8px; padding: 25px; margin-bottom: 35px; border: 1px solid #eeeeee;">
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <span style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Name</span><br>
                            <span style="color: #222222; font-size: 18px; font-weight: 500; display: inline-block; margin-top: 4px;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <span style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email Address</span><br>
                            <a href="mailto:${email}" style="color: #34673f; font-size: 18px; text-decoration: none; font-weight: 500; display: inline-block; margin-top: 4px;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Phone Number</span><br>
                            <span style="color: #222222; font-size: 18px; font-weight: 500; display: inline-block; margin-top: 4px;">${phone || 'Not provided'}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Section -->
                      <h3 style="color: #34673f; font-size: 14px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px;">Message Contents</h3>
                      <div style="background-color: #f4f1ea; padding: 25px; border-radius: 8px; color: #444444; font-size: 16px; line-height: 28px; white-space: pre-wrap; border-left: 4px solid #34673f; margin-top: 15px;">${message}</div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9f9f9; border-top: 1px solid #eeeeee; padding: 25px; text-align: center;">
                      <p style="color: #999999; font-size: 13px; margin: 0; line-height: 20px;">This email was automatically generated from the Lost Cabins website contact form.</p>
                      <p style="color: #999999; font-size: 13px; margin: 8px 0 0 0; line-height: 20px;">You can simply <strong>reply</strong> to this email to respond directly to ${name}.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
