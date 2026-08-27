import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Event } from '../../../event/event.interface';

@Component({
	selector: 'app-event-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './event-short.component.html',
	styleUrl: './event-short.component.scss',
})
export class EventShortComponent {
	@Input() entity!: Event;
}
