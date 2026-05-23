import type { FastifyInstance } from 'fastify';
import { ZodError } from 'zod';
import { env } from '../config/env.js';
import { HttpError } from '../lib/http-error.js';

function formatZodIssues(error: ZodError) {
  return error.issues.map((issue) => ({
    code: issue.code,
    path: issue.path.join('.'),
    message: issue.message,
  }));
}

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      reply.status(400).send({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid request payload.',
          details: formatZodIssues(error),
        },
      });
      return;
    }

    if (error instanceof HttpError) {
      reply.status(error.statusCode).send({
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      });
      return;
    }

    const message = error instanceof Error ? error.message : 'Unknown API error.';

    request.log.error({ err: error }, 'Unhandled API error');

    reply.status(500).send({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: env.NODE_ENV === 'production' ? 'Internal server error.' : message,
      },
    });
  });
}
