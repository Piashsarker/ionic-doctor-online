import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TextConsultationPage} from './text-consultation';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    TextConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(TextConsultationPage),
    TranslateModule.forChild()
  ],
})
export class TextConsultationPageModule {
}
