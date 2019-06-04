import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'app-test-host',
	template: `
		<pnp-dropdown>
			<button #dropdownTrigger dropdown-trigger class="btn btn-primary">Dropdown Trigger</button>
			<ul #dropdownOptions dropdown-options>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Item 4</li>
			</ul>
		</pnp-dropdown>
	`,
})
class TestHostComponent {
	@ViewChild(DropdownComponent) dropdownComponent: DropdownComponent;
	public typeaheadDebounceTime: number = 300;
	valueChanged(newValue: string) {}
}

describe('DropdownComponent', () => {
	let component: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestHostComponent, DropdownComponent],
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

	it('should toggle the showResults value', () => {
		expect(component.dropdownComponent.showResults).toBeFalsy();
		component.dropdownComponent.toggleShowResults();
		fixture.detectChanges();
		expect(component.dropdownComponent.showResults).toBeTruthy();
	});

	it('should not show the dropdown options when the showResults variable is false', () => {
		const lis = fixture.debugElement.queryAll(By.css('li'));

		expect(lis.length).toBe(0);
	});

	it('should show the dropdown options when the showResults variable is true', () => {
		component.dropdownComponent.showResults = true;
		fixture.detectChanges();

		const lis = fixture.debugElement.queryAll(By.css('li'));

		expect(lis.length).toBe(4);
	});
});
