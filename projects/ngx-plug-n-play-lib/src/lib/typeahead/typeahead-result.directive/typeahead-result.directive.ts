import { Directive, OnChanges, AfterViewInit, Input, ElementRef, SimpleChanges } from '@angular/core';
import { highlightStringMatches } from '../typeahead.util';

@Directive({
	selector: '[pnpTypeaheadResult]',
})
export class TypeaheadResultDirective implements OnChanges, AfterViewInit {
	@Input() matchTerm: string = '';
	@Input() highlightMatches: boolean = true;
	@Input() caseInsensitiveMatch: boolean = true;

	constructor(private _element: ElementRef) {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.matchTerm && this.highlightMatches && this._element.nativeElement.textContent) {
			this.markStringMatches(this._element);
		}
	}

	ngAfterViewInit() {
		if (this.matchTerm && this.highlightMatches && this._element.nativeElement.textContent) {
			this.markStringMatches(this._element);
		}
	}

	public markStringMatches(ref: ElementRef) {
		const itemString = ref.nativeElement.textContent.trim();

		ref.nativeElement.innerHTML =
			this.highlightMatches && this.matchTerm
				? highlightStringMatches(itemString, this.matchTerm, this.caseInsensitiveMatch)
				: itemString;
	}
}
