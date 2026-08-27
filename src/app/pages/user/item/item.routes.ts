import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./item.component').then((m) => m.ItemComponent),
	},
];
