import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { EventViewComponent } from '../../../components/event/event-view/event-view.component';
import { Event } from '../../../event/event.interface';
import { events } from '../../../event/event.data';
import { EventRelations, relationsForEvent } from '../../../event/event-relations';

@Component({
	imports: [EventViewComponent, CardModule],
	templateUrl: './event.component.html',
	styleUrl: './event.component.scss',
})
export class EventComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Event | undefined>(() =>
		events.find((event) => event._id === this._id()),
	);

	readonly relations = computed<EventRelations | null>(() => {
		const event = this.entity();
		return event ? relationsForEvent(event) : null;
	});
}
