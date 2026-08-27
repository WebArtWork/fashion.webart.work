import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ItemDecision } from '../../../decision/decision.interface';

@Component({
	selector: 'app-decision-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './decision-short.component.html',
	styleUrl: './decision-short.component.scss',
})
export class DecisionShortComponent {
	@Input() entity!: ItemDecision;
}
