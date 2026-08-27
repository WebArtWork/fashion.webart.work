import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ItemViewComponent } from '../../../components/item/item-view/item-view.component';
import { Item } from '../../../item/item.interface';
import { items } from '../../../item/item.data';
import { ItemRelations, relationsForItem } from '../../../item/item-relations';

@Component({
	imports: [ItemViewComponent, CardModule],
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss',
})
export class ItemComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Item | undefined>(() =>
		items.find((item) => item._id === this._id()),
	);

	readonly relations = computed<ItemRelations | null>(() => {
		const item = this.entity();
		return item ? relationsForItem(item) : null;
	});

}
