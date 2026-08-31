import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../../../features/brand/brand.interface';
import { Collection } from '../../../features/collection/collection.interface';
import { collections } from '../../../features/collection/collection.data';
import { Item } from '../../../features/item/item.interface';
import { items } from '../../../features/item/item.data';
import { Offering } from '../../../features/offering/offering.interface';
import { offerings } from '../../../features/offering/offering.data';
import { CollectionShortComponent } from '../../collection/collection-short/collection-short.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { OfferingShortComponent } from '../../offering/offering-short/offering-short.component';

const _collectionById = new Map<string, Collection>(
	collections.map((c) => [c._id, c]),
);
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _offeringById = new Map<string, Offering>(
	offerings.map((l) => [l._id, l]),
);

@Component({
	selector: 'app-brand-view',
	imports: [
		CollectionShortComponent,
		ItemShortComponent,
		OfferingShortComponent,
	],
	templateUrl: './brand-view.component.html',
	styleUrl: './brand-view.component.scss',
})
export class BrandViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Brand>();

	readonly relatedCollections = computed<Collection[]>(() =>
		this.entity()
			.collectionIds.map((id) => _collectionById.get(id))
			.filter((c): c is Collection => !!c),
	);

	readonly relatedItems = computed<Item[]>(() =>
		this.entity()
			.itemIds.map((id) => _itemById.get(id))
			.filter((p): p is Item => !!p),
	);

	readonly relatedOfferings = computed<Offering[]>(() =>
		this.entity()
			.offeringIds.map((id) => _offeringById.get(id))
			.filter((l): l is Offering => !!l),
	);

	viewCollection(collection: Collection): void {
		this._router.navigate(['/collection', collection._id]);
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}

	viewOffering(offering: Offering): void {
		this._router.navigate(['/offering', offering._id]);
	}
}
