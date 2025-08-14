import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { AvatarWithNameComponent } from './avatar-with-name/avatar-with-name.component';
import { BackgroundHoverComponent } from './background-hover/background-hover.component';
import { DelayDurationComponent } from './delay-duration/delay-duration.component';
import { DistanceComponent } from './distance/distance.component';
import { DoublePlacementComponent } from './double-placement/double-placement.component';
import { DropdownDatepickerComponent } from './dropdown-datepicker/dropdown-datepicker.component';
import { DropdownDividerComponent } from './dropdown-divider/dropdown-divider.component';
import { DropdownExampleComponent } from './dropdown-example/dropdown-example.component';
import { DropdownHeaderComponent } from './dropdown-header/dropdown-header.component';
import { DropdownHoverComponent } from './dropdown-hover/dropdown-hover.component';
import { DropdownNavbarComponent } from './dropdown-navbar/dropdown-navbar.component';
import { DropdownOffsetComponent } from './dropdown-offset/dropdown-offset.component';
import { DropdownWithCheckboxComponent } from './dropdown-with-checkbox/dropdown-with-checkbox.component';
import { DropdownWithRadioComponent } from './dropdown-with-radio/dropdown-with-radio.component';
import { DropdownWithScrollingComponent } from './dropdown-with-scrolling/dropdown-with-scrolling.component';
import { DropdownWithSearchComponent } from './dropdown-with-search/dropdown-with-search.component';
import { DropdownWithToggleSwitchComponent } from './dropdown-with-toggle-switch/dropdown-with-toggle-switch.component';
import { HelperTextComponent } from './helper-text/helper-text.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { NotificationBellComponent } from './notification-bell/notification-bell.component';
import { PlacementComponent } from './placement/placement.component';
import { SizesComponent } from './sizes/sizes.component';
import { SkiddingComponent } from './skidding/skidding.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { MultiLevelDropdownComponent } from './multi-level-dropdown/multi-level-dropdown.component';

/**
 * @status:info NEW
 */
const DropdownsPage: NgDocPage = {
  title: `Dropdowns`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.dropdowns.order,
  demos: {
    DropdownExampleComponent,
    DropdownHoverComponent,
    DelayDurationComponent,
    DropdownDividerComponent,
    DropdownHeaderComponent,
    MultiLevelDropdownComponent,
    DropdownWithCheckboxComponent,
    BackgroundHoverComponent,
    HelperTextComponent,
    DropdownWithRadioComponent,
    // BackgroundHoverComponent,
    // HelperTextComponent,
    DropdownWithToggleSwitchComponent,
    DropdownWithScrollingComponent,
    DropdownWithSearchComponent,
    MenuIconComponent,
    NotificationBellComponent,
    UserAvatarComponent,
    AvatarWithNameComponent,
    DropdownNavbarComponent,
    DropdownDatepickerComponent,
    SizesComponent,
    PlacementComponent,
    DoublePlacementComponent,
    DropdownOffsetComponent,
    DistanceComponent,
    SkiddingComponent,
  },
};

export default DropdownsPage;
