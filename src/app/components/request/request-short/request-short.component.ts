import { Component, input } from '@angular/core';
import { ItemRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-short',
	imports: [],
	templateUrl: './request-short.component.html',
	styleUrl: './request-short.component.scss',
})
export class RequestShortComponent {
	readonly entity = input.required<ItemRequest>();
}
