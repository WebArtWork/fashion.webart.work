import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../features/user/user.interface';
import { Stylist } from '../../../features/stylist/stylist.interface';
import { stylists } from '../../../features/stylist/stylist.data';
import { Boutique } from '../../../features/boutique/boutique.interface';
import { boutiques } from '../../../features/boutique/boutique.data';
import { Brand } from '../../../features/brand/brand.interface';
import { brands } from '../../../features/brand/brand.data';
import { Item } from '../../../features/item/item.interface';
import { items } from '../../../features/item/item.data';
import { Offering } from '../../../features/offering/offering.interface';
import { offerings } from '../../../features/offering/offering.data';
import { StylistIconComponent } from '../../stylist/stylist-icon/stylist-icon.component';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { OfferingShortComponent } from '../../offering/offering-short/offering-short.component';

const _stylistById = new Map<string, Stylist>(stylists.map((a) => [a._id, a]));
const _boutiqueById = new Map<string, Boutique>(
	boutiques.map((a) => [a._id, a]),
);
const _brandById = new Map<string, Brand>(brands.map((d) => [d._id, d]));
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _offeringById = new Map<string, Offering>(
	offerings.map((l) => [l._id, l]),
);

@Component({
	selector: 'app-user-view',
	imports: [
		StylistIconComponent,
		BoutiqueIconComponent,
		BrandIconComponent,
		ItemShortComponent,
		OfferingShortComponent,
	],
	templateUrl: './user-view.component.html',
	styleUrl: './user-view.component.scss',
})
export class UserViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<User>();

	readonly stylist = computed<Stylist | null>(() => {
		const entity = this.entity();
		return entity.stylistId
			? (_stylistById.get(entity.stylistId) ?? null)
			: null;
	});

	readonly boutique = computed<Boutique | null>(() => {
		const entity = this.entity();
		return entity.boutiqueId
			? (_boutiqueById.get(entity.boutiqueId) ?? null)
			: null;
	});

	readonly brand = computed<Brand | null>(() => {
		const entity = this.entity();
		return entity.brandId ? (_brandById.get(entity.brandId) ?? null) : null;
	});

	readonly ownedItems = computed<Item[]>(() =>
		this.entity()
			.ownedItemIds.map((id) => _itemById.get(id))
			.filter((p): p is Item => !!p),
	);

	readonly relatedOfferings = computed<Offering[]>(() =>
		this.entity()
			.offeringIds.map((id) => _offeringById.get(id))
			.filter((l): l is Offering => !!l),
	);

	viewStylist(): void {
		const stylist = this.stylist();
		if (stylist) {
			this._router.navigate(['/stylist', stylist._id]);
		}
	}

	viewBoutique(): void {
		const boutique = this.boutique();
		if (boutique) {
			this._router.navigate(['/boutique', boutique._id]);
		}
	}

	viewBrand(): void {
		const brand = this.brand();
		if (brand) {
			this._router.navigate(['/brand', brand._id]);
		}
	}

	viewItem(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}

	viewOffering(offering: Offering): void {
		this._router.navigate(['/offering', offering._id]);
	}
}
