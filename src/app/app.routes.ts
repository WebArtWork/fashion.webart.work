import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		canActivate: [MetaGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		data: {
			meta: {
				title: 'Fashion — цифровий паспорт рішень клієнта',
				description:
					'Fashion показує повну історію рішень клієнта про одяг — примірки, резервації, покупки — поруч із подіями, для яких вони приймались, та профілями брендів і бутіків.',
			},
		},
		loadChildren: () =>
			import('./pages/guest/home/home.routes').then((m) => m.routes),
	},
	{
		path: '',
		canActivate: [guestGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
						description:
							'Увійдіть або зареєструйтесь у Fashion, щоб переглядати рішення клієнтів, стрічку пропозицій і керувати профілем.',
					},
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: '',
		canActivate: [authenticatedGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
						description:
							'Керуйте особистими даними профілю Fashion: ім’я, телефон, фото та коротка інформація про себе.',
					},
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'editor',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Редактор',
						description:
							'Перевірте форми додавання речей, пропозицій, колекцій, бутіків та стилістів у Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/editor/editor.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share-profile',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'profile',
					meta: {
						title: 'Поділитися профілем',
						description:
							'Відскануйте QR-код, щоб відкрити мій профіль Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/share/share.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		// Publicly browsable pages — accessible whether signed in or not.
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
						description: 'Налаштування облікового запису Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feedback',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Відгук',
						description: 'Поділіться відгуком або повідомте про помилку в Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/feedback/feedback.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'app',
					meta: {
						title: 'Поділитися Fashion',
						description:
							'Відскануйте QR-код, щоб приєднатися до Fashion за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/user/share/share.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для клієнтів',
						description:
							'Знаходьте ідеальний образ для вашої події разом з Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-users/for-users.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-stylists',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для стилістів',
						description:
							'Розвивайте свою практику стиліста разом з Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-stylists/for-stylists.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-brands',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для брендів',
						description:
							'Покажіть свої колекції клієнтам на Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-brands/for-brands.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-boutiques',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для бутіків',
						description:
							'Розвивайте свій бутік моди разом з Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-boutiques/for-boutiques.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стрічка',
						description:
							'Перегортайте стрічку пропозицій Fashion — відкладайте цікаве в обране, пропускайте зайве.',
					},
				},
				loadChildren: () =>
					import('./pages/user/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'items',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Речі',
						description:
							'Перегляньте всі речі в цифровому паспорті рішень клієнтів Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/items/items.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'boutiques',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Бутіки',
						description:
							'Перегляньте всі бутіки, представлені в Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/boutiques/boutiques.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'brands',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Бренди',
						description:
							'Перегляньте всі бренди, представлені у Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/brands/brands.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'events',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Події',
						description:
							'Перегляньте всі події Fashion та рішення клієнтів, прийняті для них.',
					},
				},
				loadChildren: () =>
					import('./pages/user/events/events.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'models',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Моделі',
						description:
							'Перегляньте всіх моделей, представлених у Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/models/models.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пошук',
						description:
							'Шукайте й фільтруйте пропозиції Fashion за типом, ціною, статусом і брендом.',
					},
				},
				loadChildren: () =>
					import('./pages/user/explore/explore.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Карта',
						description:
							'Знаходьте бутіки та речі на карті Fashion за їхнім реальним розташуванням.',
					},
				},
				loadChildren: () =>
					import('./pages/user/map/map.routes').then((m) => m.routes),
			},
			{
				path: 'item/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Річ',
						description:
							'Цифровий паспорт речі: характеристики, повна історія рішень клієнтів, пов’язані пропозиції.',
					},
				},
				loadChildren: () =>
					import('./pages/user/item/item.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'records/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис історії речі',
						description:
							'Запис з цифрового паспорта речі: носіння, підгонка, чищення або стилізація.',
					},
				},
				loadChildren: () =>
					import('./pages/user/records/records.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'offering/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пропозиція',
						description:
							'Деталі пропозиції про продаж, оренду або індивідуальне замовлення в Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/offering/offering.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'decisions/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Рішення клієнта',
						description:
							'Запис з цифрового паспорта речі: примірка, резервація, покупка або оренда для конкретної події.',
					},
				},
				loadChildren: () =>
					import('./pages/user/decisions/decisions.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'event/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Подія',
						description:
							'Подія у Fashion: клієнт, стиліст, обрані речі, моделі та рішення, прийняті для неї.',
					},
				},
				loadChildren: () =>
					import('./pages/user/event/event.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'model/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Модель',
						description:
							'Профіль моделі у Fashion: параметри, портфоліо та події.',
					},
				},
				loadChildren: () =>
					import('./pages/user/model/model.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'collection/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Колекція',
						description:
							'Колекція у Fashion: речі, бренд і деталі виробництва.',
					},
				},
				loadChildren: () =>
					import('./pages/user/collection/collection.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'brand/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Бренд',
						description:
							'Профіль бренду у Fashion: випущені колекції та речі.',
					},
				},
				loadChildren: () =>
					import('./pages/user/brand/brand.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'boutique/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Бутік',
						description:
							'Профіль бутіку у Fashion: стилісти, речі й пропозиції.',
					},
				},
				loadChildren: () =>
					import('./pages/user/boutique/boutique.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'stylist/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стиліст',
						description:
							'Профіль стиліста у Fashion: контакти, бутік та речі в роботі.',
					},
				},
				loadChildren: () =>
					import('./pages/user/stylist/stylist.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'client/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Профіль користувача',
						description: 'Публічний профіль користувача Fashion.',
					},
				},
				loadChildren: () =>
					import('./pages/user/client/client.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
						description: 'Адміністрування користувачів Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
						description: 'Адміністрування клієнтів Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Адміністрування динамічних форм Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Редагування динамічної форми Fashion.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
