import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OvulationCalenderPage} from './ovulation-calender';
import {CalendarModule} from "ion2-calendar";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    OvulationCalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(OvulationCalenderPage),
    CalendarModule,
    TranslateModule.forChild()
  ],
})
export class OvulationCalenderPageModule {
}
