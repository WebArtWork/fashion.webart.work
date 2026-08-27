import { DecisionStatus, DecisionType, DecisionVisibility } from './decision.interface';

/**
 * Ukrainian labels for item-decision enums, shared between the decision
 * form and the decision detail view so both stay in sync.
 */
export const DECISION_TYPE_OPTIONS: { value: DecisionType; label: string }[] = [
	{ value: 'tried-on', label: 'Приміряла' },
	{ value: 'reserved', label: 'Зарезервовано' },
	{ value: 'purchased', label: 'Придбано' },
	{ value: 'rented', label: 'Орендовано' },
	{ value: 'custom-order', label: 'Індивідуальне замовлення' },
	{ value: 'alteration', label: 'Підгонка за фігурою' },
	{ value: 'returned', label: 'Повернуто' },
	{ value: 'exchanged', label: 'Обміняно' },
	{ value: 'rejected', label: 'Відхилено' },
	{ value: 'styling-consultation', label: 'Консультація стиліста' },
	{ value: 'fitting', label: 'Примірка' },
	{ value: 'expense', label: 'Витрата' },
	{ value: 'damage', label: 'Пошкодження' },
	{ value: 'document', label: 'Документ' },
	{ value: 'ownership-change', label: 'Зміна власника' },
	{ value: 'valuation', label: 'Оцінка' },
	{ value: 'note', label: 'Примітка' },
];

export const DECISION_STATUS_OPTIONS: { value: DecisionStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const DECISION_VISIBILITY_OPTIONS: { value: DecisionVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-users', label: 'Доступ вибраним користувачам' },
	{ value: 'shared-with-owners-tenants', label: 'Доступ власникам і орендарям' },
	{ value: 'shared-with-stylist-boutique-contractor-manager', label: 'Доступ стилісту, бутіку, підряднику, керуючому' },
];

export const DECISION_TYPE_LABELS: Record<DecisionType, string> = Object.fromEntries(
	DECISION_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<DecisionType, string>;

export const DECISION_STATUS_LABELS: Record<DecisionStatus, string> = Object.fromEntries(
	DECISION_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<DecisionStatus, string>;

export const DECISION_VISIBILITY_LABELS: Record<DecisionVisibility, string> = Object.fromEntries(
	DECISION_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<DecisionVisibility, string>;
