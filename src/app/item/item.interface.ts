export type ItemType =
	| 'dress'
	| 'gown'
	| 'suit'
	| 'bag'
	| 'shoes'
	| 'accessory'
	| 'jewelry'
	| 'outerwear'
	| 'suiting-set'
	| 'headpiece'
	| 'lingerie'
	| 'menswear'
	| 'made-to-measure';

export type ItemStatus =
	| 'active'
	| 'in-production'
	| 'in-stock'
	| 'reserved'
	| 'sold'
	| 'under-alteration'
	| 'damaged'
	| 'archived'
	| 'unverified';

export type ItemVisibility =
	| 'public'
	| 'offering-only'
	| 'limited-preview'
	| 'private'
	| 'shared'
	| 'managed-by-representatives';

export interface ItemCharacteristics {
	sizeCategory: string;
	sizeEu: number | null;
	color: string;
	material: string;
	season: string | null;
	fit: string | null;
	careInstructions: string | null;
}

export interface ItemAccess {
	userId: string;
	role: 'owner' | 'client' | 'stylist' | 'manager' | 'viewer';
}

export interface Item {
	_id: string;
	type: ItemType;
	country: string;
	city: string;
	address: string;
	coordinates: { lat: number; lng: number };
	boutiqueLocationInfo: string;
	sku: string;
	collectionId: string | null;
	brandId: string | null;
	boutiqueId: string | null;
	stylistId: string | null;
	characteristics: ItemCharacteristics;
	status: ItemStatus;
	visibility: ItemVisibility;
	access: ItemAccess[];
	offeringIds: string[];
	decisionIds: string[];
	commentIds: string[];
	photos: string[];
}
