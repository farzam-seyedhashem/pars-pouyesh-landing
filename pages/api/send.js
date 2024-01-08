// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const resend = new Resend('re_123456789');
export default async function handler(req, res) {
  (async function() {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Hello World',
      html: '<strong>it works!</strong>'
    });

    if (error) {
      return console.log(error);
    }

    console.log(data);
  })();
}
