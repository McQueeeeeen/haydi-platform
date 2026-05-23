import { z } from 'zod';

const optionalText = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.string().trim().optional(),
);

export const offerIdParamsSchema = z.object({
  offerId: z.string().trim().min(1),
});

export const createOfferSchema = z.object({
  clientName: optionalText,
  projectName: optionalText,
  managerId: optionalText,
  source: optionalText,
});

export const addOfferItemSchema = z.object({
  productSlug: z.string().trim().min(1),
  quantity: z.coerce.number().int().min(1).default(1),
  note: optionalText,
});

export const shareOfferSchema = z.object({
  whatsapp: optionalText,
  message: optionalText,
});

export type OfferIdParams = z.infer<typeof offerIdParamsSchema>;
export type CreateOfferInput = z.infer<typeof createOfferSchema>;
export type AddOfferItemInput = z.infer<typeof addOfferItemSchema>;
export type ShareOfferInput = z.infer<typeof shareOfferSchema>;
