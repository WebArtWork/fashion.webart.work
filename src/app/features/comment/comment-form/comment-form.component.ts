import { Component, inject, input } from '@angular/core';
import { OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import {
	CommentEntityType,
	EntityComment,
} from '../../../features/comment/comment.interface';

const ENTITY_TYPE_OPTIONS: { value: CommentEntityType; label: string }[] = [
	{ value: 'item', label: 'Об’єкт нерухомості' },
	{ value: 'offering', label: 'Оголошення' },
	{ value: 'collection', label: 'Комплекс' },
	{ value: 'brand', label: 'Забудовник' },
	{ value: 'boutique', label: 'Агентство' },
	{ value: 'stylist', label: 'Агент' },
	{ value: 'user', label: 'Користувач' },
];

@Component({
	selector: 'app-comment-form',
	imports: [
		ReactiveFormsModule,
		SelectModule,
		InputNumberModule,
		TextareaModule,
		ButtonModule,
		TranslateDirective,
	],
	templateUrl: './comment-form.component.html',
	styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
	readonly entity = input<EntityComment>();

	readonly form: FormGroup;
	readonly entityTypeOptions = ENTITY_TYPE_OPTIONS;

	private readonly fb = inject(FormBuilder);

	constructor() {
		this.form = this.fb.group({
			entityType: ['item', Validators.required],
			rating: [null, [Validators.min(1), Validators.max(5)]],
			text: ['', [Validators.required, Validators.maxLength(2000)]],
		});
	}

	ngOnInit(): void {
		if (this.entity()) {
			this.form.patchValue(this.entity()!);
		}
	}
}
