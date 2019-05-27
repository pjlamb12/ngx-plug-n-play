import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadInputDirective } from './typeahead-input/typeahead-input.directive';
import { TypeaheadResultDirective } from './typeahead-result/typeahead-result.directive';

@NgModule({
	declarations: [TypeaheadInputDirective, TypeaheadResultDirective],
	imports: [CommonModule],
	exports: [TypeaheadInputDirective, TypeaheadResultDirective],
})
export class TypeaheadModule {}
