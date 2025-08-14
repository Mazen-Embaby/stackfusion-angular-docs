import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { NavbarWithDropdownComponent } from './navbar-with-dropdown/navbar-with-dropdown.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';
import { MegaMenuNavbarComponent } from './mega-menu-navbar/mega-menu-navbar.component';
import { NavbarWithCtaButtonComponent } from './navbar-with-cta-button/navbar-with-cta-button.component';
import { NavbarWithSearchComponent } from './navbar-with-search/navbar-with-search.component';
import { NavbarWithSubmenuComponent } from './navbar-with-submenu/navbar-with-submenu.component';
import { SolidBackgroundComponent } from './solid-background/solid-background.component';
import { StickyNavbarComponent } from './sticky-navbar/sticky-navbar.component';
import { UserMenuDropdownComponent } from './user-menu-dropdown/user-menu-dropdown.component';
import { MultiLevelDropdownComponent } from './multi-level-dropdown/multi-level-dropdown.component';

const NavbarPage: NgDocPage = {
  title: `Navbar`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.navbar.order,
  demos: {
    DefaultNavbarComponent,
    NavbarWithDropdownComponent,
    MultiLevelDropdownComponent,
    StickyNavbarComponent,
    NavbarWithSubmenuComponent,
    NavbarWithSearchComponent,
    NavbarWithCtaButtonComponent,
    LanguageDropdownComponent,
    UserMenuDropdownComponent,
    MegaMenuNavbarComponent,
    SolidBackgroundComponent,
    HamburgerMenuComponent,
  },
};

export default NavbarPage;
