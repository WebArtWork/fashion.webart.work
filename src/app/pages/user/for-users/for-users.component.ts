import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує користування Fashion?',
			answer: 'Пошук і перегляд пропозицій для клієнтів безкоштовні.',
		},
		{
			question: 'Звідки береться інформація про речі?',
			answer: 'Кожна річ має цифровий паспорт з історією рішень клієнтів — примірок, резервацій, покупок — та перевіреними даними від бутіків і брендів.',
		},
		{
			question: 'Чи можу я зв’язатися напряму зі стилістом чи бутіком?',
			answer: 'Так, контакти стиліста, бутіку або бренду доступні прямо на сторінці пропозиції.',
		},
	];
}
