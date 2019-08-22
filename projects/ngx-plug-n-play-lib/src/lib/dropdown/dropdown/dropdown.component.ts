import {
	Component,
	ContentChild,
	AfterContentInit,
	OnDestroy,
	ElementRef,
	HostListener,
	Output,
	EventEmitter,
	Input,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DropdownSelectedItem } from '../dropdown-selected-item.interface';

@Component({
	selector: 'pnp-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements AfterContentInit, OnDestroy {
	@ContentChild('dropdownTrigger') dropdownTrigger: ElementRef;
	@ContentChild('dropdownOptions') dropdownOptions: ElementRef;
	@Output() updateShowResults: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() dropdownItemSelected: EventEmitter<DropdownSelectedItem> = new EventEmitter<DropdownSelectedItem>();
	@Input() hideResultsOnSelect: boolean = true;
	@Input() closeOnOuterClick: boolean = true;
	public showResults: boolean = false;
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private isComponentClicked: boolean;

	constructor() {}

	ngOnDestroy() {
		this.destroy$.next(true);
	}

	ngAfterContentInit() {
		this.setUpButtonClickListener();
		this.setUpListItemClickListener();
	}

	@HostListener('click')
	clickInside() {
		this.isComponentClicked = true;
	}

	@HostListener('document:click', ['$event'])
	clickout(evt: Event) {
		if (!this.isComponentClicked && this.showResults && this.closeOnOuterClick) {
			this.toggleShowResults();
		}
		this.isComponentClicked = false;
	}

	toggleShowResults() {
		this.showResults = !this.showResults;
		this.updateShowResults.emit(this.showResults);
	}

	setUpButtonClickListener() {
		fromEvent(this.dropdownTrigger.nativeElement, 'click')
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => this.toggleShowResults());
	}

	setUpListItemClickListener() {
		fromEvent(this.dropdownOptions.nativeElement, 'click')
			.pipe(takeUntil(this.destroy$))
			.subscribe((evt: any) => {
				this.itemSelected(evt);
			});
	}

	itemSelected(evt: any) {
		const lisArray = Array.from(this.dropdownOptions.nativeElement.children);
		const index = lisArray.indexOf(evt.target);
		const textContent = evt.target.textContent;
		this.dropdownItemSelected.emit({ index, textContent });
		if (this.hideResultsOnSelect) {
			this.toggleShowResults();
		}
	}
}
