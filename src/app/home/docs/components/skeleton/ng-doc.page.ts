import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
import { DefaultSkeletonComponent } from './default-skeleton/default-skeleton.component';
import { ImagePlaceholderComponent } from './image-placeholder/image-placeholder.component';
import { ListPlaceholderComponent } from './list-placeholder/list-placeholder.component';
import { TestimonialPlaceholderComponent } from './testimonial-placeholder/testimonial-placeholder.component';
import { TextPlaceholderComponent } from './text-placeholder/text-placeholder.component';
import { VideoPlaceholderComponent } from './video-placeholder/video-placeholder.component';
import { WidgetPlaceholderComponent } from './widget-placeholder/widget-placeholder.component';

const SkeletonPage: NgDocPage = {
  title: `Skeleton`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.skeleton.order,
  demos: {
    DefaultSkeletonComponent,
    ImagePlaceholderComponent,
    VideoPlaceholderComponent,
    TextPlaceholderComponent,
    CardPlaceholderComponent,
    WidgetPlaceholderComponent,
    ListPlaceholderComponent,
    TestimonialPlaceholderComponent,
  },
};

export default SkeletonPage;
