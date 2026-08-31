import { Component, input } from '@angular/core';
import { ItemRequest } from '../../../features/request/request.interface';

@Component({
	selector: 'app-request-view',
	imports: [],
	templateUrl: './request-view.component.html',
	styleUrl: './request-view.component.scss',
})
export class RequestViewComponent {
	readonly entity = input.required<ItemRequest>();
}
