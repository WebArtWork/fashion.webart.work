import { Component, input } from '@angular/core';

import { Item } from '../../../features/item/item.interface';

const DEFAULT_PHOTO = '/item-default.svg';

@Component({
	selector: 'app-item-short',
	imports: [],
	templateUrl: './item-short.component.html',
	styleUrl: './item-short.component.scss',
})
export class ItemShortComponent {
	readonly entity = input.required<Item>();

	readonly defaultPhoto = DEFAULT_PHOTO;

	get photo(): string {
		return this.entity().photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
