import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-brands.component').then((m) => m.ForBrandsPageComponent),
	},
];
