import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultBottomNavigationComponent } from './default-bottom-navigation/default-bottom-navigation.component';
import { MenuItemsWithBorderComponent } from './menu-items-with-border/menu-items-with-border.component';

const BottomNavigationPage: NgDocPage = {
  title: `Bottom Navigation`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.bottomNavigation.order,
  demos: {
    DefaultBottomNavigationComponent,
    MenuItemsWithBorderComponent,
  },
  hidden: true,
};

export default BottomNavigationPage;
