import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./items.component').then((m) => m.ItemsComponent),
	},
];
