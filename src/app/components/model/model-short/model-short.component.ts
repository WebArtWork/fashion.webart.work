import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Model } from '../../../model/model.interface';

@Component({
	selector: 'app-model-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './model-short.component.html',
	styleUrl: './model-short.component.scss',
})
export class ModelShortComponent {
	@Input() entity!: Model;
}
