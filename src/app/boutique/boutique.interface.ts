export interface BoutiqueContact {
	phone: string;
	email: string;
	website: string;
	address: string;
}

export interface Boutique {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	stylistIds: string[];
	offeringIds: string[];
	representedItemIds: string[];
	contact: BoutiqueContact;
	averageRating: number;
	reviewCount: number;
}
