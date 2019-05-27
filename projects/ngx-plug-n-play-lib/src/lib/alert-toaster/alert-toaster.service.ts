import { Injectable, AfterViewInit } from '@angular/core';
import { Alert } from './alert';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AlertToasterService implements AfterViewInit {
	public alerts: Alert[] = [];
	public alerts$: Subject<Alert[]> = new Subject<Alert[]>();

	constructor() {}

	ngAfterViewInit() {
		this.broadcastAlerts();
	}

	addAlert(alert: Alert) {
		this.alerts = [...this.alerts, alert];
		this.broadcastAlerts();
	}

	removeAlert(index: number) {
		this.alerts = [...this.alerts.slice(0, index), ...this.alerts.slice(index + 1)];
		this.broadcastAlerts();
	}

	private broadcastAlerts() {
		this.alerts$.next(this.alerts);
	}
}
