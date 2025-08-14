import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AnimatedDotsComponent } from './animated-dots/animated-dots.component';
import { ButtonWithLoadingComponent } from './button-with-loading/button-with-loading.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { OvalShapeComponent } from './oval-shape/oval-shape.component';
import { SquareSpinnerComponent } from './square-spinner/square-spinner.component';

const LoadingPage: NgDocPage = {
  title: `Loading`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.loading.order,
  demos: {
    LoadingSpinnerComponent,
    LoadingOverlayComponent,
    LoadingDotsComponent,
    AnimatedDotsComponent,
    OvalShapeComponent,
    SquareSpinnerComponent,
    ButtonWithLoadingComponent,
    CodeEditorComponent,
  },
};

export default LoadingPage;
