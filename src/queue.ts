import { Queue } from "bullmq";
import { redis } from "./redis.js";
import { logger } from "./logger.js";
import { getTemplate } from "./template/index.js";

export interface EmailJobData {
  template: keyof typeof getTemplate;
  to: string;
  subject: string;
  payload: Record<string, string>;
  text?: string;
}

export const emailQueue = new Queue<EmailJobData>("email", {
  connection: redis,
});

emailQueue.on("error", (err) => {
  logger.error({ err }, "error happened at email queue");
});
