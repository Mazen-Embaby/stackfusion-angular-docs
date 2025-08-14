import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { CustomSliderControlsComponent } from './custom-slider-controls/custom-slider-controls.component';
import { DefaultGalleryComponent } from './default-gallery/default-gallery.component';
import { FeaturedImageComponent } from './featured-image/featured-image.component';
import { GalleryWithSliderComponent } from './gallery-with-slider/gallery-with-slider.component';
import { GalleryWithTagFiltersComponent } from './gallery-with-tag-filters/gallery-with-tag-filters.component';
import { MasonryGridComponent } from './masonry-grid/masonry-grid.component';
import { QuadGalleryComponent } from './quad-gallery/quad-gallery.component';

const GalleryPage: NgDocPage = {
  title: `Gallery`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.gallery.order,
  demos: {
    DefaultGalleryComponent,
    MasonryGridComponent,
    FeaturedImageComponent,
    QuadGalleryComponent,
    GalleryWithSliderComponent,
    CustomSliderControlsComponent,
    GalleryWithTagFiltersComponent,
  },
};

export default GalleryPage;
