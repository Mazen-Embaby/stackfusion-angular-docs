import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { DocCompTitleOrder } from '../comp-order';
import { DefaultAvatarComponent } from './default-avatar/default-avatar.component';
import { BorderedComponent } from './bordered/bordered.component';
import { PlaceholderIconComponent } from './placeholder-icon/placeholder-icon.component';
import { PlaceholderInitialsComponent } from './placeholder-initials/placeholder-initials.component';
import { AvatarTooltipComponent } from './avatar-tooltip/avatar-tooltip.component';
import { DotIndicatorComponent } from './dot-indicator/dot-indicator.component';
import { StackedComponent } from './stacked/stacked.component';
import { AvatarTextComponent } from './avatar-text/avatar-text.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { SizesComponent } from './sizes/sizes.component';

const AvatarPage: NgDocPage = {
  title: `Avatar`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.avatar.order,
  demos: {
    DefaultAvatarComponent,
    BorderedComponent,
    PlaceholderIconComponent,
    PlaceholderInitialsComponent,
    AvatarTooltipComponent,
    DotIndicatorComponent,
    StackedComponent,
    AvatarTextComponent,
    UserDropdownComponent,
    SizesComponent,
  },
};

export default AvatarPage;
