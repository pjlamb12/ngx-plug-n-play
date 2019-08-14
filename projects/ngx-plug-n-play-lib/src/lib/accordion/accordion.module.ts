import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
	declarations: [AccordionComponent],
	exports: [AccordionComponent],
	imports: [CommonModule],
})
export class AccordionModule {}
