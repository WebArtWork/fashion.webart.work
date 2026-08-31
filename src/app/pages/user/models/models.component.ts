import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { ModelShortComponent } from '../../../features/model/model-short/model-short.component';
import { Model } from '../../../features/model/model.interface';
import { models } from '../../../features/model/model.data';

@Component({
	imports: [ModelShortComponent, FormsModule, CardModule, InputTextModule],
	templateUrl: './models.component.html',
	styleUrl: './models.component.scss',
})
export class ModelsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Model[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return models;

		return models.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Model): void {
		this._router.navigate(['/model', item._id]);
	}
}
