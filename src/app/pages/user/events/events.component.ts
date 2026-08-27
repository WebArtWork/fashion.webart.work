import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { EventShortComponent } from '../../../components/event/event-short/event-short.component';
import { Event } from '../../../event/event.interface';
import { events } from '../../../event/event.data';

@Component({
	imports: [EventShortComponent, FormsModule, CardModule, InputTextModule],
	templateUrl: './events.component.html',
	styleUrl: './events.component.scss',
})
export class EventsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Event[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return events;

		return events.filter((item) => {
			const haystack = [item.title, item.city, item.country, item.venue]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Event): void {
		this._router.navigate(['/event', item._id]);
	}
}
