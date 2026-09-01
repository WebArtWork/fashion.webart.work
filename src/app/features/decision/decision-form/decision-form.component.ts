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
import { ItemDecision } from '../../../features/decision/decision.interface';
import {
	DECISION_STATUS_OPTIONS,
	DECISION_TYPE_OPTIONS,
	DECISION_VISIBILITY_OPTIONS,
} from '../../../features/decision/decision-labels';

@Component({
	selector: 'app-decision-form',
	imports: [
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './decision-form.component.html',
	styleUrl: './decision-form.component.scss',
})
export class DecisionFormComponent {
	private readonly fb = inject(FormBuilder);

	readonly entity = input<ItemDecision>();

	readonly form: FormGroup;
	readonly decisionTypeOptions = DECISION_TYPE_OPTIONS;
	readonly statusOptions = DECISION_STATUS_OPTIONS;
	readonly visibilityOptions = DECISION_VISIBILITY_OPTIONS;

	constructor() {
		this.form = this.fb.group({
			decisionType: ['maintenance', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			eventDate: ['', Validators.required],
			serviceProvider: [''],
			cost: [null],
			currency: [null],
			quantity: [null],
			units: [''],
			status: ['planned', Validators.required],
			locationInsideItem: [''],
			visibility: ['private', Validators.required],
		});
	}

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue(entity);
		}
	}
}
