import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultListGroupComponent } from './default-list-group/default-list-group.component';
import { ListGroupWithButtonsComponent } from './list-group-with-buttons/list-group-with-buttons.component';
import { ListGroupWithIconsComponent } from './list-group-with-icons/list-group-with-icons.component';
import { ListGroupWithLinksComponent } from './list-group-with-links/list-group-with-links.component';
import { ListGroupWithHoverComponent } from './list-group-with-hover/list-group-with-hover.component';
import { ListGroupWithNotificationComponent } from './list-group-with-notification/list-group-with-notification.component';

const ListGroupPage: NgDocPage = {
  title: `List Group`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.listGroup.order,
  demos: {
    DefaultListGroupComponent,
    ListGroupWithNotificationComponent,
    ListGroupWithHoverComponent,
    ListGroupWithLinksComponent,
    ListGroupWithButtonsComponent,
    ListGroupWithIconsComponent,
  },
};

export default ListGroupPage;
