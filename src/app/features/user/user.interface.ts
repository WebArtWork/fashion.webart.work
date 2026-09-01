export type UserRole =
	'owner' | 'client' | 'stylist' | 'boutique-rep' | 'brand-rep' | 'buyer';

export interface UserContact {
	email: string;
	phone: string;
}

export interface User {
	_id: string;
	name: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	interests: string[];
	preferredItemTypes: string[];
	roles: UserRole[];
	experienceYears: number;
	contact: UserContact;
	ownedItemIds: string[];
	offeringIds: string[];
	requestIds: string[];
	stylistId: string | null;
	boutiqueId: string | null;
	brandId: string | null;
}
