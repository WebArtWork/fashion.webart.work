export type RecordType =
	| 'purchase'
	| 'wear-event'
	| 'rental'
	| 'loan'
	| 'return'
	| 'alteration'
	| 'styling-session'
	| 'cleaning'
	| 'repair'
	| 'damage'
	| 'photoshoot'
	| 'runway-appearance'
	| 'gifting'
	| 'resale'
	| 'note';

export type RecordStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export type RecordVisibility =
	| 'public'
	| 'public-summary-private-details'
	| 'private'
	| 'shared-with-selected-users'
	| 'shared-with-client'
	| 'shared-with-stylist-boutique-brand';

export interface RecordAttachment {
	type: 'before-photo' | 'after-photo' | 'styling-photo' | 'photo' | 'video' | 'receipt' | 'document';
	url: string;
}

export interface ItemRecord {
	_id: string;
	clientId: string;
	itemId: string;
	recordType: RecordType;
	title: string;
	description: string;
	eventDate: string;
	creationDate: string;
	authorUserId: string;
	involvedUserIds: string[];
	stylistId: string | null;
	boutiqueId: string | null;
	cost: number | null;
	currency: string | null;
	quantity: number | null;
	units: string | null;
	status: RecordStatus;
	attachments: RecordAttachment[];
	occasion: string | null;
	visibility: RecordVisibility;
	verified: boolean;
}
