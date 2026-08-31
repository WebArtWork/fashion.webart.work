export interface Stylist {
	_id: string;
	userId: string;
	boutiqueId: string | null;
	displayName: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	serviceAreas: string[];
	specializations: string[];
	yearsExperience: number;
	offeringIds: string[];
	representedItemIds: string[];
	contactPhone: string;
	contactEmail: string;
	averageRating: number;
	reviewCount: number;
}
