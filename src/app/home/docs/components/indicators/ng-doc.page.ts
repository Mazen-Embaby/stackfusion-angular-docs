import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { IndicatorPositionComponent } from './indicator-position/indicator-position.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { SpinnerIndicatorComponent } from './spinner-indicator/spinner-indicator.component';
import { StepperIndicatorComponent } from './stepper-indicator/stepper-indicator.component';
import { BadgeIndicatorComponent } from './badge-indicator/badge-indicator.component';
import { DefaultIndicatorComponent } from './default-indicator/default-indicator.component';
import { IndicatorCountComponent } from './indicator-count/indicator-count.component';
import { LegendIndicatorComponent } from './legend-indicator/legend-indicator.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';

const IndicatorsPage: NgDocPage = {
  title: `Indicators`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.Indicators.order,
  demos: {
    DefaultIndicatorComponent,
    LegendIndicatorComponent,
    IndicatorCountComponent,
    StatusIndicatorComponent,
    BadgeIndicatorComponent,
    StepperIndicatorComponent,
    LoadingIndicatorComponent,
    SpinnerIndicatorComponent,
    IndicatorPositionComponent,
  },
};

export default IndicatorsPage;
