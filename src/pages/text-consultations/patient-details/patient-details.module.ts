import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PatientDetailsPage} from './patient-details';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PatientDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientDetailsPage),
    TranslateModule.forChild()

  ],
})
export class PatientDetailsPageModule {
}
