import { Boutique } from '../boutique/boutique.interface';
import { boutiques } from '../boutique/boutique.data';
import { Stylist } from '../stylist/stylist.interface';
import { stylists } from '../stylist/stylist.data';
import { Collection } from '../collection/collection.interface';
import { collections } from '../collection/collection.data';
import { Brand } from '../brand/brand.interface';
import { brands } from '../brand/brand.data';
import { Item } from '../item/item.interface';
import { items } from '../item/item.data';
import { Offering, OfferingStatus, OfferingType } from './offering.interface';

/**
 * Ukrainian labels for offering enums, shared across pages/components that
 * render a offering (kept in sync with the copy used on the explore page).
 */
export const OFFERING_TYPE_LABELS: Record<OfferingType, string> = {
	sale: 'Продаж',
	rental: 'Оренда',
	'try-on-appointment': 'Запис на примірку',
	'custom-order': 'Індивідуальне замовлення',
	consignment: 'Комісія',
	other: 'Інше',
};

export const OFFERING_STATUS_LABELS: Record<OfferingStatus, string> = {
	draft: 'Чернетка',
	'pending-review': 'На розгляді',
	active: 'Активне',
	reserved: 'Заброньоване',
	rented: 'Здано в оренду',
	sold: 'Продано',
	expired: 'Термін минув',
	paused: 'Призупинено',
	rejected: 'Відхилено',
	archived: 'Архівоване',
};

/**
 * A offering's related entities are resolved through its item — item
 * carries the authoritative collectionId/brandId/boutiqueId/stylistId, so every
 * offering card can show (and link to) who's actually behind it instead of
 * just the offering in isolation.
 */
export interface OfferingRelations {
	item: Item | null;
	collection: Collection | null;
	brand: Brand | null;
	boutique: Boutique | null;
	stylist: Stylist | null;
}

const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _collectionById = new Map<string, Collection>(collections.map((c) => [c._id, c]));
const _brandById = new Map<string, Brand>(brands.map((d) => [d._id, d]));
const _boutiqueById = new Map<string, Boutique>(boutiques.map((a) => [a._id, a]));
const _stylistById = new Map<string, Stylist>(stylists.map((a) => [a._id, a]));

export function itemForOffering(offering: Offering): Item | null {
	return _itemById.get(offering.itemId) ?? null;
}

export function relationsForOffering(offering: Offering): OfferingRelations {
	const item = itemForOffering(offering);

	return {
		item,
		collection: item?.collectionId ? (_collectionById.get(item.collectionId) ?? null) : null,
		brand: item?.brandId ? (_brandById.get(item.brandId) ?? null) : null,
		boutique: item?.boutiqueId ? (_boutiqueById.get(item.boutiqueId) ?? null) : null,
		stylist: item?.stylistId ? (_stylistById.get(item.stylistId) ?? null) : null,
	};
}
