import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionContentComponent } from './accordion-content.component';
import { AccordionPanelComponent } from './accordion-panel.component';
import { AccordionTitleComponent } from './accordion-title.component';

/**
 * @deprecated Use standalone components instead. This module will be removed in a future version.
 * Import components directly: `import { AccordionComponent } from '@sf/accordion';`
 */
@NgModule({
  imports: [
    CommonModule,
    AccordionComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
    AccordionTitleComponent,
  ],
  exports: [AccordionComponent, AccordionContentComponent, AccordionPanelComponent, AccordionTitleComponent],
})
export class AccordionModule {}
