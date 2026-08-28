import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-boutiques',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-boutiques.component.html',
	styleUrl: './for-boutiques.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBoutiquesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує партнерство для бутіку?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Чи можуть наші стилісти мати власні профілі?',
			answer: 'Так, кожен стиліст бутіку отримує свій публічний профіль, пов’язаний з профілем бутіку.',
		},
		{
			question: 'Що бачать клієнти в профілі бутіку?',
			answer: 'Опис, рейтинг, кількість стилістів і всі активні пропозиції бутіку.',
		},
	];
}
