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
import { Collection } from '../../../features/collection/collection.interface';

const STATUS_OPTIONS: { value: string; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-production', label: 'У виробництві' },
	{ value: 'released', label: 'Випущено' },
	{ value: 'archived', label: 'Архівовано' },
];

@Component({
	selector: 'app-collection-form',
	imports: [
		ReactiveFormsModule,
		ButtonModule,
		InputNumberModule,
		InputTextModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './collection-form.component.html',
	styleUrl: './collection-form.component.scss',
})
export class CollectionFormComponent {
	private readonly fb = inject(FormBuilder);

	readonly entity = input<Collection>();

	readonly form: FormGroup;
	readonly statusOptions = STATUS_OPTIONS;

	constructor() {
		this.form = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			status: ['planned', Validators.required],
			productionProgressPercent: [
				0,
				[Validators.min(0), Validators.max(100)],
			],
			coverImage: [''],
		});
	}

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue(entity);
		}
	}
}
