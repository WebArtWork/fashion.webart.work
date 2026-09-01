import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-designers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-designers.component.html',
	styleUrl: './for-designers.component.scss',
})
export class ForDesignersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Хто може зареєструватися як дизайнер?',
			answer: 'Будь-який дизайнер одягу чи колекцій — незалежний автор або той, хто працює в команді бренду.',
		},
		{
			question: 'Чи можу я приймати запити на індивідуальний пошив?',
			answer: 'Так, у профілі можна відкрити прийом запитів на кастомні та індивідуальні речі.',
		},
		{
			question: 'Як бренди та бутіки знаходять мій портфоліо?',
			answer: 'Ваше портфоліо з’являється в пошуку Fashion, і бренди та бутіки можуть звернутися напряму.',
		},
	];
}
