import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPlugNPlayLibComponent } from './ngx-plug-n-play-lib.component';

describe('NgxPlugNPlayLibComponent', () => {
	let component: NgxPlugNPlayLibComponent;
	let fixture: ComponentFixture<NgxPlugNPlayLibComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxPlugNPlayLibComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxPlugNPlayLibComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
