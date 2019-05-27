import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { NgForOfContext } from '@angular/common';
import { Subject } from 'rxjs';
import { Alert } from '../alert';
import { AlertToasterService } from '../alert-toaster.service';

@Component({
	selector: 'pnp-alerts-display',
	templateUrl: './alerts-display.component.html',
	styleUrls: ['./alerts-display.component.scss'],
})
export class AlertsDisplayComponent implements OnInit {
	public alerts$: Subject<Alert[]>;
	@ContentChild(TemplateRef)
	alertTemplate: TemplateRef<NgForOfContext<Alert>>;
	constructor(private _alertToaster: AlertToasterService) {}

	ngOnInit() {
		this.alerts$ = this._alertToaster.alerts$;
	}
}
