import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { ColorsComponent } from './colors/colors.component';
import { DefaultProgressBarComponent } from './default-progress-bar/default-progress-bar.component';
import { SizesComponent } from './sizes/sizes.component';
import { WithLabelInsideComponent } from './with-label-inside/with-label-inside.component';
import { WithLabelOutsideComponent } from './with-label-outside/with-label-outside.component';

const ProgressPage: NgDocPage = {
  title: `Progress`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.progress.order,
  demos: {
    DefaultProgressBarComponent,
    SizesComponent,
    WithLabelInsideComponent,
    WithLabelOutsideComponent,
    ColorsComponent,
  },
};

export default ProgressPage;
