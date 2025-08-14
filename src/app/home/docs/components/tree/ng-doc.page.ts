import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { TreeWithFlatNodesPage } from './tree-with-flat-nodes/tree-with-flat-nodes-page';

const TreePage: NgDocPage = {
  title: `Tree`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.tree.order,
  demos: {
    TreeWithFlatNodesPage,
  },
};

export default TreePage;
