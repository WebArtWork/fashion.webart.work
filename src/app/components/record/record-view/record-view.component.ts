import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemRecord } from '../../../record/record.interface';
import {
	RECORD_STATUS_LABELS,
	RECORD_TYPE_LABELS,
	RECORD_VISIBILITY_LABELS,
} from '../../../record/record-labels';
import { User } from '../../../user/user.interface';
import { Stylist } from '../../../stylist/stylist.interface';
import { Boutique } from '../../../boutique/boutique.interface';
import { Item } from '../../../item/item.interface';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';

@Component({
	selector: 'app-record-view',
	standalone: true,
	imports: [CommonModule, UserIconComponent],
	templateUrl: './record-view.component.html',
	styleUrl: './record-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordViewComponent {
	private readonly _router = inject(Router);

	readonly entity = input.required<ItemRecord>();
	readonly client = input<User | null>(null);
	readonly item = input<Item | null>(null);
	readonly stylist = input<Stylist | null>(null);
	readonly boutique = input<Boutique | null>(null);
	readonly author = input<User | null>(null);
	readonly involvedUsers = input<User[]>([]);

	readonly typeLabels = RECORD_TYPE_LABELS;
	readonly statusLabels = RECORD_STATUS_LABELS;
	readonly visibilityLabels = RECORD_VISIBILITY_LABELS;

	viewClient(): void {
		const client = this.client();
		if (client) this._router.navigate(['/client', client._id]);
	}

	viewItem(): void {
		const item = this.item();
		if (item) this._router.navigate(['/item', item._id]);
	}

	viewStylist(): void {
		const stylist = this.stylist();
		if (stylist) this._router.navigate(['/stylist', stylist._id]);
	}

	viewBoutique(): void {
		const boutique = this.boutique();
		if (boutique) this._router.navigate(['/boutique', boutique._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
