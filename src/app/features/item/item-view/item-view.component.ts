import { Component, OnChanges, SimpleChanges, input } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from '../../../features/boutique/boutique.interface';
import { Stylist } from '../../../features/stylist/stylist.interface';
import { Collection } from '../../../features/collection/collection.interface';
import { Brand } from '../../../features/brand/brand.interface';
import { EntityComment } from '../../../features/comment/comment.interface';
import { Offering } from '../../../features/offering/offering.interface';
import { ItemDecision } from '../../../features/decision/decision.interface';
import { Item } from '../../../features/item/item.interface';
import {
	ITEM_STATUS_LABELS,
	ITEM_TYPE_LABELS,
	ITEM_VISIBILITY_LABELS,
} from '../../../features/item/item-labels';
import { BoutiqueIconComponent } from '../../boutique/boutique-icon/boutique-icon.component';
import { StylistIconComponent } from '../../stylist/stylist-icon/stylist-icon.component';
import { CollectionIconComponent } from '../../collection/collection-icon/collection-icon.component';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';
import { OfferingShortComponent } from '../../offering/offering-short/offering-short.component';
import { DecisionShortComponent } from '../../decision/decision-short/decision-short.component';
import { CommentShortComponent } from '../../comment/comment-short/comment-short.component';

const DEFAULT_PHOTO = '/item-default.svg';

@Component({
	selector: 'app-item-view',
	imports: [
		BoutiqueIconComponent,
		StylistIconComponent,
		CollectionIconComponent,
		BrandIconComponent,
		OfferingShortComponent,
		DecisionShortComponent,
		CommentShortComponent,
	],
	templateUrl: './item-view.component.html',
	styleUrl: './item-view.component.scss',
})
export class ItemViewComponent implements OnChanges {
	private readonly _router = inject(Router);
	private readonly _failedPhotos = new Set<string>();

	readonly entity = input.required<Item>();
	readonly collection = input<Collection | null>();
	readonly brand = input<Brand | null>();
	readonly boutique = input<Boutique | null>();
	readonly stylist = input<Stylist | null>();
	readonly offerings = input<Offering[]>([]);
	readonly decisions = input<ItemDecision[]>([]);
	readonly comments = input<EntityComment[]>([]);

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly typeLabels = ITEM_TYPE_LABELS;
	readonly statusLabels = ITEM_STATUS_LABELS;
	readonly visibilityLabels = ITEM_VISIBILITY_LABELS;

	get photos(): string[] {
		const uniquePhotos = [...new Set(this.entity().photos)];
		if (!uniquePhotos.length) return [DEFAULT_PHOTO];
		return uniquePhotos.every((photo) => this._failedPhotos.has(photo))
			? [DEFAULT_PHOTO]
			: uniquePhotos;
	}

	onPhotoError(event: Event, photo: string): void {
		this._failedPhotos.add(photo);
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['entity']) this._failedPhotos.clear();
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

	viewOffering(offering: Offering): void {
		this._router.navigate(['/offering', offering._id]);
	}

	viewDecision(decision: ItemDecision): void {
		this._router.navigate(['/decisions', decision._id]);
	}
}
