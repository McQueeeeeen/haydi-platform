import cors from '@fastify/cors';
import Fastify from 'fastify';
import { env } from './config/env.js';
import { registerErrorHandler } from './middleware/error-handler.js';
import { registerCatalogRoutes } from './modules/catalog/catalog.routes.js';
import { registerHealthRoutes } from './modules/health/health.routes.js';
import { registerLeadsRoutes } from './modules/leads/leads.routes.js';
import { registerOffersRoutes } from './modules/offers/offers.routes.js';
import { registerSyncRoutes } from './modules/sync/sync.routes.js';

export async function buildApp() {
  const app = Fastify({
    logger: {
      level: env.NODE_ENV === 'development' ? 'info' : 'warn',
    },
  });

  await app.register(cors, {
    origin: env.CORS_ORIGIN,
  });

  registerErrorHandler(app);

  await app.register(registerHealthRoutes);
  await app.register(registerLeadsRoutes);
  await app.register(registerCatalogRoutes);
  await app.register(registerOffersRoutes);
  await app.register(registerSyncRoutes);

  return app;
}
