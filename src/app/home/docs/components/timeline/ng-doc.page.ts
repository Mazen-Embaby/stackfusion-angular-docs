import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { DefaultTimelineComponent } from './default-timeline/default-timeline.component';
import { GroupedTimelineComponent } from './grouped-timeline/grouped-timeline.component';
import { StepperTimelineComponent } from './stepper-timeline/stepper-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

const TimelinePage: NgDocPage = {
  title: `Timeline`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.timeline.order,
  demos: {
    DefaultTimelineComponent,
    VerticalTimelineComponent,
    StepperTimelineComponent,
    ActivityLogComponent,
    GroupedTimelineComponent,
  },
};

export default TimelinePage;
