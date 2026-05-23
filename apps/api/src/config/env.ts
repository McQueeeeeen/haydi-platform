import { z } from 'zod';

const envSchema = z.object({
  API_PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  API_HOST: z.string().min(1).default('0.0.0.0'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PUBLIC_SITE_URL: z.string().url().default('http://localhost:5173'),
  CORS_ORIGIN: z.string().min(1).default('http://localhost:5173'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(`Invalid API environment: ${parsedEnv.error.message}`);
}

export const env = parsedEnv.data;
export type ApiEnv = typeof env;
