import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./boutiques.component').then((m) => m.BoutiquesComponent),
	},
];
