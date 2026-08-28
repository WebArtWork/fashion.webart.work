import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../company/company.data';

interface HomeFeature {
	icon: string;
	title: string;
	description: string;
}

@Component({
	imports: [RouterLink, ButtonModule, CardModule, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly translateService = inject(TranslateService);

	readonly company = companyProfile;

	readonly features: HomeFeature[] = [
		{
			icon: 'pi pi-file-check',
			title: 'Цифровий паспорт рішення',
			description:
				'Кожна річ має повну історію: примірки, резервації, покупки, оренди — все зафіксовано в одному записі, разом з подією.',
		},
		{
			icon: 'pi pi-images',
			title: 'Стрічка пропозицій',
			description:
				'Перегортайте пропозиції як стрічку — обирайте цікаве, відкладайте зайве, і повертайтесь до збереженого будь-коли.',
		},
		{
			icon: 'pi pi-map',
			title: 'Пошук на карті',
			description:
				'Знаходьте речі, колекції та бутіки за розташуванням — з фільтрами під ваш запит.',
		},
		{
			icon: 'pi pi-building',
			title: 'Бутіки та стилісти',
			description:
				'Профілі бутіків, брендів і стилістів поруч із кожною річчю — зрозуміло, хто відповідає за образ.',
		},
	];
}
