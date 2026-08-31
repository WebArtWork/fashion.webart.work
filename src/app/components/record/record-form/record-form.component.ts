import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ItemRecord } from '../../../record/record.interface';
import {
	RECORD_STATUS_OPTIONS,
	RECORD_TYPE_OPTIONS,
	RECORD_VISIBILITY_OPTIONS,
} from '../../../record/record-labels';

@Component({
	selector: 'app-record-form',
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
	templateUrl: './record-form.component.html',
	styleUrl: './record-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordFormComponent implements OnInit {
	readonly entity = input<ItemRecord>();

	private readonly _fb = inject(FormBuilder);

	readonly form: FormGroup = this._fb.group({
		recordType: ['note', Validators.required],
		title: ['', Validators.required],
		description: ['', Validators.required],
		eventDate: ['', Validators.required],
		cost: [null],
		currency: [null],
		quantity: [null],
		units: [''],
		status: ['planned', Validators.required],
		occasion: [''],
		visibility: ['private', Validators.required],
	});
	readonly recordTypeOptions = RECORD_TYPE_OPTIONS;
	readonly statusOptions = RECORD_STATUS_OPTIONS;
	readonly visibilityOptions = RECORD_VISIBILITY_OPTIONS;

	ngOnInit(): void {
		const entity = this.entity();
		if (entity) {
			this.form.patchValue(entity);
		}
	}
}
