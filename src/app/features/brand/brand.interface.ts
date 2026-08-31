export interface BrandContact {
	phone: string;
	email: string;
	website: string;
}

export interface Brand {
	_id: string;
	name: string;
	description: string;
	logo: string;
	country: string;
	city: string;
	foundedYear: number;
	isClaimed: boolean;
	collectionIds: string[];
	itemIds: string[];
	offeringIds: string[];
	contact: BrandContact;
}
