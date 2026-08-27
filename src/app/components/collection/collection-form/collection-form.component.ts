import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Collection } from '../../../collection/collection.interface';

const STATUS_OPTIONS: { value: string; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-production', label: 'У виробництві' },
	{ value: 'released', label: 'Випущено' },
	{ value: 'archived', label: 'Архівовано' },
];

@Component({
	selector: 'app-collection-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputNumberModule, InputTextModule, SelectModule, TextareaModule, TranslateDirective],
	templateUrl: './collection-form.component.html',
	styleUrl: './collection-form.component.scss',
})
export class CollectionFormComponent {
	@Input() entity?: Collection;

	readonly form: FormGroup;
	readonly statusOptions = STATUS_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			status: ['planned', Validators.required],
			productionProgressPercent: [0, [Validators.min(0), Validators.max(100)]],
			coverImage: [''],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
