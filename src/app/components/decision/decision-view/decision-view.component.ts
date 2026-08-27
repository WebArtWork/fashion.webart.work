import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDecision } from '../../../decision/decision.interface';
import {
	DECISION_STATUS_LABELS,
	DECISION_TYPE_LABELS,
	DECISION_VISIBILITY_LABELS,
} from '../../../decision/decision-labels';
import { Item } from '../../../item/item.interface';
import { User } from '../../../user/user.interface';
import { Event } from '../../../event/event.interface';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';
import { EventShortComponent } from '../../event/event-short/event-short.component';

@Component({
	selector: 'app-decision-view',
	standalone: true,
	imports: [CommonModule, ItemShortComponent, UserIconComponent, EventShortComponent],
	templateUrl: './decision-view.component.html',
	styleUrl: './decision-view.component.scss',
})
export class DecisionViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: ItemDecision;
	@Input() item?: Item | null;
	@Input() event?: Event | null;
	@Input() author?: User | null;
	@Input() involvedUsers: User[] = [];

	readonly typeLabels = DECISION_TYPE_LABELS;
	readonly statusLabels = DECISION_STATUS_LABELS;
	readonly visibilityLabels = DECISION_VISIBILITY_LABELS;

	viewItem(): void {
		if (this.item) this._router.navigate(['/item', this.item._id]);
	}

	viewEvent(): void {
		if (this.event) this._router.navigate(['/event', this.event._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
