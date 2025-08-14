import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { DefaultAccordionComponent } from './default-accordion/default-accordion.component';
import { DocCompTitleOrder } from '../comp-order';

const AccordionPage: NgDocPage = {
  title: `Accordion`,
  mdFile: './index.md',
  category: ComponentsCategory,
  demos: {
    DefaultAccordionComponent,
  },
  order: DocCompTitleOrder.accordion.order,
};

export default AccordionPage;
