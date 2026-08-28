import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../../../model/model.interface';
import { Event } from '../../../event/event.interface';
import { Item } from '../../../item/item.interface';
import { EventShortComponent } from '../../event/event-short/event-short.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';

@Component({
	selector: 'app-model-view',
	imports: [EventShortComponent, ItemShortComponent],
	templateUrl: './model-view.component.html',
	styleUrl: './model-view.component.scss',
})
export class ModelViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Model>();
	readonly events = input<Event[]>([]);
	readonly items = input<Item[]>([]);

	viewEvent(event: Event): void {
		this._router.navigate(['/event', event._id]);
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}
}
