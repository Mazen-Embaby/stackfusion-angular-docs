import { NgDocPage } from '@ng-doc/core';
import { DocCompTitleOrder } from '../comp-order';
import ComponentsCategory from '../ng-doc.category';
import { AdvancedRatingComponent } from './advanced-rating/advanced-rating.component';
import { DefaultRatingComponent } from './default-rating/default-rating.component';
import { RatingCommentComponent } from './rating-comment/rating-comment.component';
import { RatingCountComponent } from './rating-count/rating-count.component';
import { RatingWithTextComponent } from './rating-with-text/rating-with-text.component';
import { ReviewContentComponent } from './review-content/review-content.component';
import { ScoreRatingComponent } from './score-rating/score-rating.component';
import { StarSizesComponent } from './star-sizes/star-sizes.component';

const RatingPage: NgDocPage = {
  title: `Rating`,
  mdFile: './index.md',
  category: ComponentsCategory,
  order: DocCompTitleOrder.rating.order,
  demos: {
    DefaultRatingComponent,
    RatingWithTextComponent,
    RatingCountComponent,
    StarSizesComponent,
    AdvancedRatingComponent,
    ScoreRatingComponent,
    RatingCommentComponent,
    ReviewContentComponent,
  },
};

export default RatingPage;
