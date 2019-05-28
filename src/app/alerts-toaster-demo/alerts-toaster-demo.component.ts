import { Component, OnInit } from '@angular/core';
import { AlertToasterService } from '@lib';

@Component({
	selector: 'app-alerts-toaster-demo',
	templateUrl: './alerts-toaster-demo.component.html',
	styleUrls: ['./alerts-toaster-demo.component.css'],
})
export class AlertsToasterDemoComponent implements OnInit {
	constructor(private alertService: AlertToasterService) {}

	ngOnInit() {}

	addTestAlert(level: string) {
		this.alertService.addAlert({
			message: 'This is a test alert',
			level,
		});
	}

	removeAlert(idx: number) {
		this.alertService.removeAlert(idx);
	}
}
