import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

/**
 * @status:info SOON
 */
const TabsPage: NgDocPage = {
  title: `Tabs`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.tabs.order,
};

export default TabsPage;
