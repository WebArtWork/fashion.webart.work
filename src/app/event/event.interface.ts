export type EventType =
	| 'wedding'
	| 'gala'
	| 'photoshoot'
	| 'red-carpet'
	| 'corporate-event'
	| 'runway-show'
	| 'date'
	| 'other';

export type EventStatus = 'planned' | 'confirmed' | 'completed' | 'cancelled';

export interface Event {
	_id: string;
	type: EventType;
	title: string;
	description: string;
	date: string;
	country: string;
	city: string;
	venue: string;
	dressCode: string | null;
	styleNotes: string | null;
	clientId: string;
	stylistId: string | null;
	modelIds: string[];
	itemIds: string[];
	decisionIds: string[];
	status: EventStatus;
	coverImage: string | null;
}
