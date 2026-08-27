import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./boutique.component').then((m) => m.BoutiqueComponent),
	},
];
