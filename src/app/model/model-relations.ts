import { Event } from '../event/event.interface';
import { events } from '../event/event.data';
import { Item } from '../item/item.interface';
import { items } from '../item/item.data';
import { Model } from './model.interface';

export interface ModelRelations {
	events: Event[];
	items: Item[];
}

const _eventById = new Map<string, Event>(events.map((e) => [e._id, e]));
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));

export function relationsForModel(model: Model): ModelRelations {
	return {
		events: model.eventIds.map((id) => _eventById.get(id)).filter((e): e is Event => !!e),
		items: model.itemIds.map((id) => _itemById.get(id)).filter((p): p is Item => !!p),
	};
}
