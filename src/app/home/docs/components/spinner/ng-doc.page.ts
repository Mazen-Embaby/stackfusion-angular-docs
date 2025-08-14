import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { AlignmentComponent } from './alignment/alignment.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { DefaultSpinnerComponent } from './default-spinner/default-spinner.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SizesComponent } from './sizes/sizes.component';
import { SpinnerWithCardComponent } from './spinner-with-card/spinner-with-card.component';
import { PendingComponent } from './pending/pending.component';

const SpinnerPage: NgDocPage = {
  title: `Spinner`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.spinner.order,
  demos: {
    DefaultSpinnerComponent,
    PendingComponent,
    ColorsComponent,
    SizesComponent,
    AlignmentComponent,
    SpinnerWithCardComponent,
    ProgressSpinnerComponent,
    ButtonsComponent,
  },
};

export default SpinnerPage;
