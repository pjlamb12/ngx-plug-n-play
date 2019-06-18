import { Component, OnInit } from '@angular/core';
import { getRealItemFromListAfterSelection } from '../../../projects/ngx-plug-n-play-lib/src/lib/dropdown/dropdown.module';

@Component({
	selector: 'pnp-dropdown-demo',
	templateUrl: './dropdown-demo.component.html',
	styleUrls: ['./dropdown-demo.component.scss'],
})
export class DropdownDemoComponent implements OnInit {
	public showDropdownResults: boolean = false;
	public selectedItem: { index: number; textContent: string };
	public triggerText: string = 'Dropdown Trigger';
	public dropdownItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
	constructor() {}

	ngOnInit() {}

	selectedItemUpdated(newItem: { index: number; textContent: string }) {
		this.selectedItem = getRealItemFromListAfterSelection(this.selectedItem, newItem);
		this.triggerText = this.selectedItem.textContent;
	}
}
