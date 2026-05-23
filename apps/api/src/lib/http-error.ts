export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export function httpError(statusCode: number, code: string, message: string, details?: unknown) {
  return new HttpError(statusCode, code, message, details);
}
