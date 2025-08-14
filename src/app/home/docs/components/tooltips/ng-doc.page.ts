import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultTooltipExampleComponent } from './default-tooltip-example/default-tooltip-example.component';
import { PlacementComponent } from './placement/placement.component';
import { TooltipStylesComponent } from './tooltip-styles/tooltip-styles.component';
import { TriggeringComponent } from './triggering/triggering.component';

const TooltipsPage: NgDocPage = {
  title: `Tooltips`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.tooltips.order,
  demos: {
    DefaultTooltipExampleComponent,
    TooltipStylesComponent,
    PlacementComponent,
    TriggeringComponent,
  },
};

export default TooltipsPage;
