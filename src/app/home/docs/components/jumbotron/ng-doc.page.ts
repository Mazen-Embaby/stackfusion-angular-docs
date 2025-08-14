import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { DefaultJumbotronComponent } from './default-jumbotron/default-jumbotron.component';
import { FeaturedVideoComponent } from './featured-video/featured-video.component';
import { GradientBackgroundComponent } from './gradient-background/gradient-background.component';
import { JumbotronWithCardsComponent } from './jumbotron-with-cards/jumbotron-with-cards.component';

const JumbotronPage: NgDocPage = {
  title: `Jumbotron`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.Jumbotron.order,
  demos: {
    DefaultJumbotronComponent,
    BackgroundImageComponent,
    FeaturedVideoComponent,
    AuthenticationFormComponent,
    GradientBackgroundComponent,
    JumbotronWithCardsComponent,
  },
};

export default JumbotronPage;
