import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

export * from './dropdown.util';

@NgModule({
	declarations: [DropdownComponent],
	imports: [CommonModule],
	exports: [DropdownComponent],
})
export class DropdownModule {}
