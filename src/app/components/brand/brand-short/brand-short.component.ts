import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Brand } from '../../../brand/brand.interface';

@Component({
	selector: 'app-brand-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './brand-short.component.html',
	styleUrl: './brand-short.component.scss',
})
export class BrandShortComponent {
	@Input() entity!: Brand;
}
