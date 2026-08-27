export type DecisionType =
	| 'tried-on'
	| 'reserved'
	| 'purchased'
	| 'rented'
	| 'custom-order'
	| 'alteration'
	| 'returned'
	| 'exchanged'
	| 'rejected'
	| 'styling-consultation'
	| 'fitting'
	| 'expense'
	| 'damage'
	| 'document'
	| 'ownership-change'
	| 'valuation'
	| 'note';

export type DecisionStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export type DecisionVisibility =
	| 'public'
	| 'public-summary-private-details'
	| 'private'
	| 'shared-with-selected-users'
	| 'shared-with-owners-tenants'
	| 'shared-with-stylist-boutique-contractor-manager';

export interface DecisionAttachment {
	type: 'photo' | 'video' | 'invoice' | 'receipt' | 'plan' | 'diagram' | 'document';
	url: string;
}

export interface ItemDecision {
	_id: string;
	itemId: string;
	eventId: string | null;
	decisionType: DecisionType;
	title: string;
	description: string;
	eventDate: string;
	creationDate: string;
	authorUserId: string;
	involvedUserIds: string[];
	serviceProvider: string | null;
	cost: number | null;
	currency: string | null;
	quantity: number | null;
	units: string | null;
	status: DecisionStatus;
	attachments: DecisionAttachment[];
	locationInsideItem: string | null;
	visibility: DecisionVisibility;
	verified: boolean;
}
