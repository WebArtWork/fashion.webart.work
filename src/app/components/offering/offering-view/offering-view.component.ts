import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from '../../../boutique/boutique.interface';
import { Stylist } from '../../../stylist/stylist.interface';
import { Collection } from '../../../collection/collection.interface';
import { Brand } from '../../../brand/brand.interface';
import { Offering } from '../../../offering/offering.interface';
import { OFFERING_STATUS_LABELS, OFFERING_TYPE_LABELS } from '../../../offering/offering-relations';
import { Item } from '../../../item/item.interface';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { StylistIconComponent } from '../../stylist/stylist-icon/stylist-icon.component';
import { CollectionIconComponent } from '../../collection/collection-icon/collection-icon.component';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';

@Component({
	selector: 'app-offering-view',
	standalone: true,
	imports: [
		CommonModule,
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

	@Input() entity!: Offering;
	@Input() item?: Item | null;
	@Input() collection?: Collection | null;
	@Input() brand?: Brand | null;
	@Input() boutique?: Boutique | null;
	@Input() stylist?: Stylist | null;

	readonly typeLabels = OFFERING_TYPE_LABELS;
	readonly statusLabels = OFFERING_STATUS_LABELS;

	viewItem(): void {
		if (this.item) this._router.navigate(['/item', this.item._id]);
	}

	viewCollection(): void {
		if (this.collection) this._router.navigate(['/collection', this.collection._id]);
	}

	viewBrand(): void {
		if (this.brand) this._router.navigate(['/brand', this.brand._id]);
	}

	viewBoutique(): void {
		if (this.boutique) this._router.navigate(['/boutique', this.boutique._id]);
	}

	viewStylist(): void {
		if (this.stylist) this._router.navigate(['/stylist', this.stylist._id]);
	}
}
