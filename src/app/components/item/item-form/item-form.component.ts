import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Item } from '../../../item/item.interface';
import {
	ITEM_STATUS_OPTIONS,
	ITEM_TYPE_OPTIONS,
	ITEM_VISIBILITY_OPTIONS,
} from '../../../item/item-labels';

@Component({
	selector: 'app-item-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './item-form.component.html',
	styleUrl: './item-form.component.scss',
})
export class ItemFormComponent {
	@Input() entity?: Item;

	readonly form: FormGroup;
	readonly typeOptions = ITEM_TYPE_OPTIONS;
	readonly statusOptions = ITEM_STATUS_OPTIONS;
	readonly visibilityOptions = ITEM_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			type: ['dress', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			boutiqueLocationInfo: [''],
			sku: [''],
			sizeCategory: ['', Validators.required],
			sizeEu: [null],
			color: [''],
			material: [''],
			season: [''],
			fit: [''],
			status: ['active', Validators.required],
			visibility: ['public', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue({
				...this.entity,
				...this.entity.characteristics,
			});
		}
	}
}
