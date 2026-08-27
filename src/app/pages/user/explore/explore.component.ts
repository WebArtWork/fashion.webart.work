import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { OfferingRelationType, OfferingShortComponent } from '../../../components/offering/offering-short/offering-short.component';
import { Offering, OfferingStatus, OfferingType } from '../../../offering/offering.interface';
import { offerings } from '../../../offering/offering.data';
import { OfferingRelations, itemForOffering, relationsForOffering } from '../../../offering/offering-relations';
import { ItemType } from '../../../item/item.interface';

interface SelectOption<T> {
	label: string;
	value: T;
}

const ITEM_TYPE_LABELS: Record<ItemType, string> = {
	dress: 'Сукня',
	gown: 'Вечірня сукня',
	suit: 'Костюм',
	bag: 'Сумка',
	shoes: 'Взуття',
	accessory: 'Аксесуар',
	jewelry: 'Прикраси',
	outerwear: 'Верхній одяг',
	'suiting-set': 'Комплект',
	headpiece: 'Головний убір',
	lingerie: 'Білизна',
	menswear: 'Чоловічий одяг',
	'made-to-measure': 'Пошив на замовлення',
};

const OFFERING_TYPE_LABELS: Record<OfferingType, string> = {
	sale: 'Продаж',
	rental: 'Оренда',
	'try-on-appointment': 'Запис на примірку',
	'custom-order': 'Індивідуальне замовлення',
	consignment: 'Комісія',
	other: 'Інше',
};

const OFFERING_STATUS_LABELS: Record<OfferingStatus, string> = {
	draft: 'Чернетка',
	'pending-review': 'На розгляді',
	active: 'Активне',
	reserved: 'Заброньоване',
	rented: 'Здано в оренду',
	sold: 'Продано',
	expired: 'Термін минув',
	paused: 'Призупинено',
	rejected: 'Відхилено',
	archived: 'Архівоване',
};

@Component({
	imports: [
		OfferingShortComponent,
		FormsModule,
		RouterLink,
		ButtonModule,
		InputTextModule,
		SelectModule,
		MultiSelectModule,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
})
export class ExploreComponent {
	private readonly _router = inject(Router);

	readonly itemTypeOptions: SelectOption<ItemType>[] = Object.entries(
		ITEM_TYPE_LABELS,
	).map(([value, label]) => ({ value: value as ItemType, label }));

	readonly offeringTypeOptions: SelectOption<OfferingType>[] = Object.entries(
		OFFERING_TYPE_LABELS,
	).map(([value, label]) => ({ value: value as OfferingType, label }));

	readonly offeringStatusOptions: SelectOption<OfferingStatus>[] = Object.entries(
		OFFERING_STATUS_LABELS,
	).map(([value, label]) => ({ value: value as OfferingStatus, label }));

	readonly searchTerm = signal('');
	readonly selectedItemTypes = signal<ItemType[]>([]);
	readonly selectedOfferingType = signal<OfferingType | null>(null);
	readonly selectedStatus = signal<OfferingStatus | null>(null);

	readonly results = computed<{ offering: Offering; relations: OfferingRelations }[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const types = this.selectedItemTypes();
		const offeringType = this.selectedOfferingType();
		const status = this.selectedStatus();

		return offerings
			.filter((offering) => {
				const item = itemForOffering(offering);

				if (term) {
					const haystack = [
						offering.title,
						offering.publicLocation,
						item?.city,
						item?.address,
					]
						.filter(Boolean)
						.join(' ')
						.toLowerCase();
					if (!haystack.includes(term)) {
						return false;
					}
				}

				if (types.length && (!item || !types.includes(item.type))) {
					return false;
				}

				if (offeringType && offering.offeringType !== offeringType) {
					return false;
				}

				if (status && offering.status !== status) {
					return false;
				}

				return true;
			})
			.map((offering) => ({ offering, relations: relationsForOffering(offering) }));
	});

	view(item: Offering): void {
		this._router.navigate(['/offering', item._id]);
	}

	viewRelation(relation: { type: OfferingRelationType; id: string }): void {
		this._router.navigate(['/', relation.type, relation.id]);
	}
}
