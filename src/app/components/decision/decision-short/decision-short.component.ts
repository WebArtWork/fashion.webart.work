import { Component, input } from '@angular/core';

import { ItemDecision } from '../../../decision/decision.interface';

@Component({
	selector: 'app-decision-short',
	imports: [],
	templateUrl: './decision-short.component.html',
	styleUrl: './decision-short.component.scss',
})
export class DecisionShortComponent {
	readonly entity = input.required<ItemDecision>();
}
