import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { BrandShortComponent } from '../../../features/brand/brand-short/brand-short.component';
import { Brand } from '../../../features/brand/brand.interface';
import { brands } from '../../../features/brand/brand.data';

@Component({
	imports: [BrandShortComponent, FormsModule, InputTextModule],
	templateUrl: './brands.component.html',
	styleUrl: './brands.component.scss',
})
export class BrandsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Brand[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return brands;

		return brands.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Brand): void {
		this._router.navigate(['/brand', item._id]);
	}
}
