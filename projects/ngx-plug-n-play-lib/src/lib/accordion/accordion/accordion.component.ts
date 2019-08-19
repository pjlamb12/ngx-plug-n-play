import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { collapseAnimation } from '../../shared/animations/collapse-animation';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'pnp-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.css'],
	animations: [trigger('collapse', collapseAnimation())],
})
export class AccordionComponent implements OnInit {
	@Output() isCollapsedUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() triggerSelector: string = '.accordion-trigger';
	public isCollapsed: boolean = true;
	public trigger;
	private destroy$: Subject<boolean> = new Subject<boolean>();

	constructor(private _elRef: ElementRef) {}

	ngOnInit() {
		this.updateCollapsedStatus();
		this.trigger = this._elRef.nativeElement.querySelector(this.triggerSelector)
			? this._elRef.nativeElement.querySelector(this.triggerSelector)
			: this._elRef.nativeElement.querySelector('.accordion-header-container');

		fromEvent(this.trigger, 'click')
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.toggleAccordionVisibility();
			});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
	}

	updateCollapsedStatus() {
		this.isCollapsedUpdated.emit(this.isCollapsed);
	}

	toggleAccordionVisibility() {
		this.isCollapsed = !this.isCollapsed;
		this.updateCollapsedStatus();
	}
}
