import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BmiCalculatorPage} from './bmi-calculator';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    BmiCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(BmiCalculatorPage),
    TranslateModule.forChild()
  ],
})
export class BmiCalculatorPageModule {
}
