import { z } from 'zod';

export const manual1cSyncSchema = z.object({
  requestedBy: z.string().trim().optional(),
});

export type Manual1cSyncInput = z.infer<typeof manual1cSyncSchema>;
