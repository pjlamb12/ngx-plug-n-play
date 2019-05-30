import { ViewChild, Component } from '@angular/core';
import { TypeaheadResultDirective } from './typeahead-result.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'app-test-host',
	template: `
		<p
			pnpTypeaheadResult
			[matchTerm]="matchTerm"
			[highlightMatches]="highlightMatches"
			[caseInsensitiveMatch]="caseInsensitiveMatch"
			*ngFor="let result of results"
		>
			{{ result }}
		</p>
	`,
})
class TestHostComponent {
	@ViewChild(TypeaheadResultDirective) typeaheadResultDirective: TypeaheadResultDirective;
	public matchTerm: string;
	public highlightMatches: boolean;
	public caseInsensitiveMatch: boolean;
	public results: string[] = ['Test test Item 1', 'Test test Item 2'];
}

describe('TypeaheadResultDirective', () => {
	let component: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestHostComponent, TypeaheadResultDirective],
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

	it('should mark the matching pattern in the element with case insensitivity', () => {
		component.caseInsensitiveMatch = true;
		component.highlightMatches = true;
		component.matchTerm = 'test';

		fixture.detectChanges();

		const paragraph = fixture.debugElement.query(By.css('p'));
		const paragraphText = paragraph.nativeElement.innerHTML;
		expect(paragraphText).toBe('<strong>Test</strong> <strong>test</strong> Item 1');
	});

	it('should mark the multi word matching pattern in the element with case insensitivity', () => {
		component.caseInsensitiveMatch = true;
		component.highlightMatches = true;
		component.matchTerm = 'test';

		fixture.detectChanges();

		const paragraph = fixture.debugElement.query(By.css('p'));
		const paragraphText = paragraph.nativeElement.innerHTML;
		expect(paragraphText).toBe('<strong>Test</strong> <strong>test</strong> Item 1');
	});

	it('should leave the content of the element untouched if highlightMatches input is false', () => {
		component.caseInsensitiveMatch = false;
		component.highlightMatches = false;
		component.matchTerm = 'test';

		fixture.detectChanges();

		const paragraph = fixture.debugElement.query(By.css('p'));
		const paragraphText = paragraph.nativeElement.innerHTML.trim();
		expect(paragraphText).toBe('Test test Item 1');
	});

	it('should leave the content of the element untouched if the matchTerm is empty', () => {
		component.caseInsensitiveMatch = false;
		component.highlightMatches = true;
		component.matchTerm = '';

		fixture.detectChanges();

		const paragraph = fixture.debugElement.query(By.css('p'));
		const paragraphText = paragraph.nativeElement.innerHTML.trim();
		expect(paragraphText).toBe('Test test Item 1');
	});
});
