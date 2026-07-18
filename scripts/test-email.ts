import { emailQueue } from "../src/queue.js";
import { logger } from "../src/logger.js";

async function produceTestJob() {
  try {
    logger.info("Adding a test email job to the queue...");

    const job = await emailQueue.add("send-test-email", {
      template: "test-template",
      to: "test@example.com",
      subject: "Hello from Email Worker Service",
      payload: { name: "Test User" },
      text: "This is a plain text fallback.",
    });

    logger.info(`Test job created successfully with ID: ${job.id}`);
  } catch (error) {
    logger.error({ err: error }, "Failed to create test job");
  } finally {
    process.exit(0);
  }
}

produceTestJob();
