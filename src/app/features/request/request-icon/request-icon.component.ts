import { Component, input } from '@angular/core';
import { ItemRequest } from '../../../features/request/request.interface';

@Component({
	selector: 'app-request-icon',
	imports: [],
	templateUrl: './request-icon.component.html',
	styleUrl: './request-icon.component.scss',
})
export class RequestIconComponent {
	readonly entity = input.required<ItemRequest>();
}
