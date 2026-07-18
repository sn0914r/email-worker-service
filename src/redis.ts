import { Redis } from "ioredis";
import { logger } from "./logger.js";

export const redis = new Redis(
  process.env.REDIS_URI || "redis://127.0.0.1:6379",
  {
    maxRetriesPerRequest: null,
  },
);

redis.on("connect", () => {
  logger.info("Redis is connected");
});

redis.on("error", (err) => {
  logger.error({ err }, "Redis is failed to connect");
});
