import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookAppointmentConfirmationDetailsPage} from './book-appointment-confirmation-details';

@NgModule({
  declarations: [
    BookAppointmentConfirmationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAppointmentConfirmationDetailsPage),
  ],
})
export class BookAppointmentConfirmationDetailsPageModule {
}
