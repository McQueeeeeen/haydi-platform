import type { Manual1cSyncInput } from './sync.schemas.js';

export async function runManual1cSync(_input: Manual1cSyncInput) {
  // Future 1C sync requirements: every 15 minutes, prices, stock, products, external_1c_id,
  // sync logs, retry/backoff, and partial failure safety.
  return {
    success: true,
    status: 'not_configured',
    message: '1C sync is not connected yet.',
  };
}
