import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

/**
 * @status:info SOON
 */
const SidebarPage: NgDocPage = {
  title: `Sidebar`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.sidebar.order,
};

export default SidebarPage;
