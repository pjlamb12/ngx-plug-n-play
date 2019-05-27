import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsDisplayComponent } from './alerts-display/alerts-display.component';
import { AlertToasterService } from './alert-toaster.service';

@NgModule({
	declarations: [AlertsDisplayComponent],
	imports: [CommonModule],
	exports: [AlertsDisplayComponent],
	providers: [AlertToasterService],
})
export class AlertToasterModule {}
