import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DisabledComponent } from './disabled/disabled.component';
import { LoaderComponent } from './loader/loader.component';
import { IconButtonsComponent } from './icon-buttons/icon-buttons.component';
import { ButtonWithLabelComponent } from './button-with-label/button-with-label.component';
import { ButtonsWithIconComponent } from './buttons-with-icon/buttons-with-icon.component';
import { ButtonSizesWithIconComponent } from './button-sizes-with-icon/button-sizes-with-icon.component';
import { ButtonSizesComponent } from './button-sizes/button-sizes.component';
import { OutlineButtonsComponent } from './outline-buttons/outline-buttons.component';
import { PaymentButtonsComponent } from './payment-buttons/payment-buttons.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { ColoredShadowsComponent } from './colored-shadows/colored-shadows.component';
import { GradientOutlineComponent } from './gradient-outline/gradient-outline.component';
import { GradientDuotoneComponent } from './gradient-duotone/gradient-duotone.component';
import { GradientMonochromeComponent } from './gradient-monochrome/gradient-monochrome.component';
import { ButtonPillsComponent } from './button-pills/button-pills.component';
import { DefaultButtonComponent } from './default-button/default-button.component';

const ButtonsPage: NgDocPage = {
  title: `Buttons`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.buttons.order,
  demos: {
    DefaultButtonComponent,
    ButtonPillsComponent,
    GradientMonochromeComponent,
    GradientDuotoneComponent,
    GradientOutlineComponent,
    ColoredShadowsComponent,
    SocialButtonsComponent,
    PaymentButtonsComponent,
    OutlineButtonsComponent,
    ButtonSizesComponent,
    ButtonSizesWithIconComponent,
    ButtonsWithIconComponent,
    ButtonWithLabelComponent,
    IconButtonsComponent,
    LoaderComponent,
    DisabledComponent,
  },
};

export default ButtonsPage;
