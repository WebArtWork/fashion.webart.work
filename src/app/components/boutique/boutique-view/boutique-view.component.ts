import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from '../../../boutique/boutique.interface';
import { Stylist } from '../../../stylist/stylist.interface';
import { stylists } from '../../../stylist/stylist.data';
import { Item } from '../../../item/item.interface';
import { items } from '../../../item/item.data';
import { Offering } from '../../../offering/offering.interface';
import { offerings } from '../../../offering/offering.data';
import { StylistShortComponent } from '../../stylist/stylist-short/stylist-short.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { OfferingShortComponent } from '../../offering/offering-short/offering-short.component';

const _stylistById = new Map<string, Stylist>(stylists.map((a) => [a._id, a]));
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _offeringById = new Map<string, Offering>(offerings.map((l) => [l._id, l]));

@Component({
	selector: 'app-boutique-view',
	standalone: true,
	imports: [CommonModule, StylistShortComponent, ItemShortComponent, OfferingShortComponent],
	templateUrl: './boutique-view.component.html',
	styleUrl: './boutique-view.component.scss',
})
export class BoutiqueViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Boutique;

	readonly relatedStylists = computed<Stylist[]>(() =>
		this.entity.stylistIds.map((id) => _stylistById.get(id)).filter((a): a is Stylist => !!a),
	);

	readonly relatedItems = computed<Item[]>(() =>
		this.entity.representedItemIds
			.map((id) => _itemById.get(id))
			.filter((p): p is Item => !!p),
	);

	readonly relatedOfferings = computed<Offering[]>(() =>
		this.entity.offeringIds.map((id) => _offeringById.get(id)).filter((l): l is Offering => !!l),
	);

	viewStylist(stylist: Stylist): void {
		this._router.navigate(['/stylist', stylist._id]);
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}

	viewOffering(offering: Offering): void {
		this._router.navigate(['/offering', offering._id]);
	}
}
