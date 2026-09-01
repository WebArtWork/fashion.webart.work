import { Component, input } from '@angular/core';

import { Model } from '../../../features/model/model.interface';

@Component({
	selector: 'app-model-short',
	imports: [],
	templateUrl: './model-short.component.html',
	styleUrl: './model-short.component.scss',
})
export class ModelShortComponent {
	readonly entity = input.required<Model>();
}
