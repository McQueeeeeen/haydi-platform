import type { FastifyInstance } from 'fastify';
import { manual1cSyncSchema } from './sync.schemas.js';
import { runManual1cSync } from './sync.service.js';

export async function registerSyncRoutes(app: FastifyInstance) {
  app.post('/api/sync/1c/manual', async (request) => {
    const input = manual1cSyncSchema.parse(request.body ?? {});
    return runManual1cSync(input);
  });
}
