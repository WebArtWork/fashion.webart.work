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
			question: 'Скільки коштує партнерство для агентства?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Чи можуть наші агенти мати власні профілі?',
			answer: 'Так, кожен агент агентства отримує свій публічний профіль, пов’язаний з профілем агентства.',
		},
		{
			question: 'Що бачать клієнти в профілі агентства?',
			answer: 'Опис, рейтинг, кількість агентів і всі активні оголошення агентства.',
		},
	];
}
