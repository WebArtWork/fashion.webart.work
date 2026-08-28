import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-stylists',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-stylists.component.html',
	styleUrl: './for-stylists.component.scss',
})
export class ForStylistsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує розміщення для стиліста?',
			answer: 'На старті реєстрація стиліста у Fashion безкоштовна — напишіть нам, і ми розкажемо деталі.',
		},
		{
			question: 'Чи потрібно прив’язуватися до бутіку?',
			answer: 'Ні, ви можете вести профіль як незалежний стиліст або як представник бутіку.',
		},
		{
			question: 'Що бачать клієнти в моєму профілі?',
			answer: 'Ваші активні пропозиції, контакти та відгуки клієнтів у публічному профілі стиліста.',
		},
	];
}
