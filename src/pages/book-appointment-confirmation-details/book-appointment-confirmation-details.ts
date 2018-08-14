import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppointmentInterface} from "../../model/Appointment";

/**
 * Generated class for the BookAppointmentConfirmationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-appointment-confirmation-details',
  templateUrl: 'book-appointment-confirmation-details.html',
})
export class BookAppointmentConfirmationDetailsPage {

  appointmentDetails: AppointmentInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data != undefined) {
      this.appointmentDetails = this.navParams.data;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAppointmentConfirmationDetailsPage');
  }

}
