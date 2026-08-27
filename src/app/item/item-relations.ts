import { Boutique } from '../boutique/boutique.interface';
import { boutiques } from '../boutique/boutique.data';
import { Stylist } from '../stylist/stylist.interface';
import { stylists } from '../stylist/stylist.data';
import { Collection } from '../collection/collection.interface';
import { collections } from '../collection/collection.data';
import { Brand } from '../brand/brand.interface';
import { brands } from '../brand/brand.data';
import { Offering } from '../offering/offering.interface';
import { offerings } from '../offering/offering.data';
import { ItemDecision } from '../decision/decision.interface';
import { decisions } from '../decision/decision.data';
import { EntityComment } from '../comment/comment.interface';
import { comments } from '../comment/comment.data';
import { Item } from './item.interface';

/**
 * A item's related entities: it carries the authoritative
 * collectionId/brandId/boutiqueId/stylistId directly, plus arrays of ids
 * pointing at its own offerings/decisions/comments — this resolves all of
 * them so the item detail page can show (and link to) its full
 * "digital passport" instead of raw ids.
 */
export interface ItemRelations {
	collection: Collection | null;
	brand: Brand | null;
	boutique: Boutique | null;
	stylist: Stylist | null;
	offerings: Offering[];
	decisions: ItemDecision[];
	comments: EntityComment[];
}

const _collectionById = new Map<string, Collection>(collections.map((c) => [c._id, c]));
const _brandById = new Map<string, Brand>(brands.map((d) => [d._id, d]));
const _boutiqueById = new Map<string, Boutique>(boutiques.map((a) => [a._id, a]));
const _stylistById = new Map<string, Stylist>(stylists.map((a) => [a._id, a]));
const _offeringById = new Map<string, Offering>(offerings.map((l) => [l._id, l]));
const _decisionById = new Map<string, ItemDecision>(decisions.map((r) => [r._id, r]));
const _commentById = new Map<string, EntityComment>(comments.map((c) => [c._id, c]));

export function relationsForItem(item: Item): ItemRelations {
	return {
		collection: item.collectionId ? (_collectionById.get(item.collectionId) ?? null) : null,
		brand: item.brandId ? (_brandById.get(item.brandId) ?? null) : null,
		boutique: item.boutiqueId ? (_boutiqueById.get(item.boutiqueId) ?? null) : null,
		stylist: item.stylistId ? (_stylistById.get(item.stylistId) ?? null) : null,
		offerings: item.offeringIds
			.map((id) => _offeringById.get(id))
			.filter((l): l is Offering => !!l),
		decisions: item.decisionIds
			.map((id) => _decisionById.get(id))
			.filter((r): r is ItemDecision => !!r),
		comments: item.commentIds
			.map((id) => _commentById.get(id))
			.filter((c): c is EntityComment => !!c),
	};
}
