import { Directive, AfterContentInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { map, takeUntil, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { TypeaheadKeys } from '../typeahead-keys.enum';

@Directive({
	selector: '[pnpTypeaheadInput]',
})
export class TypeaheadInputDirective implements AfterContentInit {
	private destroy$: Subject<boolean> = new Subject<boolean>();

	@Input() typeaheadDebounceTime: number = 500;
	@Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

	constructor(private searchInput: ElementRef) {}

	ngAfterContentInit() {
		this.setupTypeaheadObservable();
	}

	ngOnDestroy() {
		this.destroy$.next(true);
	}

	setupTypeaheadObservable() {
		fromEvent(this.searchInput.nativeElement, 'keyup')
			.pipe(
				map((ev: KeyboardEvent) => {
					if (ev && ev.key === TypeaheadKeys.ESC) {
						this.searchInput.nativeElement.blur();
					}
					return ev;
				}),
				filter(
					(ev: KeyboardEvent) =>
						ev.key !== TypeaheadKeys.ENTER &&
						ev.key !== TypeaheadKeys.UP &&
						ev.key !== TypeaheadKeys.DOWN &&
						ev.key !== TypeaheadKeys.ESC,
				),
				debounceTime(this.typeaheadDebounceTime),
				distinctUntilChanged(),
				tap(() => this.valueChanged.emit(this.searchInput.nativeElement.value)),
				takeUntil(this.destroy$),
			)
			.subscribe();
	}
}
