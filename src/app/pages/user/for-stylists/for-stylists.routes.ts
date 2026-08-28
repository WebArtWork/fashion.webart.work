import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-stylists.component').then(
				(m) => m.ForStylistsPageComponent,
			),
	},
];
