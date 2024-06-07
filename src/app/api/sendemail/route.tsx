import { error } from "console";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer'

export async function POST(req: Request) {
  try {
    const {fullname, subject, message, email, emailService } = await req.json();

    if (emailService === "gmail") {
      const transporter = nodemailer.createTransport({
        service: emailService,
        host: process.env.NEXT_PUBLIC_SEND_EMAIL_SMTP,
        port: 587,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_SEND_EMAIL_USR,
          pass: process.env.NEXT_PUBLIC_SEND_EMAIL_PWD,
        },
      });
      

      const mailOption: Mail.Options  = {
        from: process.env.NEXT_PUBLIC_SEND_EMAIL_USR,
        to: process.env.NEXT_PUBLIC_SEND_EMAIL_TO,
        subject: subject,
        html: message,
        // text: message,
      };

      await transporter.sendMail(mailOption);

      return NextResponse.json(
        { message: "Email Sent Successfully" },
        { status: 200 }
      );
    }

    // Send with aws
    if (emailService === "aws") {
      // Create Email Transporter
      const transporter = nodemailer.createTransport({
        // service: "gmail",
        host: process.env.AWS_SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.AWS_SMTP_USERNAME,
          pass: process.env.AWS_SMTP_PASSWORD,
        },
      });

      const mailOption = {
        from: process.env.AWS_EMAIL_USER,
        to: email,
        subject: subject,
        html: message,
      };

      await transporter.sendMail(mailOption);

      return NextResponse.json(
        { message: "Email Sent Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("ERR: ", error)
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}