import nodemailer from "nodemailer";
import { logger } from "./logger.js";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

(async () => {
  try {
    await transporter.verify();
    logger.info("SMTP connected");
  } catch (err) {
    logger.error({ err }, "SMTP connection failed");
  }
})();
