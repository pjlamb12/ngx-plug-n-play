import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadInputDirective } from './typeahead-input.directive';

@NgModule({
	declarations: [TypeaheadInputDirective],
	imports: [CommonModule],
	exports: [TypeaheadInputDirective],
})
export class TypeaheadModule {}
