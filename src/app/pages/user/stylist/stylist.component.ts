import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { StylistViewComponent } from '../../../components/stylist/stylist-view/stylist-view.component';
import { Stylist } from '../../../stylist/stylist.interface';
import { stylists } from '../../../stylist/stylist.data';

@Component({
	imports: [StylistViewComponent, CardModule, ButtonModule],
	templateUrl: './stylist.component.html',
	styleUrl: './stylist.component.scss',
})
export class StylistComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Stylist | undefined>(() =>
		stylists.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/stylist/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
