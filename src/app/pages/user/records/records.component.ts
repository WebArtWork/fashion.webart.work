import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RecordViewComponent } from '../../../features/record/record-view/record-view.component';
import { ItemRecord } from '../../../features/record/record.interface';
import { records } from '../../../features/record/record.data';
import { User } from '../../../features/user/user.interface';
import { users } from '../../../features/user/user.data';
import { Item } from '../../../features/item/item.interface';
import { items } from '../../../features/item/item.data';
import { Stylist } from '../../../features/stylist/stylist.interface';
import { stylists } from '../../../features/stylist/stylist.data';
import { Boutique } from '../../../features/boutique/boutique.interface';
import { boutiques } from '../../../features/boutique/boutique.data';

const _userById = new Map<string, User>(users.map((u) => [u._id, u]));
const _itemById = new Map<string, Item>(items.map((i) => [i._id, i]));
const _stylistById = new Map<string, Stylist>(stylists.map((s) => [s._id, s]));
const _boutiqueById = new Map<string, Boutique>(boutiques.map((b) => [b._id, b]));

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RecordViewComponent, CardModule, TranslateDirective],
	templateUrl: './records.component.html',
	styleUrl: './records.component.scss',
})
export class RecordsComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<ItemRecord | undefined>(() =>
		records.find((item) => item._id === this._id()),
	);

	readonly client = computed<User | null>(() => {
		const record = this.entity();
		return record ? (_userById.get(record.clientId) ?? null) : null;
	});

	readonly item = computed<Item | null>(() => {
		const record = this.entity();
		return record ? (_itemById.get(record.itemId) ?? null) : null;
	});

	readonly stylist = computed<Stylist | null>(() => {
		const record = this.entity();
		return record?.stylistId ? (_stylistById.get(record.stylistId) ?? null) : null;
	});

	readonly boutique = computed<Boutique | null>(() => {
		const record = this.entity();
		return record?.boutiqueId ? (_boutiqueById.get(record.boutiqueId) ?? null) : null;
	});

	readonly author = computed<User | null>(() => {
		const record = this.entity();
		return record ? (_userById.get(record.authorUserId) ?? null) : null;
	});

	readonly involvedUsers = computed<User[]>(() => {
		const record = this.entity();
		if (!record) return [];
		return record.involvedUserIds
			.map((id) => _userById.get(id))
			.filter((u): u is User => !!u);
	});
}
