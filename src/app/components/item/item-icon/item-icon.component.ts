import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Item } from '../../../item/item.interface';

@Component({
	selector: 'app-item-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './item-icon.component.html',
	styleUrl: './item-icon.component.scss',
})
export class ItemIconComponent {
	@Input() entity!: Item;
}
