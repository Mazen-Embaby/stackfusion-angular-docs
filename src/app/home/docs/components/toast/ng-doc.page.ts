import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

const ToastPage: NgDocPage = {
  title: `Toast`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.toast.order,
};

export default ToastPage;
