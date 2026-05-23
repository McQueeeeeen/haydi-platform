import { z } from 'zod';

const optionalText = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.string().trim().optional(),
);

export const leadTypeSchema = z.enum([
  'consultation',
  'collection_presentation',
  'lighting_selection',
  'catalog_request',
  'designer_request',
]);

export const createLeadSchema = z
  .object({
    name: z.string().trim().min(1, 'Name is required.'),
    phone: optionalText,
    whatsapp: optionalText,
    leadType: leadTypeSchema,
    selectedCollection: optionalText,
    selectedRoom: optionalText,
    message: optionalText,
    source: optionalText,
  })
  .superRefine((value, context) => {
    if (!value.phone && !value.whatsapp) {
      context.addIssue({
        code: 'custom',
        path: ['phone'],
        message: 'Phone or WhatsApp is required.',
      });
    }
  });

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
export type LeadType = z.infer<typeof leadTypeSchema>;
