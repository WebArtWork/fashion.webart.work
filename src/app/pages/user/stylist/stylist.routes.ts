import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./stylist.component').then((m) => m.StylistComponent),
	},
];
