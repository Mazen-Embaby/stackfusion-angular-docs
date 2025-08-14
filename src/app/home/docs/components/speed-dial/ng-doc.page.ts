import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';

/**
 * @status:info SOON
 */
const SpeedDialPage: NgDocPage = {
  title: `Speed Dial`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.speedDial.order,
};

export default SpeedDialPage;
