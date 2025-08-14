import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultButtonGroupComponent } from './default-button-group/default-button-group.component';
import { ButtonGroupAsLinksComponent } from './button-group-as-links/button-group-as-links.component';
import { GroupButtonsWithIconsComponent } from './group-buttons-with-icons/group-buttons-with-icons.component';
import { ButtonGroupOutlineComponent } from './button-group-outline/button-group-outline.component';
import { ButtonGroupOutlineWithIconComponent } from './button-group-outline-with-icon/button-group-outline-with-icon.component';
import { VerticalButtonGroupComponent } from './vertical-button-group/vertical-button-group.component';

const ButtonGroupPage: NgDocPage = {
  title: `Button Group`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.buttonGroup.order,
  demos: {
    DefaultButtonGroupComponent,
    VerticalButtonGroupComponent,
    ButtonGroupAsLinksComponent,
    GroupButtonsWithIconsComponent,
    ButtonGroupOutlineComponent,
    ButtonGroupOutlineWithIconComponent,
  },
};

export default ButtonGroupPage;
