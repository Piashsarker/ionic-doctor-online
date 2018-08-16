import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookAppointmentConfirmationDetailsPage} from './book-appointment-confirmation-details';
import {TranslateModule} from "@ngx-translate/core";
import {DoctorProfileCardModule} from "../../../components/doctor-profile-card/doctor-profile-card.module";
import {LiveSupportFabModule} from "../../../components/live-support-fab/live-support-fab.module";

@NgModule({
  declarations: [
    BookAppointmentConfirmationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAppointmentConfirmationDetailsPage),
    TranslateModule.forChild(),
    DoctorProfileCardModule,
    LiveSupportFabModule
  ],
})
export class BookAppointmentConfirmationDetailsPageModule {
}
