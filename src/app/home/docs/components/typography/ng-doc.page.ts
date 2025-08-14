import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

const TypographyPage: NgDocPage = {
  title: `Typography`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.typography.order,
  hidden: true,
};

export default TypographyPage;
