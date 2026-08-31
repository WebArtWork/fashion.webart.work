import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ItemRecord } from '../../../record/record.interface';

@Component({
	selector: 'app-record-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './record-short.component.html',
	styleUrl: './record-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordShortComponent {
	readonly entity = input.required<ItemRecord>();
}
