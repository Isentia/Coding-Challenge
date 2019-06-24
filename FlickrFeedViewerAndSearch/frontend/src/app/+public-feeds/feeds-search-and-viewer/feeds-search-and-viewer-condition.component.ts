import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FeedsTags } from './entities/feeds-tags.enum';

@Component({
  selector: 'app-isentia-ce-feeds-search-and-viewer-condition',
  templateUrl: 'feeds-search-and-viewer-condition.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedsSearchAndViewerConditionComponent {

  public tags: Array<FeedsTags> = [FeedsTags.HOME, FeedsTags.NATIONAL, FeedsTags.OUTSIDE, FeedsTags.BAR, FeedsTags.DESIGN];
}
