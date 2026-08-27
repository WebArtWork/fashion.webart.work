import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./brand.component').then((m) => m.BrandComponent),
	},
];
