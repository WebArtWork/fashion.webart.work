import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { OfferingViewComponent } from '../../../features/offering/offering-view/offering-view.component';
import { Offering } from '../../../features/offering/offering.interface';
import { offerings } from '../../../features/offering/offering.data';
import {
	OfferingRelations,
	relationsForOffering,
} from '../../../features/offering/offering-relations';

@Component({
	imports: [OfferingViewComponent, CardModule],
	templateUrl: './offering.component.html',
	styleUrl: './offering.component.scss',
})
export class OfferingComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Offering | undefined>(() =>
		offerings.find((item) => item._id === this._id()),
	);

	readonly relations = computed<OfferingRelations | null>(() => {
		const offering = this.entity();
		return offering ? relationsForOffering(offering) : null;
	});
}
