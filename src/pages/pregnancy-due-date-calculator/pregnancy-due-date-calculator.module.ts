import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PregnancyDueDateCalculatorPage} from './pregnancy-due-date-calculator';
import {CalendarModule} from "ion2-calendar";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PregnancyDueDateCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(PregnancyDueDateCalculatorPage),
    CalendarModule,
    TranslateModule.forChild()
  ],
})
export class PregnancyDueDateCalculatorPageModule {
}
