import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TextConsultationBookingPage} from './text-consultation-booking';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    TextConsultationBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(TextConsultationBookingPage),
    TranslateModule.forChild()
  ],
})
export class TextConsultationBookingPageModule {
}
