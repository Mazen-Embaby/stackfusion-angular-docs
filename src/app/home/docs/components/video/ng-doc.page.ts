import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { AutoplayComponent } from './autoplay/autoplay.component';
import { CustomStylesComponent } from './custom-styles/custom-styles.component';
import { HeightComponent } from './height/height.component';
import { MutedComponent } from './muted/muted.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { WidthComponent } from './width/width.component';

const VideoPage: NgDocPage = {
  title: `Video`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.video.order,
  demos: {
    VideoPlayerComponent,
    AutoplayComponent,
    MutedComponent,
    WidthComponent,
    HeightComponent,
    ResponsiveComponent,
    CustomStylesComponent,
  },
};

export default VideoPage;
