import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { collapseAnimation } from '../../shared/animations/collapse-animation';

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

	constructor(private _elRef: ElementRef) {}

	ngOnInit() {
		this.updateCollapsedStatus();
		this.trigger = this._elRef.nativeElement.querySelector(this.triggerSelector)
			? this._elRef.nativeElement.querySelector(this.triggerSelector)
			: this._elRef.nativeElement.querySelector('.accordion-header-container');
		this.trigger.addEventListener('click', this.toggleAccordionVisibility.bind(this));
	}

	ngOnDestroy() {
		this.trigger.removeEventListener('click', this.toggleAccordionVisibility, { passive: true });
	}

	updateCollapsedStatus() {
		this.isCollapsedUpdated.emit(this.isCollapsed);
	}

	toggleAccordionVisibility() {
		this.isCollapsed = !this.isCollapsed;
		this.updateCollapsedStatus();
	}
}
