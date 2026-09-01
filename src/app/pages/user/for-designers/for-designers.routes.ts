import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-designers.component').then(
				(m) => m.ForDesignersPageComponent,
			),
	},
];
