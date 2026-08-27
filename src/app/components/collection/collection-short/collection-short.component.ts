import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Collection } from '../../../collection/collection.interface';

@Component({
	selector: 'app-collection-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './collection-short.component.html',
	styleUrl: './collection-short.component.scss',
})
export class CollectionShortComponent {
	@Input() entity!: Collection;
}
