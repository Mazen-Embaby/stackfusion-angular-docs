import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultBreadcrumbComponent } from './default-breadcrumb/default-breadcrumb.component';
import { SolidBackgroundComponent } from './solid-background/solid-background.component';
import { HeaderBreadcrumbComponent } from './header-breadcrumb/header-breadcrumb.component';
import { BreadcrumbWithDropdownComponent } from './breadcrumb-with-dropdown/breadcrumb-with-dropdown.component';

const BreadcrumbPage: NgDocPage = {
  title: `Breadcrumb`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.breadcrumb.order,
  demos: {
    DefaultBreadcrumbComponent,
    SolidBackgroundComponent,
    HeaderBreadcrumbComponent,
    BreadcrumbWithDropdownComponent,
  },
};

export default BreadcrumbPage;
