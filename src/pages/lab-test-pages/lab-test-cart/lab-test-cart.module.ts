import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LabTestCartPage} from './lab-test-cart';
import {EmptyScreenModule} from "../../../components/empty-screen/empty-screen.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    LabTestCartPage,
  ],
  imports: [
    IonicPageModule.forChild(LabTestCartPage),
    EmptyScreenModule,
    TranslateModule.forChild()
  ],
})
export class LabTestCartPageModule {
}
