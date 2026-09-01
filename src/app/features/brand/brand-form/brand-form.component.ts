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
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Brand } from '../../../features/brand/brand.interface';

@Component({
	selector: 'app-brand-form',
	imports: [
		ReactiveFormsModule,
		ButtonModule,
		InputNumberModule,
		InputTextModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './brand-form.component.html',
	styleUrl: './brand-form.component.scss',
})
export class BrandFormComponent {
	private readonly fb = inject(FormBuilder);

	readonly entity = input<Brand>();

	readonly form: FormGroup;

	constructor() {
		this.form = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			logo: [''],
			country: ['', Validators.required],
			city: ['', Validators.required],
			foundedYear: [null, [Validators.min(1800), Validators.max(2100)]],
			isClaimed: [false],
			phone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
			email: ['', [Validators.required, Validators.email]],
			website: [''],
		});
	}

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue({ ...entity, ...entity.contact });
		}
	}
}
