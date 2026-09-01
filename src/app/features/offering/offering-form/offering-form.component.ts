import { Component, input, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import {
	Offering,
	OfferingStatus,
	OfferingType,
} from '../../../features/offering/offering.interface';

const OFFERING_TYPE_OPTIONS: { value: OfferingType; label: string }[] = [
	{ value: 'sale', label: 'Продаж' },
	{ value: 'rental', label: 'Оренда' },
	{ value: 'try-on-appointment', label: 'Запис на примірку' },
	{ value: 'custom-order', label: 'Індивідуальне замовлення' },
	{ value: 'consignment', label: 'Комісія' },
	{ value: 'other', label: 'Інше' },
];

const OFFERING_STATUS_OPTIONS: { value: OfferingStatus; label: string }[] = [
	{ value: 'draft', label: 'Чернетка' },
	{ value: 'pending-review', label: 'На розгляді' },
	{ value: 'active', label: 'Активне' },
	{ value: 'reserved', label: 'Заброньоване' },
	{ value: 'rented', label: 'Здано в оренду' },
	{ value: 'sold', label: 'Продано' },
	{ value: 'expired', label: 'Термін минув' },
	{ value: 'paused', label: 'Призупинено' },
	{ value: 'rejected', label: 'Відхилено' },
	{ value: 'archived', label: 'Архівоване' },
];

const RENTAL_PERIOD_OPTIONS: {
	value: 'per-event' | 'weekly' | 'monthly';
	label: string;
}[] = [
	{ value: 'per-event', label: 'За подію' },
	{ value: 'weekly', label: 'Щотижнево' },
	{ value: 'monthly', label: 'Щомісячно' },
];

@Component({
	selector: 'app-offering-form',
	imports: [
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './offering-form.component.html',
	styleUrl: './offering-form.component.scss',
})
export class OfferingFormComponent {
	private readonly fb = inject(FormBuilder);

	readonly entity = input<Offering>();

	readonly form: FormGroup;
	readonly offeringTypeOptions = OFFERING_TYPE_OPTIONS;
	readonly statusOptions = OFFERING_STATUS_OPTIONS;
	readonly rentalPeriodOptions = RENTAL_PERIOD_OPTIONS;

	constructor() {
		this.form = this.fb.group({
			offeringType: ['sale', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			price: [0, [Validators.required, Validators.min(0)]],
			currency: ['USD', Validators.required],
			rentalPeriod: [null],
			publicLocation: ['', Validators.required],
			availableFrom: ['', Validators.required],
			availableTo: [null],
			status: ['draft', Validators.required],
		});
	}

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue(entity);
		}
	}
}
