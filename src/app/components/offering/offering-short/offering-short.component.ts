import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offering } from '../../../offering/offering.interface';
import { Boutique } from '../../../boutique/boutique.interface';
import { Stylist } from '../../../stylist/stylist.interface';
import { Collection } from '../../../collection/collection.interface';
import { Brand } from '../../../brand/brand.interface';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { StylistIconComponent } from '../../stylist/stylist-icon/stylist-icon.component';
import { CollectionIconComponent } from '../../collection/collection-icon/collection-icon.component';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';

export type OfferingRelationType = 'stylist' | 'boutique' | 'brand' | 'collection';

@Component({
	selector: 'app-offering-short',
	standalone: true,
	imports: [CommonModule, BoutiqueIconComponent, StylistIconComponent, CollectionIconComponent, BrandIconComponent],
	templateUrl: './offering-short.component.html',
	styleUrl: './offering-short.component.scss',
})
export class OfferingShortComponent {
	@Input() entity!: Offering;
	@Input() boutique?: Boutique | null;
	@Input() brand?: Brand | null;
	@Input() stylist?: Stylist | null;
	@Input() collection?: Collection | null;

	/** Emitted instead of navigating directly, so the host page can stop the card's own click. */
	@Output() relationClick = new EventEmitter<{ type: OfferingRelationType; id: string }>();

	onRelationClick(event: Event, type: OfferingRelationType, id: string): void {
		event.stopPropagation();
		this.relationClick.emit({ type, id });
	}
}
