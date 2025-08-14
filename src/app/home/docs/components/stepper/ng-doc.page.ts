import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { BreadcrumbStepperComponent } from './breadcrumb-stepper/breadcrumb-stepper.component';
import { DefaultStepperComponent } from './default-stepper/default-stepper.component';
import { DetailedStepperComponent } from './detailed-stepper/detailed-stepper.component';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';
import { StepperWithFormComponent } from './stepper-with-form/stepper-with-form.component';
import { TimelineStepperComponent } from './timeline-stepper/timeline-stepper.component';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';

const StepperPage: NgDocPage = {
  title: `Stepper`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.stepper.order,
  demos: {
    DefaultStepperComponent,
    ProgressStepperComponent,
    DetailedStepperComponent,
    VerticalStepperComponent,
    BreadcrumbStepperComponent,
    TimelineStepperComponent,
    StepperWithFormComponent,
  },
};

export default StepperPage;
