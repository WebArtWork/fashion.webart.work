export type OfferingType =
	| 'sale'
	| 'rental'
	| 'try-on-appointment'
	| 'custom-order'
	| 'consignment'
	| 'other';

export type OfferingStatus =
	| 'draft'
	| 'pending-review'
	| 'active'
	| 'reserved'
	| 'rented'
	| 'sold'
	| 'expired'
	| 'paused'
	| 'rejected'
	| 'archived';

export type OfferingOwnerRole =
	| 'owner'
	| 'client'
	| 'stylist'
	| 'boutique-rep'
	| 'brand-rep'
	| 'fashion-team';

export interface OfferingOwner {
	userId: string;
	role: OfferingOwnerRole;
}

export interface Offering {
	_id: string;
	itemId: string;
	offeringType: OfferingType;
	title: string;
	description: string;
	price: number;
	currency: string;
	rentalPeriod: 'per-event' | 'weekly' | 'monthly' | null;
	publicLocation: string;
	photos: string[];
	availableFrom: string;
	availableTo: string | null;
	creatorUserId: string;
	owner: OfferingOwner;
	contactOptions: string[];
	publicationDate: string;
	expirationDate: string | null;
	status: OfferingStatus;
	sourceVerified: boolean;
}
