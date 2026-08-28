import { Component, input } from '@angular/core';

import { Brand } from '../../../brand/brand.interface';

const DEFAULT_PHOTO = '/default-brand.png';

@Component({
	selector: 'app-brand-short',
	imports: [],
	templateUrl: './brand-short.component.html',
	styleUrl: './brand-short.component.scss',
})
export class BrandShortComponent {
	readonly entity = input.required<Brand>();

	get photo(): string {
		return this.entity().logo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
