import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../features/company/company.data';

interface HomeFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface HomeAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	imports: [
		RouterLink,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly translateService = inject(TranslateService);

	readonly company = companyProfile;

	readonly features: HomeFeature[] = [
		{
			number: '01',
			icon: 'pi pi-shop',
			title: 'Бутіки',
			description:
				'Профілі бутіків із речами, пропозиціями та реальною історією кожної одиниці одягу.',
			linkLabel: 'Переглянути бутіки',
			route: '/boutiques',
		},
		{
			number: '02',
			icon: 'pi pi-tag',
			title: 'Бренди',
			description:
				'Колекції брендів поруч із речами, які з них випущені та вже мають власну історію.',
			linkLabel: 'Переглянути бренди',
			route: '/brands',
		},
		{
			number: '03',
			icon: 'pi pi-id-card',
			title: 'Стилісти',
			description:
				'Фахівці, які підбирають образ під подію та ведуть клієнта від примірки до рішення.',
			linkLabel: 'Переглянути стилістів',
			route: '/stylists',
		},
		{
			number: '04',
			icon: 'pi pi-file-check',
			title: 'Цифровий паспорт',
			description:
				'Кожна річ має власну хронологію: примірки, резервації, покупки — і подія, для якої їх обрали.',
			linkLabel: 'Переглянути стрічку',
			route: '/feed',
		},
	];

	readonly audiences: HomeAudience[] = [
		{
			number: '01',
			route: '/for-users',
			title: 'Клієнтам',
			description: 'Обирайте образ, знаючи справжню історію кожної речі.',
		},
		{
			number: '02',
			route: '/for-stylists',
			title: 'Стилістам',
			description: 'Ведіть клієнтів від примірки до рішення в одному місці.',
		},
		{
			number: '03',
			route: '/for-brands',
			title: 'Брендам',
			description: 'Показуйте колекції та відстежуйте шлях кожної речі.',
		},
		{
			number: '04',
			route: '/for-boutiques',
			title: 'Бутікам',
			description: 'Підтверджуйте стан речей і знімайте суперечки з клієнтками.',
		},
		{
			number: '05',
			route: '/for-designers',
			title: 'Дизайнерам',
			description: 'Отримуйте запити на індивідуальний пошив за своїми колекціями.',
		},
	];
}
