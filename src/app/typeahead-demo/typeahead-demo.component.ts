import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-typeahead-demo',
	templateUrl: './typeahead-demo.component.html',
	styleUrls: ['./typeahead-demo.component.css'],
})
export class TypeaheadDemoComponent implements OnInit {
	public typeaheadValue = '';
	public fakeSearchResults: string[] = ['Fake Test Result 1', 'Fake Test Result 2', 'Fake Test Result 3'];

	constructor() {}

	ngOnInit() {}

	typeaheadValueChanged(value: string) {
		this.typeaheadValue = value;
	}
}
