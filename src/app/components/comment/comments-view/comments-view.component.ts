import { Component, input } from '@angular/core';
import { EntityComment } from '../../../comment/comment.interface';

@Component({
	selector: 'app-comments-view',
	imports: [],
	templateUrl: './comments-view.component.html',
	styleUrl: './comments-view.component.scss',
})
export class CommentsViewComponent {
	readonly entity = input.required<EntityComment>();
}
