import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { FooterWithLogoComponent } from './footer-with-logo/footer-with-logo.component';
import { SitemapLinksComponent } from './sitemap-links/sitemap-links.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';

const FooterPage: NgDocPage = {
  title: `Footer`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.footer.order,
  demos: {
    DefaultFooterComponent,
    FooterWithLogoComponent,
    SocialMediaIconsComponent,
    SitemapLinksComponent,
    StickyFooterComponent,
  },
};

export default FooterPage;
