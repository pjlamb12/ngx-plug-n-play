import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
	let component: AccordionComponent;
	let mockElRef;

	beforeEach(() => {
		component = new AccordionComponent(mockElRef);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
