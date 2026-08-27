import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-boutiques.component').then((m) => m.ForBoutiquesPageComponent),
	},
];
