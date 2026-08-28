import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-brands',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-brands.component.html',
	styleUrl: './for-brands.component.scss',
})
export class ForBrandsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує розміщення бренду?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Що можна показати про колекцію?',
			answer: 'Колекцію, стадії виробництва, пов’язані речі та актуальні пропозиції від вашої команди.',
		},
		{
			question: 'Чи можемо ми вести кілька колекцій одночасно?',
			answer: 'Так, профіль бренду об’єднує всі ваші колекції та речі в одному місці.',
		},
	];
}
