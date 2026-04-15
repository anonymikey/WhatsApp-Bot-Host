import "dotenv/config";
import app from "./app";
import { logger } from "./lib/logger";
import { printBanner, startTime, getUptime } from "./lib/banner";

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

app.get("/api/status", (_req, res) => {
  const mem = process.memoryUsage();
  res.json({
    status: "online",
    uptime: getUptime(),
    uptimeMs: Date.now() - startTime,
    startedAt: new Date(startTime).toISOString(),
    node: process.version,
    environment: process.env["NODE_ENV"] ?? "development",
    memory: {
      heapUsedMb: (mem.heapUsed / 1024 / 1024).toFixed(1),
      heapTotalMb: (mem.heapTotal / 1024 / 1024).toFixed(1),
      rssMb: (mem.rss / 1024 / 1024).toFixed(1),
    },
  });
});

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }

  printBanner(port);
  logger.info({ port }, "Server listening");
});
