import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Collection } from '../../../collection/collection.interface';

@Component({
	selector: 'app-collection-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './collection-icon.component.html',
	styleUrl: './collection-icon.component.scss',
})
export class CollectionIconComponent {
	@Input() entity!: Collection;
}
