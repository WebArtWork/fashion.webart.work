import { RecordStatus, RecordType, RecordVisibility } from './record.interface';

/**
 * Ukrainian labels for item-record enums, shared between the record
 * form and the record detail view so both stay in sync.
 */
export const RECORD_TYPE_OPTIONS: { value: RecordType; label: string }[] = [
	{ value: 'purchase', label: 'Купівля' },
	{ value: 'wear-event', label: 'Носіння' },
	{ value: 'rental', label: 'Оренда' },
	{ value: 'loan', label: 'Позика' },
	{ value: 'return', label: 'Повернення' },
	{ value: 'alteration', label: 'Підгонка' },
	{ value: 'styling-session', label: 'Стилізація' },
	{ value: 'cleaning', label: 'Чищення' },
	{ value: 'repair', label: 'Ремонт' },
	{ value: 'damage', label: 'Пошкодження' },
	{ value: 'photoshoot', label: 'Фотозйомка' },
	{ value: 'runway-appearance', label: 'Показ мод' },
	{ value: 'gifting', label: 'Подарунок' },
	{ value: 'resale', label: 'Перепродаж' },
	{ value: 'note', label: 'Примітка' },
];

export const RECORD_STATUS_OPTIONS: { value: RecordStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const RECORD_VISIBILITY_OPTIONS: { value: RecordVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-users', label: 'Доступ вибраним користувачам' },
	{ value: 'shared-with-client', label: 'Доступ клієнту' },
	{ value: 'shared-with-stylist-boutique-brand', label: 'Доступ стилісту, бутику, бренду' },
];

export const RECORD_TYPE_LABELS: Record<RecordType, string> = Object.fromEntries(
	RECORD_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordType, string>;

export const RECORD_STATUS_LABELS: Record<RecordStatus, string> = Object.fromEntries(
	RECORD_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordStatus, string>;

export const RECORD_VISIBILITY_LABELS: Record<RecordVisibility, string> = Object.fromEntries(
	RECORD_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RecordVisibility, string>;
