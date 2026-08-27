import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Stylist } from '../../../stylist/stylist.interface';

@Component({
	selector: 'app-stylist-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './stylist-short.component.html',
	styleUrl: './stylist-short.component.scss',
})
export class StylistShortComponent {
	@Input() entity!: Stylist;
}
