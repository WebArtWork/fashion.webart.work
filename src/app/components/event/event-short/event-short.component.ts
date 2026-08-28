import { Component, input } from '@angular/core';

import { Event } from '../../../event/event.interface';

@Component({
	selector: 'app-event-short',
	imports: [],
	templateUrl: './event-short.component.html',
	styleUrl: './event-short.component.scss',
})
export class EventShortComponent {
	readonly entity = input.required<Event>();
}
