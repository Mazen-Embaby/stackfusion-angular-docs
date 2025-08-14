import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultMockupComponent } from './default-mockup/default-mockup.component';
import { DesktopMockupComponent } from './desktop-mockup/desktop-mockup.component';
import { LaptopMockupComponent } from './laptop-mockup/laptop-mockup.component';
import { MockupColorsComponent } from './mockup-colors/mockup-colors.component';
import { SmartwatchMockupComponent } from './smartwatch-mockup/smartwatch-mockup.component';
import { TabletMockupComponent } from './tablet-mockup/tablet-mockup.component';
import { Iphone12MockupIosComponent } from './iphone-12-mockup-ios/iphone-12-mockup-ios.component';
import { GooglePixelAndroidComponent } from './google-pixel-android/google-pixel-android.component';

const DeviceMockupsPage: NgDocPage = {
  title: `Device Mockups`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.deviceMockups.order,
  demos: {
    DefaultMockupComponent,
    Iphone12MockupIosComponent,
    GooglePixelAndroidComponent,
    TabletMockupComponent,
    LaptopMockupComponent,
    DesktopMockupComponent,
    SmartwatchMockupComponent,
    MockupColorsComponent,
  },
};

export default DeviceMockupsPage;
