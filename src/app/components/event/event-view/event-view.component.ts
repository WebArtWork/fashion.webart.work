import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../event/event.interface';
import {
	EVENT_STATUS_LABELS,
	EVENT_TYPE_LABELS,
} from '../../../event/event-labels';
import { Item } from '../../../item/item.interface';
import { Model } from '../../../model/model.interface';
import { ItemDecision } from '../../../decision/decision.interface';
import { User } from '../../../user/user.interface';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { ModelShortComponent } from '../../model/model-short/model-short.component';
import { DecisionShortComponent } from '../../decision/decision-short/decision-short.component';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';

@Component({
	selector: 'app-event-view',
	imports: [
		ItemShortComponent,
		ModelShortComponent,
		DecisionShortComponent,
		UserIconComponent,
	],
	templateUrl: './event-view.component.html',
	styleUrl: './event-view.component.scss',
})
export class EventViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Event>();
	readonly client = input<User | null>();
	readonly items = input<Item[]>([]);
	readonly models = input<Model[]>([]);
	readonly decisions = input<ItemDecision[]>([]);

	readonly typeLabels = EVENT_TYPE_LABELS;
	readonly statusLabels = EVENT_STATUS_LABELS;

	viewClient(): void {
		const client = this.client();
		if (client) this._router.navigate(['/client', client._id]);
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}

	viewDecision(decision: ItemDecision): void {
		this._router.navigate(['/decisions', decision._id]);
	}
}
