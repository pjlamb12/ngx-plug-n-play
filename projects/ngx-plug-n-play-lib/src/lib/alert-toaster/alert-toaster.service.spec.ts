import { TestBed } from '@angular/core/testing';

import { AlertToasterService } from './alert-toaster.service';

describe('AlertToasterService', () => {
	let service: AlertToasterService;
	beforeEach(() => {
		service = new AlertToasterService();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should start with no alerts', () => {
		expect(service.alerts.length).toBe(0);
	});

	it('should add an alert to the array', () => {
		service.addAlert({ message: 'test message', level: 'success' });

		expect(service.alerts.length).toBe(1);
	});

	it('should remove an alert from the array', () => {
		service.alerts = [{ message: 'test message', level: 'success' }];
		service.removeAlert(0);

		expect(service.alerts.length).toBe(0);
	});
});
