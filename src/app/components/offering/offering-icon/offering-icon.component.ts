import { Component, input } from '@angular/core';
import { Offering } from '../../../offering/offering.interface';

@Component({
	selector: 'app-offering-icon',
	imports: [],
	templateUrl: './offering-icon.component.html',
	styleUrl: './offering-icon.component.scss',
})
export class OfferingIconComponent {
	readonly entity = input.required<Offering>();
}
