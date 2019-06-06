import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pnp-dropdown-demo',
	templateUrl: './dropdown-demo.component.html',
	styleUrls: ['./dropdown-demo.component.scss'],
})
export class DropdownDemoComponent implements OnInit {
	public showDropdownResults: boolean = false;
	constructor() {}

	ngOnInit() {}
}
