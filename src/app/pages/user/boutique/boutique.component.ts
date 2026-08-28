import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { BoutiqueViewComponent } from '../../../components/boutique/boutique-view/boutique-view.component';
import { Boutique } from '../../../boutique/boutique.interface';
import { boutiques } from '../../../boutique/boutique.data';

@Component({
	imports: [BoutiqueViewComponent, CardModule, ButtonModule],
	templateUrl: './boutique.component.html',
	styleUrl: './boutique.component.scss',
})
export class BoutiqueComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Boutique | undefined>(() =>
		boutiques.find((item) => item._id === this._id()),
	);

	share(): void {
		const url = `${window.location.origin}/boutique/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate(
					'Посилання скопійовано',
				)(),
			});
		});
	}
}
