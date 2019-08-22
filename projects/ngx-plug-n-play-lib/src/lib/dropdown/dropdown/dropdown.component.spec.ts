import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'app-test-host',
	template: `
		<pnp-dropdown (updateShowResults)="showResults = $event">
			<button #dropdownTrigger dropdown-trigger class="btn btn-primary">Dropdown Trigger</button>
			<ul #dropdownOptions dropdown-options class="{{ showResults ? 'open' : '' }}">
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
	public showResults: boolean;
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

	it('should not have the open class when the showResults variable is false', () => {
		const options: ElementRef = fixture.debugElement.query(By.css('[dropdown-options]'));

		expect(options.nativeElement.classList.contains('open')).toBeFalsy();
	});

	it('should have the open class when the showResults variable is true', () => {
		component.dropdownComponent.showResults = true;
		component.showResults = true;
		fixture.detectChanges();

		const options: ElementRef = fixture.debugElement.query(By.css('[dropdown-options]'));

		expect(options.nativeElement.classList.contains('open')).toBeTruthy();
	});

	it('should listen for clicks on the options', fakeAsync(() => {
		spyOn(component.dropdownComponent, 'itemSelected');
		spyOn(component.dropdownComponent.dropdownItemSelected, 'emit');
		component.dropdownComponent.showResults = true;
		component.showResults = true;
		fixture.detectChanges();

		const optionsElements: any[] = fixture.debugElement.queryAll(By.css('[dropdown-options] li'));

		optionsElements[0].nativeElement.click();
		tick();
		expect(component.dropdownComponent.itemSelected).toHaveBeenCalled();
	}));

	it('should output the item that is clicked on in the list', fakeAsync(() => {
		spyOn(component.dropdownComponent.dropdownItemSelected, 'emit');
		component.dropdownComponent.showResults = true;
		component.showResults = true;
		fixture.detectChanges();
		const optionsElements: any[] = fixture.debugElement.queryAll(By.css('[dropdown-options] li'));
		const evt: Partial<Event> = {
			target: optionsElements[0].nativeElement,
		};

		component.dropdownComponent.itemSelected(evt);

		expect(component.dropdownComponent.dropdownItemSelected.emit).toHaveBeenCalled();
		expect(component.dropdownComponent.dropdownItemSelected.emit).toHaveBeenCalledWith({
			index: 0,
			textContent: 'Item 1',
		});
	}));
});
