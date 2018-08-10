import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LabTestPage} from './lab-test';

@NgModule({
  declarations: [
    LabTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LabTestPage),
  ],
})
export class LabTestPageModule {
}
