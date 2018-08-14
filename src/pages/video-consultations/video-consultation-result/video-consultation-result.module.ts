import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {VideoConsultationResultPage} from './video-consultation-result';
import {TranslateModule} from "@ngx-translate/core";
import {LiveSupportFabModule} from "../../../components/live-support-fab/live-support-fab.module";
import {DoctorProfileCardModule} from "../../../components/doctor-profile-card/doctor-profile-card.module";

@NgModule({
  declarations: [
    VideoConsultationResultPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoConsultationResultPage),
    TranslateModule.forChild(),
    LiveSupportFabModule,
    DoctorProfileCardModule
  ],
})
export class VideoConsultationResultPageModule {
}
