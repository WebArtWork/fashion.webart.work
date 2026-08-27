import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { ItemShortComponent } from '../../../components/item/item-short/item-short.component';
import { Item } from '../../../item/item.interface';
import { items } from '../../../item/item.data';

@Component({
	imports: [ItemShortComponent, FormsModule, RouterLink, ButtonModule, InputTextModule],
	templateUrl: './items.component.html',
	styleUrl: './items.component.scss',
})
export class ItemsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Item[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return items;

		return items.filter((item) => {
			const haystack = [item.address, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}
}
