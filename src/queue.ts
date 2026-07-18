import { Queue } from "bullmq";
import { redis } from "./redis.js";
import { logger } from "./logger.js";

export const emailQueue = new Queue("email", {
  connection: redis,
});

emailQueue.on("error", (err) => {
  logger.error({ err }, "error happened at email queue");
});
