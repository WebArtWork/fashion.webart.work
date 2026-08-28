export type RequestTransactionType = 'buy' | 'rent' | 'custom-order' | 'find';

export type RequestVisibility =
	| 'public'
	| 'private'
	| 'shared-with-selected-stylists'
	| 'shared-with-boutiques';

export interface RequestMapArea {
	lat: number;
	lng: number;
	radiusKm: number;
}

export interface ItemRequest {
	_id: string;
	userId: string;
	transactionType: RequestTransactionType;
	itemTypes: string[];
	country: string;
	region: string;
	city: string;
	mapArea: RequestMapArea;
	minPrice: number;
	maxPrice: number;
	currency: string;
	preferredSize: number;
	quantityRequired: number;
	conditionRequirements: string;
	stylePreferences: string;
	requiredFeatures: string[];
	preferredMoveDate: string;
	contactOptions: string[];
	expirationDate: string;
	visibility: RequestVisibility;
}
