import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./collection.component').then((m) => m.CollectionComponent),
	},
];
