import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { ECommerceCardComponent } from './e-commerce-card/e-commerce-card.component';
import { CallToActionCardComponent } from './call-to-action-card/call-to-action-card.component';
import { CardFullWidthTabsComponent } from './card-full-width-tabs/card-full-width-tabs.component';
import { CardWithButtonComponent } from './card-with-button/card-with-button.component';
import { CardWithFormInputsComponent } from './card-with-form-inputs/card-with-form-inputs.component';
import { CardWithImageComponent } from './card-with-image/card-with-image.component';
import { CardWithLinkComponent } from './card-with-link/card-with-link.component';
import { CardWithListComponent } from './card-with-list/card-with-list.component';
import { CardWithNavTabsComponent } from './card-with-nav-tabs/card-with-nav-tabs.component';
import { CryptoCardComponent } from './crypto-card/crypto-card.component';
import { DefaultCardComponent } from './default-card/default-card.component';
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';

const CardPage: NgDocPage = {
  title: `Card`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.card.order,
  demos: {
    DefaultCardComponent,
    CardWithButtonComponent,
    CardWithLinkComponent,
    CardWithImageComponent,
    HorizontalCardComponent,
    UserProfileCardComponent,
    CardWithFormInputsComponent,
    ECommerceCardComponent,
    CallToActionCardComponent,
    CardWithNavTabsComponent,
    CardFullWidthTabsComponent,
    CardWithListComponent,
    PricingCardComponent,
    TestimonialCardComponent,
    CryptoCardComponent,
  },
};

export default CardPage;
