import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ModelViewComponent } from '../../../components/model/model-view/model-view.component';
import { Model } from '../../../model/model.interface';
import { models } from '../../../model/model.data';
import {
	ModelRelations,
	relationsForModel,
} from '../../../model/model-relations';

@Component({
	imports: [ModelViewComponent, CardModule],
	templateUrl: './model.component.html',
	styleUrl: './model.component.scss',
})
export class ModelComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Model | undefined>(() =>
		models.find((model) => model._id === this._id()),
	);

	readonly relations = computed<ModelRelations | null>(() => {
		const model = this.entity();
		return model ? relationsForModel(model) : null;
	});
}
