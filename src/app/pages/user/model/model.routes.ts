import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./model.component').then((m) => m.ModelComponent),
	},
];
