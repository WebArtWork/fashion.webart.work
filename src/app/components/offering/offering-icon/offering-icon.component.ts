import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Offering } from '../../../offering/offering.interface';

@Component({
	selector: 'app-offering-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './offering-icon.component.html',
	styleUrl: './offering-icon.component.scss',
})
export class OfferingIconComponent {
	@Input() entity!: Offering;
}
