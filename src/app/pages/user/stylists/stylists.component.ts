import { Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';

@Component({
	imports: [],
	templateUrl: './stylists.component.html',
	styleUrl: './stylists.component.scss',
})
export class StylistsComponent {
	readonly translateService = inject(TranslateService);
}
