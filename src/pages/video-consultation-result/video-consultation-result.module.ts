import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {VideoConsultationResultPage} from './video-consultation-result';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    VideoConsultationResultPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoConsultationResultPage),
    TranslateModule.forChild()
  ],
})
export class VideoConsultationResultPageModule {
}
