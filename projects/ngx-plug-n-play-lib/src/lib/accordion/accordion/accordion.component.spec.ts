import { AccordionComponent } from './accordion.component';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'app-test-host',
	template: `
		<pnp-accordion>
			<ng-container accordion-header>
				<p class="accordion-trigger">Trigger Accordion</p>
			</ng-container>
			<div accordion-body>
				<p>
					Lorem, ipsum dolor sit.
				</p>
			</div>
		</pnp-accordion>
	`,
})
class TestHostComponent {
	@ViewChild(AccordionComponent) accordion: AccordionComponent;
}

describe('AccordionComponent', () => {
	let testHostComponent: TestHostComponent;
	let component: AccordionComponent;
	let fixture: ComponentFixture<TestHostComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BrowserAnimationsModule],
			declarations: [TestHostComponent, AccordionComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestHostComponent);
		testHostComponent = fixture.componentInstance;
		component = testHostComponent.accordion;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have the .accordion-trigger element as the trigger', () => {
		const classList: DOMTokenList = component.trigger.classList;

		expect(classList.contains('accordion-trigger')).toBeTruthy();
	});

	it('should call the function that will emit the new accordion value', () => {
		spyOn(component, 'updateCollapsedStatus');
		component.toggleAccordionVisibility();

		expect(component.updateCollapsedStatus).toHaveBeenCalled();
	});

	it('should emit the new accordion value', () => {
		spyOn(component.isCollapsedUpdated, 'emit');
		component.updateCollapsedStatus();

		expect(component.isCollapsedUpdated.emit).toHaveBeenCalled();
	});
});
