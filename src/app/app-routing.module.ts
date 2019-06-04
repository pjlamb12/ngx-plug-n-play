import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsToasterDemoComponent } from './alerts-toaster-demo/alerts-toaster-demo.component';
import { HomeComponent } from './home/home.component';
import { TypeaheadDemoComponent } from './typeahead-demo/typeahead-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'typeahead-demo', component: TypeaheadDemoComponent },
	{ path: 'alerts-toaster-demo', component: AlertsToasterDemoComponent },
	{ path: 'dropdown-demo', component: DropdownDemoComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
