import { Component, input } from '@angular/core';

import { Boutique } from '../../../features/boutique/boutique.interface';

@Component({
	selector: 'app-boutique-icon',
	imports: [],
	templateUrl: './boutique-icon.component.html',
	styleUrl: './boutique-icon.component.scss',
})
export class BoutiqueIconComponent {
	readonly entity = input.required<Boutique>();
}
