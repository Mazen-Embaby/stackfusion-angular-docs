import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

const ModalPage: NgDocPage = {
  title: `Modal`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.modal.order,
};

export default ModalPage;
