import { User } from '../user/user.interface';
import { users } from '../user/user.data';
import { Item } from '../item/item.interface';
import { items } from '../item/item.data';
import { Model } from '../model/model.interface';
import { models } from '../model/model.data';
import { ItemDecision } from '../decision/decision.interface';
import { decisions } from '../decision/decision.data';
import { Event } from './event.interface';

/**
 * An event's related entities: the client, the models booked for it, the
 * items chosen for it, and the client decisions recorded against it.
 */
export interface EventRelations {
	client: User | null;
	items: Item[];
	models: Model[];
	decisions: ItemDecision[];
}

const _userById = new Map<string, User>(users.map((u) => [u._id, u]));
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _modelById = new Map<string, Model>(models.map((m) => [m._id, m]));
const _decisionById = new Map<string, ItemDecision>(decisions.map((d) => [d._id, d]));

export function relationsForEvent(event: Event): EventRelations {
	return {
		client: _userById.get(event.clientId) ?? null,
		items: event.itemIds.map((id) => _itemById.get(id)).filter((p): p is Item => !!p),
		models: event.modelIds.map((id) => _modelById.get(id)).filter((m): m is Model => !!m),
		decisions: event.decisionIds
			.map((id) => _decisionById.get(id))
			.filter((d): d is ItemDecision => !!d),
	};
}
