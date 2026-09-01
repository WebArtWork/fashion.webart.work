import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { BoutiqueShortComponent } from '../../../features/boutique/boutique-short/boutique-short.component';
import { Boutique } from '../../../features/boutique/boutique.interface';
import { boutiques } from '../../../features/boutique/boutique.data';

@Component({
	imports: [BoutiqueShortComponent, FormsModule, InputTextModule],
	templateUrl: './boutiques.component.html',
	styleUrl: './boutiques.component.scss',
})
export class BoutiquesComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Boutique[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return boutiques;

		return boutiques.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Boutique): void {
		this._router.navigate(['/boutique', item._id]);
	}
}
