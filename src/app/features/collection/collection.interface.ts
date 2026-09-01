export type CollectionStatus =
	'planned' | 'in-production' | 'released' | 'archived';

export interface CollectionLookbookEntry {
	name: string;
	pieceCount: number;
}

export interface Collection {
	_id: string;
	name: string;
	description: string;
	brandId: string;
	country: string;
	city: string;
	address: string;
	coordinates: { lat: number; lng: number };
	status: CollectionStatus;
	productionProgressPercent: number;
	lookbook: CollectionLookbookEntry[];
	productionPartners: string[];
	itemIds: string[];
	offeringIds: string[];
	decisionIds: string[];
	coverImage: string;
}
