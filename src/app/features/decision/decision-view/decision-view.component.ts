import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDecision } from '../../../features/decision/decision.interface';
import {
	DECISION_STATUS_LABELS,
	DECISION_TYPE_LABELS,
	DECISION_VISIBILITY_LABELS,
} from '../../../features/decision/decision-labels';
import { Item } from '../../../features/item/item.interface';
import { User } from '../../../features/user/user.interface';
import { Event } from '../../../features/event/event.interface';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';
import { EventShortComponent } from '../../event/event-short/event-short.component';

@Component({
	selector: 'app-decision-view',
	imports: [ItemShortComponent, UserIconComponent, EventShortComponent],
	templateUrl: './decision-view.component.html',
	styleUrl: './decision-view.component.scss',
})
export class DecisionViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<ItemDecision>();
	readonly item = input<Item | null>();
	readonly event = input<Event | null>();
	readonly author = input<User | null>();
	readonly involvedUsers = input<User[]>([]);

	readonly typeLabels = DECISION_TYPE_LABELS;
	readonly statusLabels = DECISION_STATUS_LABELS;
	readonly visibilityLabels = DECISION_VISIBILITY_LABELS;

	viewItem(): void {
		const item = this.item();
		if (item) this._router.navigate(['/item', item._id]);
	}

	viewEvent(): void {
		const event = this.event();
		if (event) this._router.navigate(['/event', event._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
