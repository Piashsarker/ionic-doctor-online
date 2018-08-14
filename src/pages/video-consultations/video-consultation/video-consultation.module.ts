import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {VideoConsultationPage} from './video-consultation';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    VideoConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoConsultationPage),
    TranslateModule.forChild()
  ],
})
export class VideoConsultationPageModule {
}
