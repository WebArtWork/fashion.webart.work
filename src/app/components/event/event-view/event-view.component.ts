import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../event/event.interface';
import { EVENT_STATUS_LABELS, EVENT_TYPE_LABELS } from '../../../event/event-labels';
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
	standalone: true,
	imports: [CommonModule, ItemShortComponent, ModelShortComponent, DecisionShortComponent, UserIconComponent],
	templateUrl: './event-view.component.html',
	styleUrl: './event-view.component.scss',
})
export class EventViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Event;
	@Input() client?: User | null;
	@Input() items: Item[] = [];
	@Input() models: Model[] = [];
	@Input() decisions: ItemDecision[] = [];

	readonly typeLabels = EVENT_TYPE_LABELS;
	readonly statusLabels = EVENT_STATUS_LABELS;

	viewClient(): void {
		if (this.client) this._router.navigate(['/client', this.client._id]);
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}

	viewDecision(decision: ItemDecision): void {
		this._router.navigate(['/decisions', decision._id]);
	}
}
