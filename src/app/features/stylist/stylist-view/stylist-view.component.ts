import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Stylist } from '../../../features/stylist/stylist.interface';
import { Boutique } from '../../../features/boutique/boutique.interface';
import { boutiques } from '../../../features/boutique/boutique.data';
import { Item } from '../../../features/item/item.interface';
import { items } from '../../../features/item/item.data';
import { Offering } from '../../../features/offering/offering.interface';
import { offerings } from '../../../features/offering/offering.data';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { OfferingShortComponent } from '../../offering/offering-short/offering-short.component';

const _boutiqueById = new Map<string, Boutique>(
	boutiques.map((a) => [a._id, a]),
);
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _offeringById = new Map<string, Offering>(
	offerings.map((l) => [l._id, l]),
);

@Component({
	selector: 'app-stylist-view',
	imports: [
		BoutiqueIconComponent,
		ItemShortComponent,
		OfferingShortComponent,
	],
	templateUrl: './stylist-view.component.html',
	styleUrl: './stylist-view.component.scss',
})
export class StylistViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Stylist>();

	readonly boutique = computed<Boutique | null>(() => {
		const entity = this.entity();
		return entity.boutiqueId
			? (_boutiqueById.get(entity.boutiqueId) ?? null)
			: null;
	});

	readonly relatedItems = computed<Item[]>(() =>
		this.entity()
			.representedItemIds.map((id) => _itemById.get(id))
			.filter((p): p is Item => !!p),
	);

	readonly relatedOfferings = computed<Offering[]>(() =>
		this.entity()
			.offeringIds.map((id) => _offeringById.get(id))
			.filter((l): l is Offering => !!l),
	);

	viewBoutique(): void {
		const boutique = this.boutique();
		if (boutique) {
			this._router.navigate(['/boutique', boutique._id]);
		}
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}

	viewOffering(offering: Offering): void {
		this._router.navigate(['/offering', offering._id]);
	}
}
