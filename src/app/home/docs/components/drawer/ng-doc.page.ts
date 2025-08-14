import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

const DrawerPage: NgDocPage = {
  title: `Drawer`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.drawer.order,
  hidden: true,
};

export default DrawerPage;
