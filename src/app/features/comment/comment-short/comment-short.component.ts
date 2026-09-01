import { Component, input } from '@angular/core';

import { EntityComment } from '../../../features/comment/comment.interface';

@Component({
	selector: 'app-comment-short',
	imports: [],
	templateUrl: './comment-short.component.html',
	styleUrl: './comment-short.component.scss',
})
export class CommentShortComponent {
	readonly entity = input.required<EntityComment>();
}
