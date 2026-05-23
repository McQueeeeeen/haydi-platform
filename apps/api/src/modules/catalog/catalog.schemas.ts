import { z } from 'zod';

export const productSlugParamsSchema = z.object({
  slug: z.string().trim().min(1),
});

export type ProductSlugParams = z.infer<typeof productSlugParamsSchema>;
