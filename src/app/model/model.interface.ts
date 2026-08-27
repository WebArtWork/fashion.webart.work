export interface ModelMeasurements {
	heightCm: number;
	bust: number | null;
	waist: number | null;
	hips: number | null;
	shoeSize: number | null;
}

export interface Model {
	_id: string;
	userId: string | null;
	name: string;
	photo: string;
	bio: string;
	country: string;
	city: string;
	agencyId: string | null;
	measurements: ModelMeasurements;
	portfolio: string[];
	eventIds: string[];
	itemIds: string[];
	contactEmail: string;
	contactPhone: string;
}
