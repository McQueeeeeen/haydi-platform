import type { FastifyInstance } from 'fastify';
import { addOfferItemSchema, createOfferSchema, offerIdParamsSchema, shareOfferSchema } from './offers.schemas.js';
import { addOfferItem, createOffer, shareOffer } from './offers.service.js';

export async function registerOffersRoutes(app: FastifyInstance) {
  app.post('/api/offers', async (request) => {
    const input = createOfferSchema.parse(request.body);
    return createOffer(input);
  });

  app.post('/api/offers/:offerId/items', async (request) => {
    const params = offerIdParamsSchema.parse(request.params);
    const input = addOfferItemSchema.parse(request.body);
    return addOfferItem(params.offerId, input);
  });

  app.post('/api/offers/:offerId/share', async (request) => {
    const params = offerIdParamsSchema.parse(request.params);
    const input = shareOfferSchema.parse(request.body);
    return shareOffer(params.offerId, input);
  });
}
