import type { FastifyInstance } from 'fastify';
import { createLeadSchema } from './leads.schemas.js';
import { createLead } from './leads.service.js';

export async function registerLeadsRoutes(app: FastifyInstance) {
  app.post('/api/leads', async (request) => {
    const input = createLeadSchema.parse(request.body);
    return createLead(input);
  });
}
