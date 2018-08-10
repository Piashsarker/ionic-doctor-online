import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TextConsultationPage} from './text-consultation';

@NgModule({
  declarations: [
    TextConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(TextConsultationPage),
  ],
})
export class TextConsultationPageModule {
}
