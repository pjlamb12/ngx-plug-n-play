import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AlertsDisplayComponent } from './alerts-display.component';
import { AlertToasterService } from '../alert-toaster.service';
import { Subject } from 'rxjs';
import { Alert } from '../alert';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'app-test-host',
	template: `
		<pnp-alerts-display>
			<ng-template let-alert>
				<p>{{ alert.message }}</p>
			</ng-template>
		</pnp-alerts-display>
	`,
})
class TestHostComponent {
	@ViewChild(AlertsDisplayComponent) alertsDisplayComponent: AlertsDisplayComponent;
}

describe('AlertsDisplayComponent', () => {
	let component: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;
	let mockAlertsToasterService: AlertToasterService;

	beforeEach(async(() => {
		mockAlertsToasterService = jasmine.createSpyObj(['toString']);
		mockAlertsToasterService.alerts$ = new Subject<Alert[]>();
		TestBed.configureTestingModule({
			declarations: [AlertsDisplayComponent, TestHostComponent],
			providers: [{ provide: AlertToasterService, useValue: mockAlertsToasterService }],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestHostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show an element for each item in the array list', fakeAsync(() => {
		mockAlertsToasterService.alerts$.next([{ message: 'test message', level: 'success' }]);

		tick();
		fixture.detectChanges();

		const pTags = fixture.debugElement.queryAll(By.css('p'));

		expect(pTags.length).toBe(1);
	}));
});
