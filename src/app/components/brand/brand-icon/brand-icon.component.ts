import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Brand } from '../../../brand/brand.interface';

@Component({
	selector: 'app-brand-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './brand-icon.component.html',
	styleUrl: './brand-icon.component.scss',
})
export class BrandIconComponent {
	@Input() entity!: Brand;
}
