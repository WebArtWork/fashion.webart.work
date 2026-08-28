import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from '../../../boutique/boutique.interface';
import { Stylist } from '../../../stylist/stylist.interface';
import { Collection } from '../../../collection/collection.interface';
import { Brand } from '../../../brand/brand.interface';
import { EntityComment } from '../../../comment/comment.interface';
import { Offering } from '../../../offering/offering.interface';
import { ItemDecision } from '../../../decision/decision.interface';
import { Item } from '../../../item/item.interface';
import {
	ITEM_STATUS_LABELS,
	ITEM_TYPE_LABELS,
	ITEM_VISIBILITY_LABELS,
} from '../../../item/item-labels';
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
	standalone: true,
	imports: [
		CommonModule,
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

	@Input() entity!: Item;
	@Input() collection?: Collection | null;
	@Input() brand?: Brand | null;
	@Input() boutique?: Boutique | null;
	@Input() stylist?: Stylist | null;
	@Input() offerings: Offering[] = [];
	@Input() decisions: ItemDecision[] = [];
	@Input() comments: EntityComment[] = [];

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly typeLabels = ITEM_TYPE_LABELS;
	readonly statusLabels = ITEM_STATUS_LABELS;
	readonly visibilityLabels = ITEM_VISIBILITY_LABELS;

	get photos(): string[] {
		const uniquePhotos = [...new Set(this.entity.photos)];
		if (!uniquePhotos.length) return [DEFAULT_PHOTO];
		return uniquePhotos.every((photo) => this._failedPhotos.has(photo)) ? [DEFAULT_PHOTO] : uniquePhotos;
	}

	onPhotoError(event: Event, photo: string): void {
		this._failedPhotos.add(photo);
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['entity']) this._failedPhotos.clear();
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

	viewOffering(offering: Offering): void {
		this._router.navigate(['/offering', offering._id]);
	}

	viewDecision(decision: ItemDecision): void {
		this._router.navigate(['/decisions', decision._id]);
	}
}
