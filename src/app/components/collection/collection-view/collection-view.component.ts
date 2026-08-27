import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Collection, CollectionStatus } from '../../../collection/collection.interface';
import { Brand } from '../../../brand/brand.interface';
import { brands } from '../../../brand/brand.data';
import { Item } from '../../../item/item.interface';
import { items } from '../../../item/item.data';
import { Offering } from '../../../offering/offering.interface';
import { offerings } from '../../../offering/offering.data';
import { ItemDecision } from '../../../decision/decision.interface';
import { decisions } from '../../../decision/decision.data';
import { BrandIconComponent } from '../../brand/brand-icon/brand-icon.component';
import { ItemShortComponent } from '../../item/item-short/item-short.component';
import { OfferingShortComponent } from '../../offering/offering-short/offering-short.component';
import { DecisionShortComponent } from '../../decision/decision-short/decision-short.component';

const STATUS_LABELS: Record<CollectionStatus, string> = {
	planned: 'Заплановано',
	'in-production': 'У виробництві',
	released: 'Випущено',
	archived: 'Архівовано',
};

const _brandById = new Map<string, Brand>(brands.map((d) => [d._id, d]));
const _itemById = new Map<string, Item>(items.map((p) => [p._id, p]));
const _offeringById = new Map<string, Offering>(offerings.map((l) => [l._id, l]));
const _decisionById = new Map<string, ItemDecision>(decisions.map((r) => [r._id, r]));

@Component({
	selector: 'app-collection-view',
	standalone: true,
	imports: [
		CommonModule,
		BrandIconComponent,
		ItemShortComponent,
		OfferingShortComponent,
		DecisionShortComponent,
	],
	templateUrl: './collection-view.component.html',
	styleUrl: './collection-view.component.scss',
})
export class CollectionViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: Collection;

	readonly statusLabels = STATUS_LABELS;

	readonly brand = computed<Brand | null>(
		() => (this.entity.brandId ? (_brandById.get(this.entity.brandId) ?? null) : null),
	);

	readonly relatedItems = computed<Item[]>(() =>
		this.entity.itemIds.map((id) => _itemById.get(id)).filter((p): p is Item => !!p),
	);

	readonly relatedOfferings = computed<Offering[]>(() =>
		this.entity.offeringIds.map((id) => _offeringById.get(id)).filter((l): l is Offering => !!l),
	);

	readonly relatedDecisions = computed<ItemDecision[]>(() =>
		this.entity.decisionIds.map((id) => _decisionById.get(id)).filter((r): r is ItemDecision => !!r),
	);

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

	viewDecision(decision: ItemDecision): void {
		this._router.navigate(['/decisions', decision._id]);
	}
}
