import type { CreateLeadInput } from './leads.schemas.js';

export async function createLead(input: CreateLeadInput) {
  // TODO: Add a persistence adapter here when Supabase/PostgreSQL or another backend storage is introduced.
  return {
    success: true,
    leadId: `mock_${Date.now().toString(36)}`,
    status: 'received',
    leadType: input.leadType,
  };
}
