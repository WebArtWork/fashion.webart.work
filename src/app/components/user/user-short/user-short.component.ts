import { Component, input } from '@angular/core';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-short',
	imports: [],
	templateUrl: './user-short.component.html',
	styleUrl: './user-short.component.scss',
})
export class UserShortComponent {
	readonly entity = input.required<User>();
}
