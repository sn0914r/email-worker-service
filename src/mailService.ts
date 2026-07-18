import { transporter } from "./mailer.js";

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export const sendMail = async ({ to, subject, html, text }: SendMailOptions) => {
  return transporter.sendMail({
    from: `"Ekart" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    text,
  });
};
