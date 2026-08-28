import { Component, input } from '@angular/core';

import { Brand } from '../../../brand/brand.interface';

@Component({
	selector: 'app-brand-icon',
	imports: [],
	templateUrl: './brand-icon.component.html',
	styleUrl: './brand-icon.component.scss',
})
export class BrandIconComponent {
	readonly entity = input.required<Brand>();
}
