import type { FastifyInstance } from 'fastify';
import { productSlugParamsSchema } from './catalog.schemas.js';
import { getBrands, getCategories, getProductBySlug, getProducts } from './catalog.service.js';

export async function registerCatalogRoutes(app: FastifyInstance) {
  app.get('/api/catalog/categories', async () => getCategories());
  app.get('/api/catalog/brands', async () => getBrands());
  app.get('/api/catalog/products', async () => getProducts());

  app.get('/api/catalog/products/:slug', async (request) => {
    const params = productSlugParamsSchema.parse(request.params);
    return getProductBySlug(params.slug);
  });
}
