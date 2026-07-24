import { Worker } from "bullmq";
import { redis } from "./redis.js";
import { getTemplate } from "./template/index.js";
import { sendMail } from "./mailService.js";
import { logger } from "./logger.js";
import { EmailJobData } from "./queue.js";

const worker = new Worker<EmailJobData, void, string>(
  "email",
  async (job) => {
    const targetTemplate = getTemplate[job.data.template];
    if (!targetTemplate) {
      throw new Error(`Template not found: ${job.data.template}`);
    }

    const { to, subject, payload, text } = job.data;

    await sendMail({ to, subject, html: targetTemplate(payload as any), text });
  },
  {
    connection: redis,
  },
);

worker.on("completed", (job) => {
  logger.info(`completed: ${job.id}`);
});

worker.on("failed", (job, err) => {
  logger.error({ err }, `failed: ${job?.id}`);
});
