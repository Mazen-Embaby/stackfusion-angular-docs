import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { DefaultSliderComponent } from './default-slider/default-slider.component';
import { AnimationComponent } from './animation/animation.component';
import { ControlsComponent } from './controls/controls.component';
import { IndicatorsComponent } from './indicators/indicators.component';

/**
 * @status:info SOON
 */
const CarouselPage: NgDocPage = {
  title: `Carousel`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.carousel.order,
  demos: {
    DefaultSliderComponent,
    ControlsComponent,
    IndicatorsComponent,
    AnimationComponent,
  },
};

export default CarouselPage;
