import { Component, input } from '@angular/core';

import { Collection } from '../../../features/collection/collection.interface';

@Component({
	selector: 'app-collection-icon',
	imports: [],
	templateUrl: './collection-icon.component.html',
	styleUrl: './collection-icon.component.scss',
})
export class CollectionIconComponent {
	readonly entity = input.required<Collection>();
}
