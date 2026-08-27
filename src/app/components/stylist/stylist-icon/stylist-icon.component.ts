import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Stylist } from '../../../stylist/stylist.interface';

@Component({
	selector: 'app-stylist-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './stylist-icon.component.html',
	styleUrl: './stylist-icon.component.scss',
})
export class StylistIconComponent {
	@Input() entity!: Stylist;
}
