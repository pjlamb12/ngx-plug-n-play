import { Component, OnInit, ContentChild, AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'pnp-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements AfterContentInit, OnDestroy {
	@ContentChild('dropdownTrigger') dropdownTrigger: ElementRef;
	@ContentChild('dropdownOptions') dropdownOptions: ElementRef;
	public showResults: boolean = false;
	private destroy$: Subject<boolean> = new Subject<boolean>();
	constructor() {}

	ngOnDestroy() {
		this.destroy$.next(true);
	}

	ngAfterContentInit() {
		console.log(this.dropdownTrigger);
		this.setUpButtonClickListener();
		console.log(this.dropdownOptions);
	}

	toggleShowResults() {
		this.showResults = !this.showResults;
	}

	setUpButtonClickListener() {
		fromEvent(this.dropdownTrigger.nativeElement, 'click')
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => (this.showResults = !this.showResults));
	}
}
