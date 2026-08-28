import { Component, input, output } from '@angular/core';
import { Offering } from '../../../offering/offering.interface';
import { Boutique } from '../../../boutique/boutique.interface';
import { Stylist } from '../../../stylist/stylist.interface';
import { Collection } from '../../../collection/collection.interface';
import { Brand } from '../../../brand/brand.interface';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { StylistIconComponent } from '../../stylist/stylist-icon/stylist-icon.component';
import { CollectionIconComponent } from '../../collection/collection-icon/collection-icon.component';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';

export type OfferingRelationType =
	'stylist' | 'boutique' | 'brand' | 'collection';

@Component({
	selector: 'app-offering-short',
	imports: [
		BoutiqueIconComponent,
		StylistIconComponent,
		CollectionIconComponent,
		BrandIconComponent,
	],
	templateUrl: './offering-short.component.html',
	styleUrl: './offering-short.component.scss',
})
export class OfferingShortComponent {
	readonly entity = input.required<Offering>();
	readonly boutique = input<Boutique | null>();
	readonly brand = input<Brand | null>();
	readonly stylist = input<Stylist | null>();
	readonly collection = input<Collection | null>();

	/** Emitted instead of navigating directly, so the host page can stop the card's own click. */
	readonly relationClick = output<{
		type: OfferingRelationType;
		id: string;
	}>();

	onRelationClick(
		event: Event,
		type: OfferingRelationType,
		id: string,
	): void {
		event.stopPropagation();
		this.relationClick.emit({ type, id });
	}
}
