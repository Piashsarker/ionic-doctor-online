import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookAppointmentPage} from './book-appointment';
import {TranslateModule} from "@ngx-translate/core";
import {CalendarModule} from "ion2-calendar";

@NgModule({
  declarations: [
    BookAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAppointmentPage),
    TranslateModule.forChild(),
    CalendarModule
  ],
})
export class BookAppointmentPageModule {
}
