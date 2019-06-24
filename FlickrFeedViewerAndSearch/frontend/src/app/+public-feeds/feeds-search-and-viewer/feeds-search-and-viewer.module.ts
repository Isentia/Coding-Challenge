import {NgModule} from '@angular/core';
import { FeedsSearchAndViewerComponent } from './feeds-search-and-viewer.component';
import { FeedsSearchAndViewerResultComponent } from './feeds-search-and-viewer-result.component';
import { FeedsSearchAndViewerConditionComponent } from './feeds-search-and-viewer-condition.component';

@NgModule({
  imports: [
  ],
  exports: [
    FeedsSearchAndViewerComponent,
  ],
  declarations: [
    FeedsSearchAndViewerComponent,
    FeedsSearchAndViewerConditionComponent,
    FeedsSearchAndViewerResultComponent,
  ],
  entryComponents: [],
})
export class FeedsSearchAndViewerModule {}
