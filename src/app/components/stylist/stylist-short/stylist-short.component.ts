import { Component, input } from '@angular/core';

import { Stylist } from '../../../stylist/stylist.interface';

@Component({
	selector: 'app-stylist-short',
	imports: [],
	templateUrl: './stylist-short.component.html',
	styleUrl: './stylist-short.component.scss',
})
export class StylistShortComponent {
	readonly entity = input.required<Stylist>();
}
