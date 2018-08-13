import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookAppointmentConfirmationPage} from './book-appointment-confirmation';

@NgModule({
  declarations: [
    BookAppointmentConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAppointmentConfirmationPage),
  ],
})
export class BookAppointmentConfirmationPageModule {
}
