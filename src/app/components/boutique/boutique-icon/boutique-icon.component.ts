import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Boutique } from '../../../boutique/boutique.interface';

@Component({
	selector: 'app-boutique-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './boutique-icon.component.html',
	styleUrl: './boutique-icon.component.scss',
})
export class BoutiqueIconComponent {
	@Input() entity!: Boutique;
}
