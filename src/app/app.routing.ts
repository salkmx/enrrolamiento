import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { ValidatokenComponent } from './components/validatoken/validatoken.component';

const appRoutes: Routes = [
	{
		path: '',
		component: CuestionarioComponent
	},
	{
		path: 'validatoken',
		component: ValidatokenComponent
	},
	{
		path: '**',
		component: CuestionarioComponent
	}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ scrollPositionRestoration: 'enabled'});
