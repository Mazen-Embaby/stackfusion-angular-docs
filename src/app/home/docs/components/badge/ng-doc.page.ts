import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultBadgeComponent } from './default-badge/default-badge.component';
import { LargeBadgeComponent } from './large-badge/large-badge.component';
import { BorderBadgeComponent } from './border-badge/border-badge.component';
import { PillsBadgeComponent } from './pills-badge/pills-badge.component';
import { BadgesAsLinksComponent } from './badges-as-links/badges-as-links.component';
import { BadgesWithIconComponent } from './badges-with-icon/badges-with-icon.component';
import { NotificationBadgeComponent } from './notification-badge/notification-badge.component';
import { ButtonWithBadgeComponent } from './button-with-badge/button-with-badge.component';
import { ChipsComponent } from './chips/chips.component';

const BadgePage: NgDocPage = {
  title: `Badge`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.badge.order,
  demos: {
    DefaultBadgeComponent,
    LargeBadgeComponent,
    BorderBadgeComponent,
    PillsBadgeComponent,
    BadgesAsLinksComponent,
    BadgesWithIconComponent,
    NotificationBadgeComponent,
    ButtonWithBadgeComponent,
    ChipsComponent,
  },
};

export default BadgePage;
