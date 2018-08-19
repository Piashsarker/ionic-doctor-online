import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LabTestResultPage} from './lab-test-result';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    LabTestResultPage,
  ],
  imports: [
    IonicPageModule.forChild(LabTestResultPage),
    TranslateModule.forChild()
  ],
})
export class LabTestResultPageModule {
}
