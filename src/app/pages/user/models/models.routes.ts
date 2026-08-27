import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./models.component').then((m) => m.ModelsComponent),
	},
];
