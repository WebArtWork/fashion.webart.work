import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Item } from '../../../item/item.interface';

const DEFAULT_PHOTO = '/item-default.svg';

@Component({
	selector: 'app-item-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './item-short.component.html',
	styleUrl: './item-short.component.scss',
})
export class ItemShortComponent {
	@Input() entity!: Item;

	readonly defaultPhoto = DEFAULT_PHOTO;

	get photo(): string {
		return this.entity.photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
