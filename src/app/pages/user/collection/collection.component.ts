import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { CollectionViewComponent } from '../../../features/collection/collection-view/collection-view.component';
import { Collection } from '../../../features/collection/collection.interface';
import { collections } from '../../../features/collection/collection.data';

@Component({
	imports: [CollectionViewComponent, CardModule],
	templateUrl: './collection.component.html',
	styleUrl: './collection.component.scss',
})
export class CollectionComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Collection | undefined>(() =>
		collections.find((item) => item._id === this._id()),
	);
}
