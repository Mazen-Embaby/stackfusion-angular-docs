import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

const PopoverPage: NgDocPage = {
  title: `Popover`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.popover.order,
};

export default PopoverPage;
