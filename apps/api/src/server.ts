import { buildApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';

async function main() {
  const app = await buildApp();
  await app.listen({ host: env.API_HOST, port: env.API_PORT });
  logger.info('API server started', { host: env.API_HOST, port: env.API_PORT });
}

main().catch((error) => {
  logger.error('API server failed to start', { error });
  process.exit(1);
});
