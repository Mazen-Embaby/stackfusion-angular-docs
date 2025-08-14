import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { BottomBannerPositionComponent } from './bottom-banner-position/bottom-banner-position.component';
import { DefaultStickyBannerComponent } from './default-sticky-banner/default-sticky-banner.component';
import { InformationalBannerComponent } from './informational-banner/informational-banner.component';
import { MarketingCTABannerComponent } from './marketing-cta-banner/marketing-cta-banner.component';
import { NewsletterSignUpBannerComponent } from './newsletter-sign-up-banner/newsletter-sign-up-banner.component';

const BannerPage: NgDocPage = {
  title: `Banner`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.banner.order,
  demos: {
    DefaultStickyBannerComponent,
    BottomBannerPositionComponent,
    MarketingCTABannerComponent,
    NewsletterSignUpBannerComponent,
    InformationalBannerComponent,
  },
  hidden: true,
};

export default BannerPage;
