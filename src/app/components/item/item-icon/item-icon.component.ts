import { Component, input } from '@angular/core';
import { Item } from '../../../item/item.interface';

@Component({
	selector: 'app-item-icon',
	imports: [],
	templateUrl: './item-icon.component.html',
	styleUrl: './item-icon.component.scss',
})
export class ItemIconComponent {
	readonly entity = input.required<Item>();
}
