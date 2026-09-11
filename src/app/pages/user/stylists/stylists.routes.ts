import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./stylists.component').then((m) => m.StylistsComponent),
	},
];
