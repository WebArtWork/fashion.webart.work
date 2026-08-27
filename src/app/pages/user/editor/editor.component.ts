import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { BoutiqueFormComponent } from '../../../components/boutique/boutique-form/boutique-form.component';
import { StylistFormComponent } from '../../../components/stylist/stylist-form/stylist-form.component';
import { CollectionFormComponent } from '../../../components/collection/collection-form/collection-form.component';
import { BrandFormComponent } from '../../../components/brand/brand-form/brand-form.component';
import { OfferingFormComponent } from '../../../components/offering/offering-form/offering-form.component';
import { ItemFormComponent } from '../../../components/item/item-form/item-form.component';
import { DecisionFormComponent } from '../../../components/decision/decision-form/decision-form.component';

type EntityType =
	| 'item'
	| 'offering'
	| 'decision'
	| 'collection'
	| 'brand'
	| 'boutique'
	| 'stylist';

interface EntityOption {
	label: string;
	value: EntityType;
}

@Component({
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		SelectButtonModule,
		ItemFormComponent,
		OfferingFormComponent,
		DecisionFormComponent,
		CollectionFormComponent,
		BrandFormComponent,
		BoutiqueFormComponent,
		StylistFormComponent,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
})
export class EditorComponent {
	private readonly _messageService = inject(MessageService);

	readonly options: EntityOption[] = [
		{ label: 'Об’єкт', value: 'item' },
		{ label: 'Оголошення', value: 'offering' },
		{ label: 'Запис історії', value: 'decision' },
		{ label: 'Комплекс', value: 'collection' },
		{ label: 'Забудовник', value: 'brand' },
		{ label: 'Агентство', value: 'boutique' },
		{ label: 'Агент', value: 'stylist' },
	];

	readonly selectedType = signal<EntityType>('item');

	private readonly _itemForm = viewChild(ItemFormComponent);
	private readonly _offeringForm = viewChild(OfferingFormComponent);
	private readonly _decisionForm = viewChild(DecisionFormComponent);
	private readonly _collectionForm = viewChild(CollectionFormComponent);
	private readonly _brandForm = viewChild(BrandFormComponent);
	private readonly _boutiqueForm = viewChild(BoutiqueFormComponent);
	private readonly _stylistForm = viewChild(StylistFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'item':
				return this._itemForm()?.form;
			case 'offering':
				return this._offeringForm()?.form;
			case 'decision':
				return this._decisionForm()?.form;
			case 'collection':
				return this._collectionForm()?.form;
			case 'brand':
				return this._brandForm()?.form;
			case 'boutique':
				return this._boutiqueForm()?.form;
			case 'stylist':
				return this._stylistForm()?.form;
			default:
				return undefined;
		}
	});

	wValidate(): void {
		const form = this._activeForm();
		if (!form) {
			return;
		}

		form.markAllAsTouched();
		form.updateValueAndValidity();

		if (form.valid) {
			this._messageService.add({
				severity: 'success',
				summary: 'Форма валідна',
				detail: 'Дані пройшли валідацію. Це демо-режим — нічого не збережено.',
			});
		} else {
			this._messageService.add({
				severity: 'error',
				summary: 'Форма містить помилки',
				detail: 'Перевірте позначені поля та спробуйте ще раз.',
			});
		}
	}
}
