import { Component, input } from '@angular/core';

import { Stylist } from '../../../features/stylist/stylist.interface';

@Component({
	selector: 'app-stylist-icon',
	imports: [],
	templateUrl: './stylist-icon.component.html',
	styleUrl: './stylist-icon.component.scss',
})
export class StylistIconComponent {
	readonly entity = input.required<Stylist>();
}
