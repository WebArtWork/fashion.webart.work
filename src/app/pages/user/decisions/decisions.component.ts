import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DecisionViewComponent } from '../../../features/decision/decision-view/decision-view.component';
import { ItemDecision } from '../../../features/decision/decision.interface';
import { decisions } from '../../../features/decision/decision.data';
import { Item } from '../../../features/item/item.interface';
import { items } from '../../../features/item/item.data';
import { User } from '../../../features/user/user.interface';
import { users } from '../../../features/user/user.data';
import { Event } from '../../../features/event/event.interface';
import { events } from '../../../features/event/event.data';

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
		return decision?.eventId
			? (_eventById.get(decision.eventId) ?? null)
			: null;
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
