import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LabTestPage} from './lab-test';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    LabTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LabTestPage),
    TranslateModule
  ],
})
export class LabTestPageModule {
}
