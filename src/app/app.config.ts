import {
	ApplicationConfig,
	provideZonelessChangeDetection,
} from '@angular/core';
import {
	PreloadAllModules,
	provideRouter,
	withInMemoryScrolling,
	withPreloading,
} from '@angular/router';
import {
	provideNgxAce,
	registerAceMode,
	registerAceTheme,
} from '@wawjs/ngx-ace';
import { provideNgxCore } from '@wawjs/ngx-core';
import { provideNgxCrud } from '@wawjs/ngx-crud';
import { provideNgxHttp } from '@wawjs/ngx-http';
import { provideNgxSocket } from '@wawjs/ngx-socket';
import { provideNgxTinymce } from '@wawjs/ngx-tinymce';
import { provideTranslate } from '@wawjs/ngx-translate';
import { provideNgxPrime } from '@wawjs/ngx-prime/config';
import { definePreset } from '@wawjs/css-prime-styled';
import Aura from '@wawjs/css-prime-themes/aura';

/** Fashion brand plum, matched to the logo's gown color. */
const FashionPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '#f7eef4',
			100: '#ecd6e4',
			200: '#d7aec9',
			300: '#bb7ea8',
			400: '#995685',
			500: '#7a3868',
			600: '#5e2a50',
			700: '#4a2140',
			800: '#3d1c35',
			900: '#33192d',
			950: '#1a0c17',
		},
	},
});
import { NgxBosConfig, ngxBosProvide } from '@wawjs/ngx-bos';
import { io } from 'socket.io-client';
import { environment } from '@env';
import { provideFormComponents } from './app.formcomponents';
import { routes } from './app.routes';
import { tinymceConfig } from './tinymce.config';
import { wawjsConfig } from './wawjs.config';

registerAceMode(
	'javascript',
	() => import('ace-builds/src-noconflict/mode-javascript'),
);
registerAceTheme(
	'clouds',
	() => import('ace-builds/src-noconflict/theme-clouds'),
);
registerAceTheme(
	'github',
	() => import('ace-builds/src-noconflict/theme-github'),
);

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		ngxBosProvide({
			appId: environment.appId,
			url: environment.url,
			roles: environment.roles,
			userFields:
				(environment as unknown as { userFields?: string[] })
					.userFields ?? [],
			userForm:
				(
					environment as unknown as {
						userForm?: NgxBosConfig['userForm'];
					}
				).userForm ?? [],
			defaultUserThumb: 'default.png',
		}),
		provideFormComponents(),
		provideNgxCore(wawjsConfig),
		provideNgxHttp(wawjsConfig),
		provideNgxCrud(wawjsConfig),
		provideNgxSocket({ ...wawjsConfig, io }),
		provideNgxAce({
			mode: 'text',
			theme: 'github',
			useWorker: false,
		}),
		provideTranslate({
			defaultLanguage: environment.defaultLanguageCode,
			languages: environment.languages,
			folder: '/i18n/',
			persistLanguage: true,
		}),
		provideNgxPrime({
			theme: {
				preset: FashionPreset,
				options: { darkModeSelector: "[data-mode='dark']" },
			},
		}),
		provideNgxTinymce(tinymceConfig),
		provideRouter(
			routes,
			withPreloading(PreloadAllModules),
			withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
		),
	],
};
