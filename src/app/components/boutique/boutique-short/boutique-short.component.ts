import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Boutique } from '../../../boutique/boutique.interface';

const DEFAULT_PHOTO = '/default-boutique.png';

@Component({
	selector: 'app-boutique-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './boutique-short.component.html',
	styleUrl: './boutique-short.component.scss',
})
export class BoutiqueShortComponent {
	@Input() entity!: Boutique;

	get photo(): string {
		return this.entity.logo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
