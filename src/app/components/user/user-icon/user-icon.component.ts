import { Component, input } from '@angular/core';

import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-icon',
	imports: [],
	templateUrl: './user-icon.component.html',
	styleUrl: './user-icon.component.scss',
})
export class UserIconComponent {
	readonly entity = input.required<User>();
}
