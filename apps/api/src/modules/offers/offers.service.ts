import type { AddOfferItemInput, CreateOfferInput, ShareOfferInput } from './offers.schemas.js';

export async function createOffer(input: CreateOfferInput) {
  // Future КП rules: versions, price snapshots, soft locks, audit log, and manager ownership.
  return {
    success: true,
    offerId: `mock_offer_${Date.now().toString(36)}`,
    status: 'draft',
    version: 1,
    clientName: input.clientName,
    projectName: input.projectName,
  };
}

export async function addOfferItem(offerId: string, input: AddOfferItemInput) {
  // A manager adds products to a КП, not a shopping cart. Prices must be stored as snapshots later.
  return {
    success: true,
    offerId,
    itemId: `mock_item_${Date.now().toString(36)}`,
    productSlug: input.productSlug,
    quantity: input.quantity,
    status: 'item_added',
    priceSnapshotStored: true,
  };
}

export async function shareOffer(offerId: string, input: ShareOfferInput) {
  // Future implementation should create an auditable WhatsApp share link for a specific КП version.
  return {
    success: true,
    offerId,
    status: 'share_link_created',
    whatsapp: input.whatsapp,
    whatsappShareUrl: 'mock://whatsapp-share-not-configured',
  };
}
