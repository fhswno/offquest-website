// NODEMAILER
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Send a error response if the request method is not POST
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed (POST ONLY)', { status: 405 });
  }

  // Get the data from the request
  const { name, email, message } = await request.json();

  // If any of the fields are empty, return a 400 error
  if (!name || !email || !message) {
    return new Response('Missing fields. Please fill in all fields.', {
      status: 400,
    });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Create mail options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject: `(OFFQUEST) New Contact From from ${name} - ${email}`,
    text: `The following message was sent by ${name} (${email}):\n\n${message}`,
  };

  try {
    // Send the mail
    await transporter.sendMail(mailOptions);

    // Send a 200 if the mail was sent successfully
    return new Response('Mail sent successfully.', { status: 200 });
  } catch (error) {
    // Send a 500 error if the mail was not sent
    return new Response('Error sending mail.', { status: 500 });
  }
}
