import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DecisionViewComponent } from '../../../components/decision/decision-view/decision-view.component';
import { ItemDecision } from '../../../decision/decision.interface';
import { decisions } from '../../../decision/decision.data';
import { Item } from '../../../item/item.interface';
import { items } from '../../../item/item.data';
import { User } from '../../../user/user.interface';
import { users } from '../../../user/user.data';
import { Event } from '../../../event/event.interface';
import { events } from '../../../event/event.data';

const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _userById = new Map<string, User>(users.map((u) => [u._id, u]));
const _eventById = new Map<string, Event>(events.map((e) => [e._id, e]));

@Component({
	imports: [DecisionViewComponent, CardModule],
	templateUrl: './decisions.component.html',
	styleUrl: './decisions.component.scss',
})
export class DecisionsComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<ItemDecision | undefined>(() =>
		decisions.find((item) => item._id === this._id()),
	);

	readonly item = computed<Item | null>(() => {
		const decision = this.entity();
		return decision ? (_itemById.get(decision.itemId) ?? null) : null;
	});

	readonly event = computed<Event | null>(() => {
		const decision = this.entity();
		return decision?.eventId ? (_eventById.get(decision.eventId) ?? null) : null;
	});

	readonly author = computed<User | null>(() => {
		const decision = this.entity();
		return decision ? (_userById.get(decision.authorUserId) ?? null) : null;
	});

	readonly involvedUsers = computed<User[]>(() => {
		const decision = this.entity();
		if (!decision) return [];
		return decision.involvedUserIds
			.map((id) => _userById.get(id))
			.filter((u): u is User => !!u);
	});

}
