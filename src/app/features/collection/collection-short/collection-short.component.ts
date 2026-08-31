import { Component, input } from '@angular/core';

import { Collection } from '../../../features/collection/collection.interface';

@Component({
	selector: 'app-collection-short',
	imports: [],
	templateUrl: './collection-short.component.html',
	styleUrl: './collection-short.component.scss',
})
export class CollectionShortComponent {
	readonly entity = input.required<Collection>();
}
