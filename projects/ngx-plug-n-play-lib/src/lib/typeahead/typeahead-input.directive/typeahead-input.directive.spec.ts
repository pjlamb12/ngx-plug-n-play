import { TypeaheadInputDirective } from './typeahead-input.directive';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'app-test-host',
	template: `
		<input
			pnpTypeaheadInput
			[typeaheadDebounceTime]="typeaheadDebounceTime"
			(valueChanged)="valueChanged($event)"
			type="text"
		/>
	`,
})
class TestHostComponent {
	@ViewChild(TypeaheadInputDirective) typeaheadInputDirective: TypeaheadInputDirective;
	public typeaheadDebounceTime: number = 300;
	valueChanged(newValue: string) {}
}

describe('TypeaheadInputDirective', () => {
	let component: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestHostComponent, TypeaheadInputDirective],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestHostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create a component', () => {
		expect(component).toBeTruthy();
	});

	it('should emit value after keyup and debounce time', fakeAsync(() => {
		spyOn(component, 'valueChanged');

		const input = fixture.debugElement.query(By.css('input'));
		input.nativeElement.value = 'Q';
		input.nativeElement.dispatchEvent(
			new KeyboardEvent('keyup', { bubbles: true, cancelable: true, key: 'Q', shiftKey: true }),
		);

		tick(component.typeaheadDebounceTime);

		expect(component.valueChanged).toHaveBeenCalledWith('Q');
	}));
});
