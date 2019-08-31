import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
	AlertToasterModule,
	TypeaheadModule,
	DropdownModule,
	AccordionModule,
} from '../../projects/ngx-plug-n-play-lib/src/public-api';
import { AlertsToasterDemoComponent } from './alerts-toaster-demo/alerts-toaster-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TypeaheadDemoComponent } from './typeahead-demo/typeahead-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { AccordionDemoComponent } from './accordion-demo/accordion-demo.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		TypeaheadModule,
		AlertToasterModule,
		DropdownModule,
		AccordionModule,
	],
	declarations: [
		AppComponent,
		MainNavComponent,
		HomeComponent,
		TypeaheadDemoComponent,
		AlertsToasterDemoComponent,
		DropdownDemoComponent,
		AccordionDemoComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
