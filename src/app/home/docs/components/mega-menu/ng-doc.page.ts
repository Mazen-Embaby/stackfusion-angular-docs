import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultMegaMenuComponent } from './default-mega-menu/default-mega-menu.component';
import { FullWidthDropdownComponent } from './full-width-dropdown/full-width-dropdown.component';
import { FullWidthWithCtaComponent } from './full-width-with-cta/full-width-with-cta.component';
import { FullWidthWithImageComponent } from './full-width-with-image/full-width-with-image.component';
import { MegaMenuWithIconsComponent } from './mega-menu-with-icons/mega-menu-with-icons.component';

const MegaMenuPage: NgDocPage = {
  title: `Mega Menu`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.megaMenu.order,
  demos: {
    DefaultMegaMenuComponent,
    MegaMenuWithIconsComponent,
    FullWidthDropdownComponent,
    FullWidthWithCtaComponent,
    FullWidthWithImageComponent,
  },
};

export default MegaMenuPage;
