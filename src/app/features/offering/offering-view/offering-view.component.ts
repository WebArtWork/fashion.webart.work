import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from '../../../features/boutique/boutique.interface';
import { Stylist } from '../../../features/stylist/stylist.interface';
import { Collection } from '../../../features/collection/collection.interface';
import { Brand } from '../../../features/brand/brand.interface';
import { Offering } from '../../../features/offering/offering.interface';
import {
	OFFERING_STATUS_LABELS,
	OFFERING_TYPE_LABELS,
} from '../../../features/offering/offering-relations';
import { Item } from '../../../features/item/item.interface';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { StylistIconComponent } from '../../stylist/stylist-icon/stylist-icon.component';
import { CollectionIconComponent } from '../../collection/collection-icon/collection-icon.component';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';

@Component({
	selector: 'app-offering-view',
	imports: [
		BoutiqueIconComponent,
		StylistIconComponent,
		CollectionIconComponent,
		BrandIconComponent,
		ItemShortComponent,
	],
	templateUrl: './offering-view.component.html',
	styleUrl: './offering-view.component.scss',
})
export class OfferingViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<Offering>();
	readonly item = input<Item | null>();
	readonly collection = input<Collection | null>();
	readonly brand = input<Brand | null>();
	readonly boutique = input<Boutique | null>();
	readonly stylist = input<Stylist | null>();

	readonly typeLabels = OFFERING_TYPE_LABELS;
	readonly statusLabels = OFFERING_STATUS_LABELS;

	viewItem(): void {
		const item = this.item();
		if (item) this._router.navigate(['/item', item._id]);
	}

	viewCollection(): void {
		const collection = this.collection();
		if (collection) this._router.navigate(['/collection', collection._id]);
	}

	viewBrand(): void {
		const brand = this.brand();
		if (brand) this._router.navigate(['/brand', brand._id]);
	}

	viewBoutique(): void {
		const boutique = this.boutique();
		if (boutique) this._router.navigate(['/boutique', boutique._id]);
	}

	viewStylist(): void {
		const stylist = this.stylist();
		if (stylist) this._router.navigate(['/stylist', stylist._id]);
	}
}
