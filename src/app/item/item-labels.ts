import { ItemStatus, ItemType, ItemVisibility } from './item.interface';

/**
 * Ukrainian labels for item enums, shared between the item form
 * and the item detail view so both stay in sync.
 */
export const ITEM_TYPE_OPTIONS: { value: ItemType; label: string }[] = [
	{ value: 'dress', label: 'Сукня' },
	{ value: 'gown', label: 'Вечірня сукня' },
	{ value: 'suit', label: 'Костюм' },
	{ value: 'bag', label: 'Сумка' },
	{ value: 'shoes', label: 'Взуття' },
	{ value: 'accessory', label: 'Аксесуар' },
	{ value: 'jewelry', label: 'Прикраси' },
	{ value: 'outerwear', label: 'Верхній одяг' },
	{ value: 'suiting-set', label: 'Комплект' },
	{ value: 'headpiece', label: 'Головний убір' },
	{ value: 'lingerie', label: 'Білизна' },
	{ value: 'menswear', label: 'Чоловічий одяг' },
	{ value: 'made-to-measure', label: 'Пошив на замовлення' },
];

export const ITEM_STATUS_OPTIONS: { value: ItemStatus; label: string }[] = [
	{ value: 'active', label: 'Активний' },
	{ value: 'in-production', label: 'У виробництві' },
	{ value: 'in-stock', label: 'В наявності' },
	{ value: 'reserved', label: 'Зарезервовано' },
	{ value: 'sold', label: 'Продано' },
	{ value: 'under-alteration', label: 'На підгонці' },
	{ value: 'damaged', label: 'Пошкоджений' },
	{ value: 'archived', label: 'В архіві' },
	{ value: 'unverified', label: 'Не перевірений' },
];

export const ITEM_VISIBILITY_OPTIONS: { value: ItemVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'offering-only', label: 'Лише в оголошенні' },
	{ value: 'limited-preview', label: 'Обмежений перегляд' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared', label: 'Спільний доступ' },
	{ value: 'managed-by-representatives', label: 'Керується представниками' },
];

export const ITEM_TYPE_LABELS: Record<ItemType, string> = Object.fromEntries(
	ITEM_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<ItemType, string>;

export const ITEM_STATUS_LABELS: Record<ItemStatus, string> = Object.fromEntries(
	ITEM_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<ItemStatus, string>;

export const ITEM_VISIBILITY_LABELS: Record<ItemVisibility, string> = Object.fromEntries(
	ITEM_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<ItemVisibility, string>;
