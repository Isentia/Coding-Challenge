import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FeedsSearchAndViewerService } from './feeds-search-and-viewer/feeds-search-and-viewer.service';
import { FeedsSearchEffects } from './feeds-search-and-viewer/store/feeds-search-and-viewer.effects';
import { PublicFeedsRoutingModule } from './public-feeds-routing.module';
import { PublicFeedsModuleComponent } from './public-feeds-module.component';
import { FeedsSearchAndViewerModule } from './feeds-search-and-viewer/feeds-search-and-viewer.module';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      FeedsSearchEffects,
    ]),
    PublicFeedsRoutingModule,
    FeedsSearchAndViewerModule,
  ],
  declarations: [
    PublicFeedsModuleComponent,
  ],
  providers: [
    FeedsSearchAndViewerService,
  ],
})

export class PublicFeedsModule {
}
