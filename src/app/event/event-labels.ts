import { EventStatus, EventType } from './event.interface';

/**
 * Ukrainian labels for event enums, shared between the event form
 * and the event detail view so both stay in sync.
 */
export const EVENT_TYPE_OPTIONS: { value: EventType; label: string }[] = [
	{ value: 'wedding', label: 'Весілля' },
	{ value: 'gala', label: 'Гала-вечір' },
	{ value: 'photoshoot', label: 'Фотозйомка' },
	{ value: 'red-carpet', label: 'Червона доріжка' },
	{ value: 'corporate-event', label: 'Корпоративна подія' },
	{ value: 'runway-show', label: 'Показ мод' },
	{ value: 'date', label: 'Побачення' },
	{ value: 'other', label: 'Інше' },
];

export const EVENT_STATUS_OPTIONS: { value: EventStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'confirmed', label: 'Підтверджено' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const EVENT_TYPE_LABELS: Record<EventType, string> = Object.fromEntries(
	EVENT_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<EventType, string>;

export const EVENT_STATUS_LABELS: Record<EventStatus, string> = Object.fromEntries(
	EVENT_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<EventStatus, string>;
