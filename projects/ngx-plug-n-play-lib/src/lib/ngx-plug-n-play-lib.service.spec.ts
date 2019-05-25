import { TestBed } from '@angular/core/testing';

import { NgxPlugNPlayLibService } from './ngx-plug-n-play-lib.service';

describe('NgxPlugNPlayLibService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: NgxPlugNPlayLibService = TestBed.get(NgxPlugNPlayLibService);
		expect(service).toBeTruthy();
	});
});
