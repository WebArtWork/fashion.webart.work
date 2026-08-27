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
import { ItemDecision } from '../../../decision/decision.interface';
import {
	DECISION_STATUS_OPTIONS,
	DECISION_TYPE_OPTIONS,
	DECISION_VISIBILITY_OPTIONS,
} from '../../../decision/decision-labels';

@Component({
	selector: 'app-decision-form',
	standalone: true,
	imports: [
		CommonModule,
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
	@Input() entity?: ItemDecision;

	readonly form: FormGroup;
	readonly decisionTypeOptions = DECISION_TYPE_OPTIONS;
	readonly statusOptions = DECISION_STATUS_OPTIONS;
	readonly visibilityOptions = DECISION_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
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
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
