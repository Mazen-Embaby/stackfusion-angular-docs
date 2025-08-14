import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

/**
 * @status:info SOON
 */
const DatepickerPage: NgDocPage = {
  title: `Datepicker`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.datepicker.order,
};

export default DatepickerPage;
